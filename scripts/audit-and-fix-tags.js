/**
 * audit-and-fix-tags.js
 *
 * Phase 1 — Audit
 *   Prints every post and whether its `tags` field is populated.
 *
 * Phase 2 — Fix
 *   For every post whose body still contains a "Tags:" normal paragraph,
 *   this script:
 *     • Collects the consecutive bullet-list blocks that immediately follow it.
 *     • For each bullet block:
 *         - If it carries a link annotation to /blog/tags/…   → upsert a tag doc
 *         - If it carries a link annotation to /blog/categories/… → upsert a category doc
 *         - Otherwise (plain text)                             → upsert a tag doc
 *     • Merges new references into post.tags / post.categories
 *       (existing refs are preserved; duplicates are skipped).
 *     • Removes only the "Tags:" block + its bullet items from the body
 *       (content before and after the section is untouched).
 *     • Writes the patch to Sanity in one commit.
 *
 * Usage (load env first):
 *   set -a && source .env.local && set +a
 *   node --input-type=module scripts/audit-and-fix-tags.js
 */

import { createClient } from "@sanity/client";
import slugify from "slugify";

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  SANITY_WRITE_TOKEN,
} = process.env;

if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_DATASET || !SANITY_WRITE_TOKEN) {
  console.error(
    "Missing env vars: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_WRITE_TOKEN"
  );
  process.exit(1);
}

const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  token: SANITY_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── Portable Text helpers ─────────────────────────────────────────────────────

function blockText(block) {
  return (block.children ?? []).map((c) => c.text ?? "").join("").trim();
}

function blockHref(block) {
  for (const def of block.markDefs ?? []) {
    if (def._type === "link" && def.href) return def.href;
  }
  return null;
}

/** Returns { type: "tag"|"category", slug } from a Wix /blog/ href, or null. */
function parseHref(href) {
  if (!href) return null;
  const t = href.match(/\/blog\/tags\/([^/?#]+)/);
  if (t) return { type: "tag", slug: t[1] };
  const c = href.match(/\/blog\/categories\/([^/?#]+)/);
  if (c) return { type: "category", slug: c[1] };
  return null;
}

// ─── Upsert helpers (deterministic _id → idempotent on re-run) ────────────────

const tagCache = new Set();
async function upsertTag(title) {
  const clean = title.trim();
  const slug = slugify(clean, { lower: true, strict: true });
  const id = `tag-${slug}`;
  if (!tagCache.has(id)) {
    await client.createOrReplace({
      _id: id,
      _type: "tag",
      title: clean,
      slug: { _type: "slug", current: slug },
    });
    tagCache.add(id);
  }
  return id;
}

const catCache = new Set();
async function upsertCategory(title, slug) {
  const id = `category-${slug}`;
  if (!catCache.has(id)) {
    await client.createOrReplace({
      _id: id,
      _type: "category",
      title: title.trim(),
      slug: { _type: "slug", current: slug },
    });
    catCache.add(id);
  }
  return id;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug,
      "tagCount": count(tags),
      tags, categories, body
    }`
  );

  // ── Phase 1: Audit ──────────────────────────────────────────────────────────
  console.log("═══════════════════════════════════════════════");
  console.log(" TAG POPULATION AUDIT");
  console.log("═══════════════════════════════════════════════");

  const missing = [];
  for (const post of posts) {
    const count = post.tagCount ?? 0;
    const status = count > 0 ? `✓ ${count} tag(s)` : "✗ no tags";
    console.log(`  ${status.padEnd(14)} ${post.title ?? post.slug?.current ?? post._id}`);
    if (count === 0) missing.push(post);
  }

  console.log(`\n${posts.length - missing.length}/${posts.length} posts have tags.`);
  if (missing.length > 0) {
    console.log(`${missing.length} post(s) are missing tags — will attempt to fix from body.\n`);
  } else {
    console.log("All posts have tags.\n");
  }

  // ── Phase 2: Fix "Tags:" sections in body ───────────────────────────────────
  console.log("═══════════════════════════════════════════════");
  console.log(" BODY CLEANUP");
  console.log("═══════════════════════════════════════════════\n");

  let fixed = 0;

  for (const post of posts) {
    const body = post.body ?? [];

    // Find the last "Tags:" normal-paragraph block anywhere in the body.
    let labelIndex = -1;
    for (let i = body.length - 1; i >= 0; i--) {
      if (body[i]._type === "block" && blockText(body[i]) === "Tags:") {
        labelIndex = i;
        break;
      }
    }

    if (labelIndex === -1) continue;

    // Collect the consecutive bullet blocks that immediately follow the label.
    const bulletIndices = [];
    for (let i = labelIndex + 1; i < body.length; i++) {
      const block = body[i];
      if (block._type === "block" && block.listItem === "bullet") {
        bulletIndices.push(i);
      } else {
        break; // stop at first non-bullet block
      }
    }

    if (bulletIndices.length === 0) {
      // Label with no items — just remove the label itself.
      const cleanBody = body.filter((_, i) => i !== labelIndex);
      await client.patch(post._id).set({ body: cleanBody }).commit();
      console.log(`  Removed empty "Tags:" label: ${post.title}`);
      fixed++;
      continue;
    }

    // Build tag / category refs from the bullet blocks.
    const existingTagIds = new Set((post.tags ?? []).map((r) => r._ref));
    const existingCatIds = new Set((post.categories ?? []).map((r) => r._ref));
    const tagRefs = [...(post.tags ?? [])];
    const catRefs = [...(post.categories ?? [])];
    const addedTags = [];
    const addedCats = [];

    for (const i of bulletIndices) {
      const block = body[i];
      const text = blockText(block);
      if (!text) continue;

      const href = blockHref(block);
      const parsed = parseHref(href);

      if (parsed?.type === "category") {
        // Link points to /blog/categories/… → treat as category
        const id = await upsertCategory(text, parsed.slug);
        if (!existingCatIds.has(id)) {
          catRefs.push({ _type: "reference", _ref: id, _key: id });
          existingCatIds.add(id);
          addedCats.push(text);
        }
      } else {
        // Plain text bullet OR link to /blog/tags/… → treat as tag
        const id = await upsertTag(text);
        if (!existingTagIds.has(id)) {
          tagRefs.push({ _type: "reference", _ref: id, _key: id });
          existingTagIds.add(id);
          addedTags.push(text);
        }
      }
    }

    // Remove only the label + its bullet items; leave the rest of the body intact.
    const removeSet = new Set([labelIndex, ...bulletIndices]);
    const cleanBody = body.filter((_, i) => !removeSet.has(i));

    await client
      .patch(post._id)
      .set({ body: cleanBody, tags: tagRefs, categories: catRefs })
      .commit();

    const parts = [];
    if (addedTags.length) parts.push(`tags: ${addedTags.join(", ")}`);
    if (addedCats.length) parts.push(`categories: ${addedCats.join(", ")}`);
    console.log(`  ✓ ${post.title}`);
    if (parts.length) console.log(`      Added — ${parts.join(" | ")}`);
    console.log(`      Removed ${removeSet.size} block(s) from body`);
    fixed++;
  }

  console.log(`\nDone. Cleaned ${fixed} post(s).`);
  if (tagCache.size) console.log(`Upserted ${tagCache.size} tag doc(s), ${catCache.size} category doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

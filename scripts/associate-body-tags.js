/**
 * associate-body-tags.js
 *
 * For every post whose body ends with a run of bullet blocks that carry
 * link annotations pointing to the old Wix /blog/tags/ or /blog/categories/
 * URLs, this script:
 *
 *   1. Upserts the corresponding tag / category documents in Sanity
 *      (using the slug from the href and the visible text as the title)
 *   2. Sets those documents as proper references on post.tags / post.categories
 *   3. Removes the bullet blocks (and any preceding "Tags:" label) from the body
 *
 * Usage:
 *   node --experimental-vm-modules scripts/associate-body-tags.js
 *   -- or --
 *   node scripts/associate-body-tags.js   (if package has "type":"module")
 */

import { createClient } from "@sanity/client";

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  SANITY_WRITE_TOKEN,
} = process.env;

if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_DATASET || !SANITY_WRITE_TOKEN) {
  console.error(
    "Missing required env vars: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_WRITE_TOKEN"
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function blockText(block) {
  return (block.children ?? []).map((c) => c.text ?? "").join("").trim();
}

/**
 * Returns the first href found in a block's markDefs, or null.
 */
function blockHref(block) {
  for (const def of block.markDefs ?? []) {
    if (def._type === "link" && def.href) return def.href;
  }
  return null;
}

/**
 * Parses a Wix blog href.
 * Returns { type: "tag" | "category", slug: string } or null.
 */
function parseHref(href) {
  if (!href) return null;
  const tagMatch = href.match(/\/blog\/tags\/([^/?#]+)/);
  if (tagMatch) return { type: "tag", slug: tagMatch[1] };
  const catMatch = href.match(/\/blog\/categories\/([^/?#]+)/);
  if (catMatch) return { type: "category", slug: catMatch[1] };
  return null;
}

// ─── Upsert helpers (deterministic _id so re-runs are idempotent) ─────────────

const tagCache = new Set();
async function upsertTag(title, slug) {
  const id = `tag-${slug}`;
  if (!tagCache.has(id)) {
    await client.createOrReplace({
      _id: id,
      _type: "tag",
      title,
      slug: { _type: "slug", current: slug },
    });
    tagCache.add(id);
    console.log(`    [upsert tag] "${title}" → ${id}`);
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
      title,
      slug: { _type: "slug", current: slug },
    });
    catCache.add(id);
    console.log(`    [upsert category] "${title}" → ${id}`);
  }
  return id;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const posts = await client.fetch(
    `*[_type == "post" && defined(body)]{ _id, title, body, tags, categories }`
  );
  console.log(`Checking ${posts.length} posts for trailing tag/category blocks…\n`);

  let updated = 0;

  for (const post of posts) {
    const body = post.body ?? [];

    // Walk backwards collecting the trailing run of bullet blocks that each
    // carry a /blog/tags/ or /blog/categories/ link annotation.
    const tagBlockSet = new Set();
    for (let i = body.length - 1; i >= 0; i--) {
      const block = body[i];
      if (block._type !== "block" || block.listItem !== "bullet") break;
      if (parseHref(blockHref(block))) {
        tagBlockSet.add(i);
      } else {
        // Bullet block without a recognised href — stop scanning.
        break;
      }
    }

    if (tagBlockSet.size === 0) continue;

    // Also catch an optional "Tags:" label block sitting just before the run.
    const firstTagIdx = Math.min(...tagBlockSet);
    let labelIndex = -1;
    if (firstTagIdx > 0 && blockText(body[firstTagIdx - 1]) === "Tags:") {
      labelIndex = firstTagIdx - 1;
    }

    console.log(`Post: "${post.title}"`);
    console.log(`  Found ${tagBlockSet.size} tag/category block(s)${labelIndex !== -1 ? " + \"Tags:\" label" : ""}`);

    // Build the new tag / category reference arrays, merging with existing ones.
    const existingTagIds = new Set((post.tags ?? []).map((r) => r._ref));
    const existingCatIds = new Set((post.categories ?? []).map((r) => r._ref));
    const tagRefs = [...(post.tags ?? [])];
    const catRefs = [...(post.categories ?? [])];

    for (const i of [...tagBlockSet].sort((a, b) => a - b)) {
      const block = body[i];
      const text = blockText(block);
      const href = blockHref(block);
      const parsed = parseHref(href);
      if (!parsed) continue;

      if (parsed.type === "tag") {
        const id = await upsertTag(text, parsed.slug);
        if (!existingTagIds.has(id)) {
          tagRefs.push({ _type: "reference", _ref: id, _key: id });
          existingTagIds.add(id);
        }
      } else {
        const id = await upsertCategory(text, parsed.slug);
        if (!existingCatIds.has(id)) {
          catRefs.push({ _type: "reference", _ref: id, _key: id });
          existingCatIds.add(id);
        }
      }
    }

    // Strip the tag section (and label if present) from the body.
    const removeSet = new Set(tagBlockSet);
    if (labelIndex !== -1) removeSet.add(labelIndex);
    const cleanBody = body.filter((_, i) => !removeSet.has(i));

    await client
      .patch(post._id)
      .set({ body: cleanBody, tags: tagRefs, categories: catRefs })
      .commit();

    console.log(
      `  ✓ Removed ${removeSet.size} block(s) · ` +
      `${tagRefs.length} tag ref(s) · ${catRefs.length} category ref(s)\n`
    );
    updated++;
  }

  console.log(`Done. Updated ${updated} post(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

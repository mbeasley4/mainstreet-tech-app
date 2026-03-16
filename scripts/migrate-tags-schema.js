import { createClient } from "@sanity/client";
import slugify from "slugify";

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

function blockText(block) {
  return (block.children ?? []).map((c) => c.text ?? "").join("").trim();
}

/** Upsert a tag document, return its _id */
const tagCache = {};
async function upsertTag(title) {
  const normalized = title.trim();
  const slug = slugify(normalized, { lower: true, strict: true });
  const id = `tag-${slug}`;

  if (tagCache[id]) return id;

  await client.createOrReplace({
    _id: id,
    _type: "tag",
    title: normalized,
    slug: { _type: "slug", current: slug },
  });

  tagCache[id] = true;
  return id;
}

async function run() {
  const posts = await client.fetch(
    `*[_type == "post" && defined(body)]{ _id, title, body }`
  );

  console.log(`Processing ${posts.length} posts...`);
  let updated = 0;

  for (const post of posts) {
    const body = post.body ?? [];

    // Find the index of the trailing "Tags:" paragraph
    let tagsLabelIndex = -1;
    for (let i = body.length - 1; i >= 0; i--) {
      const text = blockText(body[i]);
      if (text === "Tags:") {
        tagsLabelIndex = i;
        break;
      }
    }

    if (tagsLabelIndex === -1) {
      console.log(`  No tags section: ${post.title}`);
      continue;
    }

    // Collect bullet list items after the "Tags:" label
    const tagTitles = [];
    for (let i = tagsLabelIndex + 1; i < body.length; i++) {
      const block = body[i];
      if (block._type === "block" && block.listItem === "bullet") {
        const text = blockText(block);
        if (text) tagTitles.push(text);
      }
    }

    if (tagTitles.length === 0) {
      console.log(`  Tags label but no items: ${post.title}`);
      continue;
    }

    // Upsert tag documents
    const tagRefs = [];
    for (const title of tagTitles) {
      const tagId = await upsertTag(title);
      tagRefs.push({ _type: "reference", _ref: tagId, _key: tagId });
    }

    // Strip "Tags:" label and all following blocks from body
    const cleanBody = body.slice(0, tagsLabelIndex);

    await client
      .patch(post._id)
      .set({ body: cleanBody, tags: tagRefs })
      .commit();

    console.log(`  ✓ ${post.title} — ${tagTitles.length} tag(s): ${tagTitles.join(", ")}`);
    updated++;
  }

  console.log(`\nDone. Updated ${updated} posts, created ${Object.keys(tagCache).length} tag documents.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

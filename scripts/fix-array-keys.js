import { createClient } from "@sanity/client";
import { randomBytes } from "crypto";

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const uid = () => randomBytes(6).toString("hex");

function rekey(arr) {
  if (!Array.isArray(arr)) return arr;
  const seen = new Set();
  return arr.map((item) => {
    let key = item._key;
    if (!key || seen.has(key)) key = uid();
    seen.add(key);
    return { ...item, _key: key };
  });
}

async function run() {
  const posts = await client.fetch(
    `*[_type == "post"]{ _id, categories, tags }`
  );

  console.log(`Fixing keys on ${posts.length} posts...`);
  let updated = 0;

  for (const post of posts) {
    const patch = {};
    let dirty = false;

    if (Array.isArray(post.categories) && post.categories.length > 0) {
      const fixed = rekey(post.categories);
      const needsFix = fixed.some((item, i) => item._key !== post.categories[i]?._key);
      if (needsFix) { patch.categories = fixed; dirty = true; }
    }

    if (Array.isArray(post.tags) && post.tags.length > 0) {
      const fixed = rekey(post.tags);
      const needsFix = fixed.some((item, i) => item._key !== post.tags[i]?._key);
      if (needsFix) { patch.tags = fixed; dirty = true; }
    }

    if (dirty) {
      await client.patch(post._id).set(patch).commit();
      console.log(`  Fixed: ${post._id}`);
      updated++;
    }
  }

  console.log(`\nDone. Fixed ${updated} posts.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

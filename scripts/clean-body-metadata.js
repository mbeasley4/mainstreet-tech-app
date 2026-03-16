import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const DATE_RE = /^[A-Z][a-z]+ \d{1,2},? \d{4}$/;
const READ_RE = /\d+ min read/i;

function blockText(block) {
  return (block.children ?? []).map((c) => c.text ?? "").join("").trim();
}

function isMetadataBlock(block) {
  if (block._type !== "block" || block.listItem !== "bullet") return false;
  const text = blockText(block);
  return DATE_RE.test(text) || READ_RE.test(text) || /^[A-Z][a-z]+ [A-Z][a-z]+$/.test(text);
}

async function run() {
  const posts = await client.fetch(
    `*[_type == "post" && defined(body)]{ _id, title, body }`
  );

  console.log(`Checking ${posts.length} posts...`);
  let updated = 0;

  for (const post of posts) {
    const body = post.body ?? [];

    // Find the run of metadata bullet blocks at the start
    const toRemove = new Set();
    for (let i = 0; i < Math.min(body.length, 10); i++) {
      if (isMetadataBlock(body[i])) {
        toRemove.add(i);
      } else {
        break; // stop at first non-metadata block
      }
    }

    // Also scan further in case there's a stray "min read" block within the first 10
    if (toRemove.size === 0) {
      for (let i = 0; i < Math.min(body.length, 10); i++) {
        const text = blockText(body[i]);
        if (READ_RE.test(text) && body[i].listItem === "bullet") {
          // Remove this and up to 2 adjacent list items before it (author, date)
          for (let j = Math.max(0, i - 2); j <= i; j++) {
            if (body[j]._type === "block" && body[j].listItem === "bullet") {
              toRemove.add(j);
            }
          }
          break;
        }
      }
    }

    if (toRemove.size === 0) continue;

    const cleaned = body.filter((_, i) => !toRemove.has(i));

    await client.patch(post._id).set({ body: cleaned }).commit();
    console.log(`  Removed ${toRemove.size} metadata block(s) from: ${post.title}`);
    updated++;
  }

  console.log(`\nDone. Updated ${updated} posts.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

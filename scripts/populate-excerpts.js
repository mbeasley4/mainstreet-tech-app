import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

/** Extract plain text from a Portable Text body array */
function extractText(body) {
  if (!Array.isArray(body)) return "";
  return body
    .filter((b) => b._type === "block" && Array.isArray(b.children))
    .map((b) => b.children.map((c) => c.text ?? "").join(""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

async function run() {
  const posts = await client.fetch(
    `*[_type == "post" && !defined(excerpt)] { _id, title, body }`
  );

  console.log(`Found ${posts.length} posts without an excerpt.`);

  for (const post of posts) {
    const full = extractText(post.body);
    const excerpt = full.slice(0, 240).trimEnd();

    if (!excerpt) {
      console.log(`Skipping (no body text): ${post.title}`);
      continue;
    }

    await client.patch(post._id).set({ excerpt }).commit();
    console.log(`Updated: ${post.title}`);
  }

  console.log("Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

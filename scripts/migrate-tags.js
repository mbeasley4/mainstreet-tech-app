import { chromium } from "playwright";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const BASE = "https://www.mainstreettech.us/post";

async function run() {
  // Fetch all posts from Sanity that have a slug
  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ _id, slug }`
  );

  console.log(`Found ${posts.length} posts in Sanity.`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const post of posts) {
    const url = `${BASE}/${post.slug.current}`;
    console.log(`Scraping tags: ${url}`);

    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    } catch {
      console.log(`  Failed to load: ${url}`);
      continue;
    }

    // Wait briefly for JS-rendered tag cloud
    try {
      await page.waitForSelector('[data-hook="tag-cloud-root"]', { timeout: 8000 });
    } catch {
      // No tags section on this post
    }

    const tags = await page.evaluate(() => {
      const links = document.querySelectorAll(
        '[data-hook="tag-cloud-root"] a'
      );
      return [...links].map((a) => a.textContent.trim()).filter(Boolean);
    });

    if (tags.length === 0) {
      console.log(`  No tags found.`);
      continue;
    }

    console.log(`  Tags: ${tags.join(", ")}`);

    await client.patch(post._id).set({ tags }).commit();
  }

  await browser.close();
  console.log("\nTag migration complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

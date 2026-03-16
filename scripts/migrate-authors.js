import { chromium } from "playwright";
import axios from "axios";
import slugify from "slugify";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const BASE = "https://www.mainstreettech.us/post";

/** Upload an image URL to Sanity and return an image asset reference */
async function uploadImage(url) {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        Referer: "https://www.mainstreettech.us/",
      },
    });

    const contentType = response.headers["content-type"];
    if (!contentType?.includes("image")) return null;

    const filename = url.split("/").pop().split("?")[0];
    const asset = await client.assets.upload("image", response.data, { filename });

    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } catch {
    return null;
  }
}

/** Upsert an author document, uploading image if needed. Returns the author _id. */
async function upsertAuthor(name, imageUrl) {
  const slug = slugify(name, { lower: true, strict: true });
  const id = `author-${slug}`;

  const existing = await client.fetch(`*[_id == $id][0]{ _id }`, { id });
  if (existing) return id;

  const doc = { _id: id, _type: "author", name, slug: { _type: "slug", current: slug } };

  if (imageUrl) {
    const imageAsset = await uploadImage(imageUrl);
    if (imageAsset) doc.image = imageAsset;
  }

  await client.createOrReplace(doc);
  console.log(`  Created author: ${name} → ${id}`);
  return id;
}

async function run() {
  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current) && !defined(author)]{ _id, slug }`
  );

  console.log(`Found ${posts.length} posts in Sanity.`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const post of posts) {
    const url = `${BASE}/${post.slug.current}`;
    console.log(`Scraping: ${url}`);

    let loaded = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await page.goto(url, { waitUntil: "load", timeout: 30000 });
        await page.waitForSelector('[data-hook="user-name"]', { timeout: 10000 });
        loaded = true;
        break;
      } catch {
        console.log(`  Attempt ${attempt} failed, retrying...`);
        await new Promise((r) => setTimeout(r, 3000 * attempt));
      }
    }

    if (!loaded) {
      console.log(`  Skipping after 3 failed attempts`);
      continue;
    }

    const meta = await page.evaluate(() => {
      const nameEl = document.querySelector('[data-hook="user-name"]');
      const timeEl = document.querySelector('[data-hook="time-to-read"]');
      const imgEl = document.querySelector('img[alt^="Writer:"]');

      return {
        authorName: nameEl?.textContent?.trim() ?? null,
        readingTime: timeEl?.textContent?.trim() ?? null,
        authorImageSrc: imgEl?.src ?? null,
      };
    });

    if (!meta.authorName) {
      console.log(`  No author found`);
      continue;
    }

    console.log(`  Author: ${meta.authorName} | ${meta.readingTime ?? "?"}`);

    // Clean up the Wix image URL to get full resolution
    let cleanImageUrl = null;
    if (meta.authorImageSrc) {
      const match = meta.authorImageSrc.match(
        /https:\/\/static\.wixstatic\.com\/media\/[^/]+/
      );
      if (match) cleanImageUrl = `${match[0]}/v1/fill/w_200,h_200,al_c,q_80`;
    }

    const authorId = await upsertAuthor(meta.authorName, cleanImageUrl);

    const patch = {
      author: { _type: "reference", _ref: authorId },
    };
    if (meta.readingTime) patch.readingTime = meta.readingTime;

    await client.patch(post._id).set(patch).commit();
    console.log(`  Patched post: ${post._id}`);
    await new Promise((r) => setTimeout(r, 1000));
  }

  await browser.close();
  console.log("\nAuthor migration complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

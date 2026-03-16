/**
 * patch-post-images.js
 *
 * Scrapes the card-image and category tags for every blog post on the Wix
 * blog listing page, uploads each image to Sanity, and patches the matching
 * post document with `mainImage` and `tags`.
 *
 * Usage:
 *   pnpm patch-images   (or: node scripts/patch-post-images.js)
 */

import { chromium } from "playwright";
import axios from "axios";
import { createClient } from "@sanity/client";

/* ── Sanity client ──────────────────────────────────────── */

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

/* ── Helpers ────────────────────────────────────────────── */

/**
 * Strip Wix CDN transform parameters and return the raw media URL
 * so we download the original image rather than a cropped thumbnail.
 */
function cleanWixImageUrl(url) {
  if (!url) return null;
  const match = url.match(/https:\/\/static\.wixstatic\.com\/media\/[^/?]+/);
  if (!match) return null;
  return match[0];
}

/** Download a URL and upload it to Sanity as an image asset. */
async function uploadImageToSanity(imageUrl) {
  const cleanUrl = cleanWixImageUrl(imageUrl);
  if (!cleanUrl) {
    console.warn("  ✗ Could not clean image URL:", imageUrl);
    return null;
  }

  console.log("  ↑ Uploading:", cleanUrl);

  try {
    const response = await axios.get(cleanUrl, {
      responseType: "arraybuffer",
      timeout: 30_000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        Referer: "https://www.mainstreettech.us/",
      },
    });

    const contentType = response.headers["content-type"] || "image/jpeg";
    if (!contentType.startsWith("image/")) {
      console.warn("  ✗ Response is not an image:", contentType);
      return null;
    }

    const filename = cleanUrl.split("/").pop() || "image.jpg";
    const asset = await client.assets.upload("image", Buffer.from(response.data), {
      filename,
      contentType,
    });

    return {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.warn("  ✗ Upload failed:", err.message);
    return null;
  }
}

/* ── Step 1: scrape all listing pages ───────────────────── */

/** Extract card data (slug, imageUrl, tags) from whatever is currently loaded. */
function extractCards() {
  const results = [];
  document.querySelectorAll('[data-hook="item-container"]').forEach((card) => {
    const anchor = card.querySelector('a[href*="/post/"]');
    if (!anchor) return;

    const href = anchor.href;
    const slugMatch = href.match(/\/post\/([^/?#]+)/);
    if (!slugMatch) return;
    const slug = slugMatch[1];

    let imageUrl = null;
    const img = card.querySelector('[data-hook="gallery-item-image-img"]');
    if (img) imageUrl = img.getAttribute("src");
    if (!imageUrl) {
      const anyImg = card.querySelector(".gallery-item-content img");
      if (anyImg) imageUrl = anyImg.getAttribute("src");
    }

    const tags = [];
    card.querySelectorAll('[data-hook="post-category-label"] a').forEach((a) => {
      const label = a.textContent.trim();
      if (label) tags.push(label);
    });

    results.push({ slug, imageUrl, tags, href });
  });
  return results;
}

/** Load a single listing URL, scroll/click-load-more until exhausted, return cards. */
async function scrapeListingPage(page, url) {
  console.log(`  → ${url}`);
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  } catch {
    return [];
  }

  // Give the gallery time to render its initial batch
  await page.waitForTimeout(3000);

  // Click "Load More" or scroll until no new cards appear
  let previousCount = 0;
  for (let i = 0; i < 50; i++) {
    // Try clicking a "Load More" / "Show More" button if present
    const clicked = await page.evaluate(() => {
      const btn = document.querySelector(
        '[data-hook="load-more-button"], button[aria-label*="more" i], button[class*="load-more" i], [class*="loadMore" i] button'
      );
      if (btn) { btn.click(); return true; }
      return false;
    });

    // Also scroll to bottom to trigger lazy loading
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(clicked ? 3000 : 2000);

    const currentCount = await page.evaluate(
      () => document.querySelectorAll('[data-hook="item-container"]').length
    );
    if (currentCount === previousCount) break;
    previousCount = currentCount;
    console.log(`    ${currentCount} cards loaded…`);
  }

  return page.evaluate(extractCards);
}

async function scrapeCardData() {
  console.log("Launching browser…");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const seen = new Map(); // slug → card data (dedup)

  // Page 1 is at /blog, subsequent pages at /blog/page/N
  for (let pageNum = 1; pageNum <= 50; pageNum++) {
    const url =
      pageNum === 1
        ? "https://www.mainstreettech.us/blog"
        : `https://www.mainstreettech.us/blog/page/${pageNum}`;

    const cards = await scrapeListingPage(page, url);

    if (cards.length === 0) {
      console.log(`  No cards on page ${pageNum}, stopping.\n`);
      break;
    }

    let newOnPage = 0;
    for (const card of cards) {
      if (!seen.has(card.slug)) {
        seen.set(card.slug, card);
        newOnPage++;
      }
    }

    console.log(`  Page ${pageNum}: ${cards.length} cards (${newOnPage} new, ${seen.size} total)\n`);

    // If every card on this page was already seen from page 1's load-more loop, stop
    if (newOnPage === 0) break;
  }

  await browser.close();

  const all = [...seen.values()];
  console.log(`Total unique posts found: ${all.length}\n`);
  return all;
}

/* ── Step 2: query existing Sanity posts ────────────────── */

async function fetchSanityPosts() {
  const posts = await client.fetch(
    `*[_type == "post"]{ _id, slug, mainImage, tags }`
  );
  const map = new Map();
  for (const p of posts) {
    if (p.slug?.current) map.set(p.slug.current, p);
  }
  return map;
}

/* ── Step 3: patch each post ────────────────────────────── */

async function run() {
  const [cards, sanityMap] = await Promise.all([
    scrapeCardData(),
    fetchSanityPosts(),
  ]);

  let patched = 0;
  let skipped = 0;
  let notFound = 0;

  for (const { slug, imageUrl, tags } of cards) {
    const sanityPost = sanityMap.get(slug);

    if (!sanityPost) {
      console.log(`⚠  No Sanity post for slug "${slug}"`);
      notFound++;
      continue;
    }

    const alreadyHasImage = Boolean(sanityPost.mainImage?.asset?._ref);
    const alreadyHasTags = Array.isArray(sanityPost.tags) && sanityPost.tags.length > 0;

    if (alreadyHasImage && alreadyHasTags) {
      console.log(`— Already complete, skipping: ${slug}`);
      skipped++;
      continue;
    }

    console.log(`Patching: ${slug}  [tags: ${tags.join(", ") || "none"}]`);

    const patch = client.patch(sanityPost._id);

    /* Upload image only if missing */
    if (!alreadyHasImage && imageUrl) {
      const imageAsset = await uploadImageToSanity(imageUrl);
      if (imageAsset) {
        patch.set({ mainImage: imageAsset });
      } else {
        console.warn(`  ✗ Image upload failed for "${slug}"`);
      }
    }

    /* Set tags only if missing */
    if (!alreadyHasTags && tags.length > 0) {
      patch.set({ tags });
    }

    await patch.commit();
    console.log(`  ✓ Patched "${slug}"\n`);
    patched++;
  }

  console.log("─────────────────────────────────────────");
  console.log(`Done.  Patched: ${patched} | Already complete: ${skipped} | No match in Sanity: ${notFound}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

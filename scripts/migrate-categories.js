import { chromium } from "playwright";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const CATEGORIES = [
  { slug: "database-category",      title: "Database Management" },
  { slug: "application-services",   title: "Application Services" },
  { slug: "hosting-services",       title: "Hosting Services" },
  { slug: "cloud-services",         title: "Cloud Services" },
  { slug: "it-consulting",          title: "IT Advisory" },
  { slug: "staff-augmentation",     title: "Staff Augmentation" },
  { slug: "data-analytics-1",       title: "Data & Analytics" },
  { slug: "automation",             title: "Automation" },
  { slug: "employee-spotlight",     title: "Employee Spotlight" },
  { slug: "artificial-intelligence",title: "Artificial Intelligence" },
  { slug: "digital-transformation", title: "Digital Transformation" },
];

const BASE = "https://www.mainstreettech.us/blog/categories";

/** Upsert a category document and return its _id */
async function upsertCategory(cat) {
  const id = `category-${cat.slug}`;
  await client.createOrReplace({
    _id: id,
    _type: "category",
    title: cat.title,
    slug: { _type: "slug", current: cat.slug },
  });
  return id;
}

/** Scrape all post URLs from a Wix category page (handles pagination) */
async function getPostsForCategory(browser, categorySlug) {
  const page = await browser.newPage();
  const postUrls = new Set();
  let pageNumber = 1;

  while (true) {
    const url =
      pageNumber === 1
        ? `${BASE}/${categorySlug}`
        : `${BASE}/${categorySlug}/page/${pageNumber}`;

    console.log(`  Scraping: ${url}`);

    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
    } catch {
      break;
    }

    const found = await page.evaluate(() =>
      [...document.querySelectorAll("a[href*='/post/']")].map((a) => a.href)
    );

    if (found.length === 0) break;
    found.forEach((u) => postUrls.add(u));
    pageNumber++;
  }

  await page.close();
  return [...postUrls];
}

/** Convert a Wix post URL to the slug used in Sanity (_id: post-<slug>) */
function wixUrlToSanityId(url) {
  const match = url.match(/\/post\/([^/?#]+)/);
  if (!match) return null;
  return `post-${match[1]}`;
}

async function run() {
  const browser = await chromium.launch();

  // Step 1 — upsert all category docs
  console.log("Creating category documents in Sanity...");
  const categoryIds = {};
  for (const cat of CATEGORIES) {
    const id = await upsertCategory(cat);
    categoryIds[cat.slug] = id;
    console.log(`  ✓ ${cat.title} → ${id}`);
  }

  // Step 2 — for each category, scrape posts and patch them
  for (const cat of CATEGORIES) {
    console.log(`\nProcessing category: ${cat.title}`);
    const postUrls = await getPostsForCategory(browser, cat.slug);
    console.log(`  Found ${postUrls.length} posts`);

    for (const url of postUrls) {
      const sanityId = wixUrlToSanityId(url);
      if (!sanityId) continue;

      // Check if post exists in Sanity
      const exists = await client.fetch(
        `defined(*[_id == $id][0]._id)`,
        { id: sanityId }
      );

      if (!exists) {
        console.log(`  Skipping (not in Sanity): ${sanityId}`);
        continue;
      }

      // Append category ref only if not already present
      const post = await client.fetch(
        `*[_id == $id][0]{ categories }`,
        { id: sanityId }
      );

      const existing = (post?.categories ?? []).map((c) => c._ref);
      if (existing.includes(categoryIds[cat.slug])) {
        console.log(`  Already tagged: ${sanityId}`);
        continue;
      }

      await client
        .patch(sanityId)
        .setIfMissing({ categories: [] })
        .append("categories", [
          { _type: "reference", _ref: categoryIds[cat.slug] },
        ])
        .commit();

      console.log(`  Tagged: ${sanityId}`);
    }
  }

  await browser.close();
  console.log("\nCategory migration complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

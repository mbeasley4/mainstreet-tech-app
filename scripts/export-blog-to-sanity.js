import { chromium } from "playwright";
import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs-extra";
import slugify from "slugify";

const BASE = "https://www.mainstreettech.us";

async function getAllPostLinks() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log("Opening blog...");

  await page.goto(`${BASE}/blog`, {
    waitUntil: "networkidle"
  });

  let previousHeight = 0;

  console.log("Scrolling to load posts...");

  while (true) {
    const height = await page.evaluate(() => document.body.scrollHeight);

    if (height === previousHeight) break;

    previousHeight = height;

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await page.waitForTimeout(2000);
  }

  const links = await page.evaluate(() => {
    return [...document.querySelectorAll("a")]
      .map(a => a.href)
      .filter(h => h.includes("/post/"));
  });

  await browser.close();

  return [...new Set(links)];
}

async function scrapePost(url) {
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);

  const title = $("h1").first().text().trim();
  const content = $("article").text().trim();

  const slug = slugify(title, { lower: true });

  return {
    _id: `post-${slug}`,
    _type: "post",
    title,
    slug: {
      _type: "slug",
      current: slug
    },
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: content
          }
        ]
      }
    ]
  };
}

async function run() {
  const links = await getAllPostLinks();

  console.log(`Found ${links.length} posts`);

  const docs = [];

  for (const link of links) {
    console.log("Scraping:", link);

    const post = await scrapePost(link);

    docs.push(post);
  }

  const file = docs.map(d => JSON.stringify(d)).join("\n");

  await fs.writeFile("./sanity-import.ndjson", file);

  console.log("Export complete → sanity-import.ndjson");
}

run();
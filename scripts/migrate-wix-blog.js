import { chromium } from "playwright";
import axios from "axios";
import * as cheerio from "cheerio";
import slugify from "slugify";
import fs from "fs-extra";
import { createClient } from "@sanity/client";

/* ---------------------------
SANITY CONFIG
--------------------------- */

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false
});

const BASE = "https://www.mainstreettech.us";

/* ---------------------------
FIX WIX IMAGE URL
--------------------------- */

function cleanWixImage(url) {
  if (!url) return null;

  // Extract just the raw media filename (before any /v1/ transform path)
  const match = url.match(
    /https:\/\/static\.wixstatic\.com\/media\/([\w~.\-]+\.[a-zA-Z]{2,4})/
  );

  if (!match) return null;

  const filename = match[1];
  // Request a high-quality large image using Wix's fill transform
  return `https://static.wixstatic.com/media/${filename}/v1/fill/w_1600,h_900,al_c,q_90,usm_0.33_1.00_0.00/${filename}`;
}

/* ---------------------------
UPLOAD IMAGE TO SANITY
--------------------------- */

async function uploadImage(url) {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        Referer: "https://www.mainstreettech.us/"
      }
    });

    const contentType = response.headers["content-type"];

    if (!contentType || !contentType.includes("image")) {
      return null;
    }

    const filename = url.split("/").pop().split("?")[0];

    const asset = await client.assets.upload(
      "image",
      response.data,
      { filename }
    );

    return {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: asset._id
      }
    };
  } catch {
    console.log("Image upload failed:", url);
    return null;
  }
}

/* ---------------------------
PARSE DATE FROM WIX POST
--------------------------- */

function parseDateFromPage($) {
  const dateText =
    $("time").attr("datetime") ||
    $("time").text() ||
    $("span:contains(', 20')").first().text();

  if (!dateText) {
    return new Date().toISOString();
  }

  const parsed = new Date(dateText.trim());

  if (isNaN(parsed)) {
    return new Date().toISOString();
  }

  return parsed.toISOString();
}

/* ---------------------------
PARSE INLINE HTML → Portable Text children + markDefs
--------------------------- */

function parseInlineContent($el, $) {
  const children = [];
  const markDefs = [];
  let linkCount = 0;

  function processNode(node, marks) {
    if (node.type === "text") {
      const text = node.data || "";
      if (text) {
        children.push({
          _type: "span",
          text,
          marks: marks.length ? [...marks] : []
        });
      }
      return;
    }

    if (node.type !== "tag") return;

    const tag = (node.name || "").toLowerCase();
    let newMarks = [...marks];

    if (tag === "strong" || tag === "b") {
      newMarks.push("strong");
    } else if (tag === "em" || tag === "i") {
      newMarks.push("em");
    } else if (tag === "u") {
      newMarks.push("underline");
    } else if (tag === "s" || tag === "strike" || tag === "del") {
      newMarks.push("strike-through");
    } else if (tag === "code") {
      newMarks.push("code");
    } else if (tag === "a") {
      const href = $(node).attr("href");
      if (href) {
        const key = `lnk${linkCount++}`;
        markDefs.push({ _key: key, _type: "link", href });
        newMarks.push(key);
      }
    } else if (tag === "br") {
      children.push({ _type: "span", text: "\n", marks: [...marks] });
      return;
    }

    (node.children || []).forEach(child =>
      processNode(child, newMarks)
    );
  }

  const domNode = $el.get(0);
  if (domNode) {
    (domNode.children || []).forEach(child => processNode(child, []));
  }

  // Merge adjacent spans with identical marks
  const merged = [];
  for (const span of children) {
    const prev = merged[merged.length - 1];
    if (
      prev &&
      JSON.stringify(prev.marks) === JSON.stringify(span.marks)
    ) {
      prev.text += span.text;
    } else {
      merged.push({ ...span });
    }
  }

  return { children: merged, markDefs };
}

/* ---------------------------
HTML → PORTABLE TEXT
--------------------------- */

async function htmlToBlocks(html, mainImageUrl) {
  const $ = cheerio.load(html);
  const blocks = [];

  const BLOCK_TAGS = new Set([
    "p", "h1", "h2", "h3", "h4", "h5", "h6",
    "blockquote", "ul", "ol", "img"
  ]);

  const elements = $(
    "p, h1, h2, h3, h4, h5, h6, blockquote, ul, ol, img"
  );

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const tag = (el.tagName || "").toLowerCase();

    // Skip block elements that are nested inside another block
    // (e.g. <p> inside <blockquote>) — the parent handles them
    const $parent = $(el).parent();
    const parentTag = ($parent.get(0)?.tagName || "").toLowerCase();
    if (BLOCK_TAGS.has(parentTag) && parentTag !== "ul" && parentTag !== "ol") {
      continue;
    }

    if (["p", "h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
      const { children, markDefs } = parseInlineContent($(el), $);
      const text = children.map(c => c.text).join("");
      if (!text.trim()) continue;

      const block = {
        _type: "block",
        style: tag === "p" ? "normal" : tag,
        children
      };
      if (markDefs.length) block.markDefs = markDefs;
      blocks.push(block);
    }

    if (tag === "blockquote") {
      // Collect all text/inline content from the blockquote (including nested <p>)
      const { children, markDefs } = parseInlineContent($(el), $);
      const text = children.map(c => c.text).join("");
      if (!text.trim()) continue;

      const block = {
        _type: "block",
        style: "blockquote",
        children
      };
      if (markDefs.length) block.markDefs = markDefs;
      blocks.push(block);
    }

    if (tag === "ul" || tag === "ol") {
      const listType = tag === "ul" ? "bullet" : "number";

      $(el).find("li").each((_, li) => {
        const { children, markDefs } = parseInlineContent($(li), $);
        const text = children.map(c => c.text).join("");
        if (!text.trim()) return;

        const block = {
          _type: "block",
          style: "normal",
          listItem: listType,
          level: 1,
          children
        };
        if (markDefs.length) block.markDefs = markDefs;
        blocks.push(block);
      });
    }

    if (tag === "img") {
      const src = cleanWixImage($(el).attr("src"));
      if (!src) continue;

      // Skip if this is the same as the main image
      if (mainImageUrl && src === mainImageUrl) continue;

      const imageAsset = await uploadImage(src);
      if (imageAsset) blocks.push(imageAsset);
    }
  }

  return blocks;
}

/* ---------------------------
GET BLOG LINKS
--------------------------- */

async function getPostLinks() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const posts = [];
  const seen = new Set();

  let pageNumber = 1;

  while (true) {
    const url =
      pageNumber === 1
        ? `${BASE}/blog`
        : `${BASE}/blog/page/${pageNumber}`;

    console.log("Checking:", url);

    try {
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 15000
      });
    } catch {
      break;
    }

    const results = await page.evaluate(() => {
      const posts = [];

      document.querySelectorAll("a").forEach(link => {
        if (!link.href.includes("/post/")) return;

        let image = null;

        const imgTag = link.querySelector("img");

        if (imgTag) {
          image = imgTag.src;
        }

        if (!image) {
          const div = link.querySelector(
            "[style*='background-image']"
          );

          if (div) {
            const style = div.style.backgroundImage;

            const match = style.match(
              /url\(["']?(.*?)["']?\)/
            );

            if (match) image = match[1];
          }
        }

        posts.push({
          url: link.href,
          image
        });
      });

      return posts;
    });

    if (results.length === 0) break;

    results.forEach(p => {
      if (!seen.has(p.url)) {
        seen.add(p.url);
        posts.push(p);
      }
    });

    pageNumber++;
  }

  await browser.close();

  return posts;
}

/* ---------------------------
SCRAPE POST
--------------------------- */

async function scrapePost(url, cardImage) {
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);

  const title = $("h1").first().text().trim();

  const slug = slugify(title, {
    lower: true,
    strict: true
  });

  const date = parseDateFromPage($);

  const articleHTML =
    $("article").html() ||
    $(".post-content").html() ||
    "";

  let mainImage = null;

  let cleanImage = cleanWixImage(cardImage);

  if (cleanImage) {
    mainImage = await uploadImage(cleanImage);
  }

  if (!mainImage) {
    const firstBodyImage = $("article img")
      .first()
      .attr("src");

    const fallback = cleanWixImage(firstBodyImage);

    if (fallback) {
      mainImage = await uploadImage(fallback);
    }
  }

  const blocks = await htmlToBlocks(articleHTML, cleanImage);

  const doc = {
    _id: `post-${slug}`,
    _type: "post",
    title,
    slug: {
      _type: "slug",
      current: slug
    },
    publishedAt: date,
    body: blocks
  };

  if (mainImage) {
    doc.mainImage = mainImage;
  }

  return doc;
}

/* ---------------------------
MAIN MIGRATION
--------------------------- */

async function run() {
  console.log("Finding blog posts...");

  const links = await getPostLinks();

  console.log(`Found ${links.length} posts`);

  const docs = [];

  for (const postInfo of links) {
    console.log("Migrating:", postInfo.url);

    const post = await scrapePost(
      postInfo.url,
      postInfo.image
    );

    docs.push(post);
  }

  const file = docs
    .map(d => JSON.stringify(d))
    .join("\n");

  await fs.writeFile(
    "./sanity-import.ndjson",
    file
  );

  console.log(
    "Migration export complete → sanity-import.ndjson"
  );
}

run();
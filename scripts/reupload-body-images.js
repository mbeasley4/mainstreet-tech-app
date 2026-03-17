/**
 * reupload-body-images.js
 *
 * For every post body that contains image blocks, re-downloads the original
 * Wix image (no 1600x900 crop transform) and re-uploads it to Sanity.
 * The body block is replaced with a clean { _type, _key, asset } object —
 * no metadata fields, no tags.
 *
 * Usage:
 *   node scripts/reupload-body-images.js
 */

import axios from "axios";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vjs2hu9p",
  dataset: "production",
  token: "skvkrwyqZWMZf5jNEe8nzw3n1x3RbBh35wuf6SgWDRFNSrjuKhaCuZeA182IdFqTKwX66Fzs88DKEJ2oHiORDsPbRhAbBnU6LGqGI0oe5Nnpkvgpj1B3OwWWVyYcZt7y4RMwuG7BfO2Md6fCSSV5DoO7uxvoz2C8JgPvZjyuH6EtlTd56mLz",
  apiVersion: "2024-01-01",
  useCdn: false,
});

/** Build the clean Wix original URL from the stored filename. */
function originalWixUrl(filename) {
  return `https://static.wixstatic.com/media/${filename}`;
}

/** Download an image and upload it to Sanity. Returns a clean image block. */
async function reuploadImage(filename, key) {
  const url = originalWixUrl(filename);
  console.log(`  ↑ Downloading: ${url}`);

  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 30_000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        Referer: "https://www.mainstreettech.us/",
      },
    });

    const contentType = response.headers["content-type"] || "image/jpeg";
    if (!contentType.startsWith("image/")) {
      console.warn(`  ✗ Not an image (${contentType}): ${url}`);
      return null;
    }

    const asset = await client.assets.upload(
      "image",
      Buffer.from(response.data),
      { filename, contentType }
    );

    return {
      _type: "image",
      _key: key,
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.warn(`  ✗ Failed: ${err.message}`);
    return null;
  }
}

async function run() {
  // 1. Fetch all posts that have image blocks in the body.
  const posts = await client.fetch(
    `*[_type == "post" && defined(body)]{
      _id, title,
      body[]{
        ...,
        asset->{ _id, originalFilename }
      }
    }`
  );

  console.log(`Found ${posts.length} posts.\n`);

  let patchedPosts = 0;
  let reuploadedImages = 0;

  for (const post of posts) {
    const body = post.body ?? [];
    const imageBlocks = body.filter(
      (b) => b._type === "image" && b.asset?.originalFilename
    );

    if (imageBlocks.length === 0) continue;

    console.log(`Processing: "${post.title}" (${imageBlocks.length} body image(s))`);

    // Build a map of _key → new clean block for images we can re-upload.
    const replacements = new Map();

    for (const block of imageBlocks) {
      const filename = block.asset.originalFilename;

      // Skip if there's no Wix filename to work from.
      if (!filename || !filename.match(/\.(jpe?g|png|gif|webp|svg)$/i)) {
        console.warn(`  ✗ Skipping block with unexpected filename: ${filename}`);
        continue;
      }

      const newBlock = await reuploadImage(filename, block._key);
      if (newBlock) {
        replacements.set(block._key, newBlock);
        reuploadedImages++;
      }
    }

    if (replacements.size === 0) continue;

    // Replace matched blocks; leave all other blocks untouched.
    const newBody = body.map((block) => {
      if (block._type === "image" && replacements.has(block._key)) {
        return replacements.get(block._key);
      }
      // Strip the expanded asset join before saving back.
      if (block.asset?._id) {
        const { asset, ...rest } = block;
        return { ...rest, asset: { _type: "reference", _ref: asset._id } };
      }
      return block;
    });

    await client.patch(post._id).set({ body: newBody }).commit();
    console.log(`  ✓ Patched "${post.title}" (${replacements.size} image(s) updated)\n`);
    patchedPosts++;
  }

  console.log("─────────────────────────────────────────");
  console.log(`Done. Posts patched: ${patchedPosts} | Images re-uploaded: ${reuploadedImages}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

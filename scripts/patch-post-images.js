/**
 * patch-post-images.js
 *
 * Downloads the Wix CDN image for each blog post (defined in CARD_DATA below),
 * uploads it to Sanity, and patches the matching post document with `mainImage`
 * and `tags`.
 *
 * Usage:
 *   pnpm patch-images   (or: node scripts/patch-post-images.js)
 */

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

/* ── Step 1: static card data extracted from Wix blog HTML ─ */

const WIX_BASE = "https://static.wixstatic.com/media/";

/**
 * Extracted from the Wix blog gallery HTML.
 * title is matched (case-insensitively) against the Sanity post title field.
 * imageUrl is the raw Wix CDN media path (no transform params).
 */
const CARD_DATA = [
  {
    title: "5 Common Pitfalls in Cloud Data Migrations And How to Avoid Them",
    imageUrl: `${WIX_BASE}d15ec0_9cf4ac7e49c84da3b18fd41a7749a864~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "JDE CNC Services That Power Business Growth",
    imageUrl: `${WIX_BASE}d15ec0_1f772e6ff84d4b7a8d2ea7f96cc168ab~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Demystifying Data Lakes vs. Data Warehouses in the Cloud",
    imageUrl: `${WIX_BASE}d15ec0_459bd311d4664727bb60bae7b1b07ef3~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "The DBA's Role in a Cloud World",
    imageUrl: `${WIX_BASE}d15ec0_f141112a20de4ff1a92f4a579e3fd376~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "AI + JDE: How Smart Integrations Are Changing the Game",
    imageUrl: `${WIX_BASE}d15ec0_dc91c7bbfa0644019525d5f704c1d4c5~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Employee Spotlight: Matt Andersen",
    imageUrl: `${WIX_BASE}d15ec0_441679b1f65b4648a3c178ac42d79645~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "Relational Databases Are Still at the Heart of Modern Data Architectures",
    imageUrl: `${WIX_BASE}d15ec0_cc4b7723aac54907a71e03f16649c57f~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Employee Spotlight: Darrell Landrum",
    imageUrl: `${WIX_BASE}d15ec0_67d7cebf3f9d499298af06307a2897e5~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "Why AI Can't Replace Your DBA: The Real Risks of Going Fully Autonomous",
    imageUrl: `${WIX_BASE}d15ec0_54cb85ffe15d42d69915d3484e04d9e3~mv2.jpg`,
    tags: ["Database Management"],
  },
  // idx 9–81 extracted from Wix gallery HTML via data-idx attribute
  {
    title: "Employee Spotlight: Moe Oro",
    imageUrl: `${WIX_BASE}d15ec0_9ed19c88c28f4c09ada854102466b759~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "What Are Agentic DBAs, and Do They Matter?",
    imageUrl: `${WIX_BASE}d15ec0_62fff60cdbd44af8ad32e529ab8260cd~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Employee Spotlight: Mike Pugh",
    imageUrl: `${WIX_BASE}d15ec0_fdb80782680d4aa88e33fa7da7f9acb0~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "What is IT Consulting?",
    imageUrl: `${WIX_BASE}d15ec0_62d462ec3f8a49b6a1c29e257fa89066~mv2.jpg`,
    tags: ["IT Consulting"],
  },
  {
    title: "How AI for JDE is Reshaping Enterprise Operations",
    imageUrl: `${WIX_BASE}d15ec0_0bda2e5df8a64951819295683457b372~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "What We Learned from Cincy AI Week",
    imageUrl: `${WIX_BASE}d15ec0_fd5df15c229b4496b1ac5a53007f439f~mv2.jpg`,
    tags: ["Artificial Intelligence"],
  },
  {
    title: "Turning Data Chaos into Clarity with Strategic Analytics",
    imageUrl: `${WIX_BASE}d15ec0_4082fe29d4d441078f362b583b045e5f~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "Modernizing Enterprise Applications Without Disruption",
    imageUrl: `${WIX_BASE}d15ec0_d52f56f8b2ed4648b8adaea0c1732b1c~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Database Management Services: The Key to Stability, Security, and Scalability",
    imageUrl: `${WIX_BASE}d15ec0_5ccd8bce029e447b9e3a1868997b03af~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Letter to IT Executives: A Smarter Approach to AI",
    imageUrl: `${WIX_BASE}d15ec0_c9790464a7ce44d29cf9ce738c3872f1~mv2.jpg`,
    tags: ["Artificial Intelligence"],
  },
  {
    title: "Employee Spotlight: Paul Mazur",
    imageUrl: `${WIX_BASE}d15ec0_3d93271aa567468b8941fb42e46c68b3~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "AI Enablement: The Strategic IT Advisory Every Business Needs Now",
    imageUrl: `${WIX_BASE}d15ec0_c56793c1d9924c24b198da3a340030ea~mv2.jpg`,
    tags: ["Artificial Intelligence"],
  },
  {
    title: "Employee Spotlight: Rick Monnin",
    imageUrl: `${WIX_BASE}d15ec0_541af620f72049ec8dbbffdb0461db37~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "3 Ways to Modernize Your Data Architecture",
    imageUrl: `${WIX_BASE}d15ec0_a367bcc4442b4d64bb9f81cb52592811~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "From Dashboards to Decisions: Evolving Your Analytics Strategy with Power BI Consulting",
    imageUrl: `${WIX_BASE}d15ec0_04f27a8b0cda4005a0b214c5f804147c~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "Employee Spotlight: Shannon Kuchinski",
    imageUrl: `${WIX_BASE}d15ec0_b4b5c1cdca094719970efa1e62caf779~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "How to Build a Data Ecosystem for AI Readiness",
    imageUrl: `${WIX_BASE}d15ec0_b7847c926e2f45ada5f1afc5e4d3f86e~mv2.jpg`,
    tags: ["Artificial Intelligence"],
  },
  {
    title: "Employee Spotlight: Peter Schott",
    imageUrl: `${WIX_BASE}d15ec0_718a76d6ce474187acf9a451e628a373~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "3 Reasons to Expand Your Team with IT Staff Augmentation",
    imageUrl: `${WIX_BASE}d15ec0_387936a735274cefbcf923f46aa7e293~mv2.jpg`,
    tags: ["Staff Augmentation"],
  },
  {
    title: "Employee Spotlight: Virginia Girard",
    imageUrl: `${WIX_BASE}d15ec0_05c447adeac34e8399dc4d65b0eefbc6~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "Launch, Run, and Optimize: AI Enablement Services",
    imageUrl: `${WIX_BASE}d15ec0_faf11ac8cd9b4cbca21bbfe491fca385~mv2.jpg`,
    tags: ["Artificial Intelligence"],
  },
  {
    title: "Employee Spotlight: Raul Blanco",
    imageUrl: `${WIX_BASE}d15ec0_c5ee4276f24b486da214e7fa54a3b43d~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "Maximizing Your ERP Investment: The Importance of PeopleSoft Archiving Support",
    imageUrl: `${WIX_BASE}d15ec0_f39c6c27d7a44f07a6d6f9938af49bc3~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Employee Spotlight: Adam Casillas",
    imageUrl: `${WIX_BASE}d15ec0_db9c8ccd78d54df28cdf41d45dfe2e57~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "5 Ways to Reduce Your Cloud Hosting Costs",
    imageUrl: `${WIX_BASE}d15ec0_5ad228231ed84305b223251757b6cce5~mv2.png`,
    tags: ["Hosting Services"],
  },
  {
    title: "Employee Spotlight: Jim Steiner",
    imageUrl: `${WIX_BASE}d15ec0_c993b5d7ab22467698754b04d09c346f~mv2.jpg`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "On Demand: SQL Data Compression Webinar",
    imageUrl: `${WIX_BASE}d15ec0_8c67f34a32b44b2f9b1485f4a6ffde91~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Employee Spotlight: Jim Klosterman",
    imageUrl: `${WIX_BASE}d15ec0_0906567bca5c442d94db85408bd67e90~mv2.png`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "7 Benefits of Low-Code App Development Platforms",
    imageUrl: `${WIX_BASE}d15ec0_e08cf9c36bb7496caba6b4a9bab01b97~mv2.png`,
    tags: ["Application Services"],
  },
  {
    title: "Employee Spotlight: Beth Young",
    imageUrl: `${WIX_BASE}d15ec0_b3c47db1a10d4920aad8e44403159a59~mv2.png`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "Why You Need a Fractional DBA",
    imageUrl: `${WIX_BASE}d15ec0_7fac05b43d654237a7df4670fb1a68b3~mv2.png`,
    tags: ["Database Management"],
  },
  {
    title: "Employee Spotlight: Corey Hambrick",
    imageUrl: `${WIX_BASE}d15ec0_617850d6e54b4bf3a2cdc9b89d81f39c~mv2.png`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "Why Businesses Should Embrace AI Agents",
    imageUrl: `${WIX_BASE}d15ec0_cd45890156094ac69db8d16f579c48ac~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "Employee Spotlight: Tim Walker",
    imageUrl: `${WIX_BASE}d15ec0_24493f2070c648f8bdb12a5527d512ae~mv2.png`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "Understanding JDE Application Security: A Complete Guide",
    imageUrl: `${WIX_BASE}d15ec0_e16bb7ea79274269b483ba7d050f0dee~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "MariaDB vs. MySQL: Which Database is Right for Your Business?",
    imageUrl: `${WIX_BASE}d15ec0_c87d5593091b4c318484c1843236f208~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Employee Spotlight: Jessica Tigner",
    imageUrl: `${WIX_BASE}d15ec0_fa3f1d30643240ae979cbabe009b061f~mv2.png`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "AI Business Transformation: The New Era of Innovation",
    imageUrl: `${WIX_BASE}d15ec0_1f4051e503e64d1cbdf34674d74e60d0~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "Employee Spotlight: Ashlie Stapleton",
    imageUrl: `${WIX_BASE}d15ec0_bab9f60303d244eb87063cdb091f47af~mv2.png`,
    tags: ["Employee Spotlight"],
  },
  {
    title: "Valuable Business Insights with Power BI Consulting",
    imageUrl: `${WIX_BASE}d15ec0_d0564665c49348408aff7a0041f6ee69~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "Revolutionizing Manufacturing and Distribution with AI",
    imageUrl: `${WIX_BASE}d15ec0_3ca824f5d05b4a43b5a4d828f999eb0f~mv2.jpg`,
    tags: ["IT Consulting"],
  },
  {
    title: "PeopleSoft Archiving: Maximizing Efficiency and Compliance",
    imageUrl: `${WIX_BASE}d15ec0_aad8d622216c4cf8a799f80c7b619b45~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "PeopleSoft Application Support Services",
    imageUrl: `${WIX_BASE}d15ec0_a6bb8682089543909301377643b6a9be~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Case Study: SQL Migration from Azure to Google Cloud Platform (GCP)",
    imageUrl: `${WIX_BASE}d15ec0_801c4320a10e40f7ba6c2917e2e28c90~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Connecting the Dots: Data Integration Services",
    imageUrl: `${WIX_BASE}d15ec0_667b08b5d23b419a92ebcdee761f25cb~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "Main Street is Celebrating 25 Years of Excellence",
    imageUrl: `${WIX_BASE}d15ec0_13ef66aedc5842dabf6221d3a4e2f87c~mv2.png`,
    tags: [],
  },
  {
    title: "Building a Scalable Data Governance Framework",
    imageUrl: `${WIX_BASE}d15ec0_7f7b4cc7bf264f5297677ccbdfa70f88~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "The Power of Boomi Integration for Data Activation",
    imageUrl: `${WIX_BASE}d15ec0_c931baabe3c74075833624931afbe7fe~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "Why Cost-Effective Hosting Matters",
    imageUrl: `${WIX_BASE}d15ec0_d4b0b6e10ea14a83bf809beee3415bb8~mv2.jpg`,
    tags: ["Hosting Services"],
  },
  {
    title: "The Advantages of IT Staff Augmentation",
    imageUrl: `${WIX_BASE}d15ec0_18c443514ff2434880629892a351e558~mv2.jpg`,
    tags: ["IT Consulting"],
  },
  {
    title: "Main Street Beats Azure and AWS for Cost-Effective Hosting",
    imageUrl: `${WIX_BASE}d15ec0_b172350be19645659449e4cb862cdb76~mv2.jpg`,
    tags: ["Hosting Services"],
  },
  {
    title: "Overcome Data Integrity Issues with IT Advisory Services",
    imageUrl: `${WIX_BASE}d15ec0_fa40c398bee341679c232d26891ca9a4~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "How Our DBA Team Delivered Under Pressure",
    imageUrl: `${WIX_BASE}d15ec0_ef1a30a9e22841f19d8c49746d80c255~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Seamless ERP Integration",
    imageUrl: `${WIX_BASE}d15ec0_f6043c2fe26b4e599992790c3525a16d~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Boomi Integration: Connecting Your Business for Growth",
    imageUrl: `${WIX_BASE}d15ec0_6f4c68663e21420291e730265b60145d~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Case Study: Successful Aurora RDS Upgrade with Main Street DBAS",
    imageUrl: `${WIX_BASE}d15ec0_42ea295bd4bf45e494581b01b7420793~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Simplify and Scale with JD Edwards ERP",
    imageUrl: `${WIX_BASE}d15ec0_a3875caf9e314fd19256050765e8ba59~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "How Strategic IT Advisory Drives Business Growth",
    imageUrl: `${WIX_BASE}d15ec0_11b6788633144190a9419583a53ef6e2~mv2.jpg`,
    tags: ["IT Consulting"],
  },
  {
    title: "IT Cost Consolidation Without Compromising Performance",
    imageUrl: `${WIX_BASE}d15ec0_e4d311d3902a49579ba7729875d72526~mv2.jpg`,
    tags: ["IT Consulting"],
  },
  {
    title: "Why Scalability Matters in IT Infrastructure",
    imageUrl: `${WIX_BASE}d15ec0_6bcd03ea97264b529cffd3f79de8a339~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Cloud Data Warehousing: The New Way to Store All Your Digital Hoarding",
    imageUrl: `${WIX_BASE}d15ec0_79cbb034c75943c8a58374672b5dae8d~mv2.jpg`,
    tags: ["Cloud Services"],
  },
  {
    title: "The Benefits of a Hybrid Cloud Environment",
    imageUrl: `${WIX_BASE}d15ec0_e3dfb713b69b409fb870db7b40d08785~mv2.jpg`,
    tags: ["Cloud Services"],
  },
  {
    title: "AI In Your Workplace: Are You Ready?",
    imageUrl: `${WIX_BASE}d15ec0_2220dbad1027478dab8c1424df00324b~mv2.jpg`,
    tags: ["Artificial Intelligence"],
  },
  {
    title: "Prevent Costly Database Downtime with Main Street",
    imageUrl: `${WIX_BASE}d15ec0_265a3c74ecbf4b2f85ce1d6b6c0db0fb~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Strategies for Effective Business Data Integration to Drive Success",
    imageUrl: `${WIX_BASE}d15ec0_6b5953a5b4b1497aada547aefcc6753b~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "How Main Street Solves Database Scalability Challenges",
    imageUrl: `${WIX_BASE}d15ec0_dca66f6d047043e8a08d33c32dc3898a~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Features within JD Edwards Server Manager",
    imageUrl: `${WIX_BASE}d15ec0_274a7f00ed0549f2ab5b62ec72d258aa~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Tips for Database Backup and Recovery",
    imageUrl: `${WIX_BASE}d15ec0_d5d1835aadb74ca497778b4b2f5b150f~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Protecting Your Business from Data Security Threats",
    imageUrl: `${WIX_BASE}d15ec0_c612ce40675240e99bf58d0d823dad2b~mv2.jpg`,
    tags: ["Data & Analytics"],
  },
  {
    title: "Boost Database Performance and Optimize Your Operations with Main Street",
    imageUrl: `${WIX_BASE}d15ec0_2ac996c1e2274505be5ef3154c9a50dc~mv2.jpg`,
    tags: ["Database Management"],
  },
  {
    title: "Sync Slicers in Power BI",
    imageUrl: `${WIX_BASE}d15ec0_9bbc2e0e46a84767a8ba7b61eeb22c5a~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "Virtual Batch Queues in JD Edwards 9.2.5",
    imageUrl: `${WIX_BASE}d15ec0_1d9c8d81d9ed4f89876bdda0afc66d6c~mv2.jpg`,
    tags: ["Application Services"],
  },
  {
    title: "A Half-Dozen of Our Favorite Power BI Features",
    imageUrl: `${WIX_BASE}d15ec0_669cb92761684f9fbcd163da2a64267b~mv2.jpg`,
    tags: ["Application Services"],
  },
];

function scrapeCardData() {
  console.log(`Using ${CARD_DATA.length} hardcoded posts from Wix gallery HTML.\n`);
  return Promise.resolve(CARD_DATA);
}

/* ── Step 2: query existing Sanity posts ────────────────── */

async function fetchSanityPosts() {
  const posts = await client.fetch(
    `*[_type == "post"]{ _id, title, mainImage, tags }`
  );
  const map = new Map();
  for (const p of posts) {
    if (p.title) map.set(p.title.toLowerCase().trim(), p);
  }
  return map;
}

/* ── Step 3: patch each post ────────────────────────────── */

async function run() {
  const [cards, sanityMap] = await Promise.all([scrapeCardData(), fetchSanityPosts()]);

  let patched = 0;
  let skipped = 0;
  let notFound = 0;

  for (const { title, imageUrl, tags } of cards) {
    const sanityPost = sanityMap.get(title.toLowerCase().trim());

    if (!sanityPost) {
      console.log(`⚠  No Sanity post for title "${title}"`);
      notFound++;
      continue;
    }

    const alreadyHasImage = Boolean(sanityPost.mainImage?.asset?._ref);
    const alreadyHasTags = Array.isArray(sanityPost.tags) && sanityPost.tags.length > 0;

    if (alreadyHasImage && alreadyHasTags) {
      console.log(`— Already complete, skipping: ${title}`);
      skipped++;
      continue;
    }

    console.log(`Patching: ${title}  [tags: ${tags.join(", ") || "none"}]`);

    const patch = client.patch(sanityPost._id);

    /* Upload image only if missing */
    if (!alreadyHasImage && imageUrl) {
      const imageAsset = await uploadImageToSanity(imageUrl);
      if (imageAsset) {
        patch.set({ mainImage: imageAsset });
      } else {
        console.warn(`  ✗ Image upload failed for "${title}"`);
      }
    }

    /* Set tags only if missing */
    if (!alreadyHasTags && tags.length > 0) {
      patch.set({ tags });
    }

    await patch.commit();
    console.log(`  ✓ Patched "${title}"\n`);
    patched++;
  }

  console.log("─────────────────────────────────────────");
  console.log(`Done.  Patched: ${patched} | Already complete: ${skipped} | No match in Sanity: ${notFound}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

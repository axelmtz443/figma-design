/**
 * Updates the `image` field of every post to use the first image
 * found in its content (the Sanity CDN URL), replacing gradients.
 *
 * Usage:
 *   SANITY_TOKEN=<editor_token> node scripts/update-hero-images.mjs
 */

import { createClient } from '@sanity/client';

const token = process.env.SANITY_TOKEN;
if (!token) { console.error('❌  Set SANITY_TOKEN'); process.exit(1); }

const client = createClient({
  projectId: 'k3wb9a79',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

async function main() {
  console.log('🔍  Fetching posts with first content image...');

  // GROQ resolves asset->url in one shot
  const posts = await client.fetch(`
    *[_type == "post"] {
      _id,
      "slug": slug.current,
      image,
      "firstImageUrl": content[_type == "image"][0].asset->url
    }
  `);

  console.log(`✅  Found ${posts.length} posts.\n`);

  let updated = 0, skipped = 0;

  for (const post of posts) {
    if (!post.firstImageUrl) {
      skipped++;
      continue;
    }

    // Already set to this image — skip
    if (post.image === post.firstImageUrl) {
      skipped++;
      continue;
    }

    try {
      await client.patch(post._id).set({ image: post.firstImageUrl }).commit();
      updated++;
      console.log(`  ♻️  ${post.slug?.slice(0, 55)}`);
    } catch (err) {
      console.error(`  ❌  ${post.slug}: ${err.message}`);
    }

    // Gentle rate limiting
    if (updated % 10 === 0) await new Promise(r => setTimeout(r, 300));
  }

  console.log(`\n🎉  Done!`);
  console.log(`   Updated : ${updated}`);
  console.log(`   Skipped : ${skipped} (no image in content or already set)`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });

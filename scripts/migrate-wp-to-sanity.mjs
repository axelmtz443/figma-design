/**
 * WordPress XML → Sanity migration script (full content: images + links)
 *
 * Usage:
 *   SANITY_TOKEN=<your_token> node scripts/migrate-wp-to-sanity.mjs
 */

import { createClient } from '@sanity/client';
import { parseString } from 'xml2js';
import { readFileSync } from 'fs';
import { promisify } from 'util';
import { createHash } from 'crypto';
import { load as cheerioLoad } from 'cheerio';

const parseXml = promisify(parseString);

// ── Sanity client ─────────────────────────────────────────────────────────────

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error('❌  Set SANITY_TOKEN env var before running this script.');
  process.exit(1);
}

const client = createClient({
  projectId: 'k3wb9a79',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// ── Helpers ───────────────────────────────────────────────────────────────────

let _counter = 0;
function uid() {
  return createHash('md5').update(String(Date.now()) + String(_counter++)).digest('hex').slice(0, 12);
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 96);
}

function mapCategory(wpCategories) {
  if (!wpCategories || wpCategories.length === 0) return 'Marketing';
  const cats = wpCategories.join(' ').toLowerCase();
  if (cats.includes('google') || cats.includes('seo') || cats.includes('search')) return 'Tools';
  if (cats.includes('web3') || cats.includes('blockchain')) return 'Web3';
  if (cats.includes('invest') || cats.includes('finance') || cats.includes('defi')) return 'DeFi';
  if (cats.includes('seguri') || cats.includes('security')) return 'Security';
  if (cats.includes('ux') || cats.includes('diseño') || cats.includes('design')) return 'UX';
  return 'Marketing';
}

// ── Image upload with caching ─────────────────────────────────────────────────

const imageCache = new Map();

async function uploadImage(url) {
  if (!url) return null;
  if (imageCache.has(url)) return imageCache.get(url);

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 WeProm-Migration/1.0' },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = Buffer.from(await res.arrayBuffer());

    const asset = await client.assets.upload('image', buffer, {
      contentType,
      filename: url.split('/').pop()?.split('?')[0] || 'image.jpg',
    });

    const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
    imageCache.set(url, ref);
    return ref;
  } catch (err) {
    console.warn(`    ⚠️  Image skipped (${url.slice(0, 60)}): ${err.message}`);
    imageCache.set(url, null);
    return null;
  }
}

// ── HTML → Portable Text ──────────────────────────────────────────────────────

async function htmlToPortableText(html) {
  if (!html) return [];

  // Strip WP block comments and shortcodes
  const clean = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/\[[\w\/][^\]]*\]/g, '');

  const $ = cheerioLoad(`<body>${clean}</body>`, { decodeEntities: true });
  const body = $('body');
  const blocks = [];

  for (const el of body.children().toArray()) {
    const node = $(el);
    const tag = el.tagName?.toLowerCase();

    // Headings
    if (/^h[1-6]$/.test(tag)) {
      const text = node.text().trim();
      if (text) {
        blocks.push({
          _type: 'block',
          _key: uid(),
          style: tag === 'h1' || tag === 'h2' ? 'h2' : 'h3',
          children: [{ _type: 'span', _key: uid(), text, marks: [] }],
          markDefs: [],
        });
      }
      continue;
    }

    // Images / figures
    if (tag === 'figure' || tag === 'img') {
      const imgEl = tag === 'img' ? node : node.find('img').first();
      const src = imgEl.attr('src');
      const alt = imgEl.attr('alt') || '';
      if (src && src.startsWith('http')) {
        const imageRef = await uploadImage(src);
        if (imageRef) {
          blocks.push({ ...imageRef, _key: uid(), alt });
        }
      }
      continue;
    }

    // Lists
    if (tag === 'ul' || tag === 'ol') {
      for (const li of node.find('li').toArray()) {
        const { children, markDefs } = parseInline($(li), $);
        if (children.length) {
          blocks.push({
            _type: 'block',
            _key: uid(),
            style: 'normal',
            listItem: 'bullet',
            level: 1,
            children,
            markDefs,
          });
        }
      }
      continue;
    }

    // Blockquote
    if (tag === 'blockquote') {
      const text = node.text().trim();
      if (text) {
        blocks.push({
          _type: 'block',
          _key: uid(),
          style: 'normal',
          children: [{ _type: 'span', _key: uid(), text: `"${text}"`, marks: ['em'] }],
          markDefs: [],
        });
      }
      continue;
    }

    // Paragraphs and divs
    if (tag === 'p' || tag === 'div') {
      // Check for images inside
      const imgs = node.find('img');
      for (const imgEl of imgs.toArray()) {
        const src = $(imgEl).attr('src');
        const alt = $(imgEl).attr('alt') || '';
        if (src && src.startsWith('http')) {
          const imageRef = await uploadImage(src);
          if (imageRef) {
            blocks.push({ ...imageRef, _key: uid(), alt });
          }
        }
      }
      imgs.remove(); // remove imgs so text extraction is clean

      const { children, markDefs } = parseInline(node, $);
      if (children.some(c => c.text?.trim())) {
        blocks.push({
          _type: 'block',
          _key: uid(),
          style: 'normal',
          children,
          markDefs,
        });
      }
      continue;
    }

    // Any other element — extract text
    const text = node.text().trim();
    if (text) {
      blocks.push({
        _type: 'block',
        _key: uid(),
        style: 'normal',
        children: [{ _type: 'span', _key: uid(), text, marks: [] }],
        markDefs: [],
      });
    }
  }

  return blocks.filter(b => b._type === 'image' || b.children?.some(c => c.text?.trim()));
}

// Parse inline marks (bold, italic, links) from a cheerio element
function parseInline(node, $) {
  const markDefs = [];
  const children = [];

  function walk(el, activeMarks) {
    if (el.type === 'text') {
      const text = el.data?.replace(/\s+/g, ' ') || '';
      if (text) {
        children.push({ _type: 'span', _key: uid(), text, marks: [...activeMarks] });
      }
      return;
    }

    const tag = el.tagName?.toLowerCase();
    if (!tag) return;

    const newMarks = [...activeMarks];

    if (tag === 'strong' || tag === 'b') newMarks.push('strong');
    if (tag === 'em' || tag === 'i') newMarks.push('em');

    if (tag === 'a') {
      const href = $(el).attr('href');
      if (href) {
        const linkKey = uid();
        markDefs.push({ _key: linkKey, _type: 'link', href });
        newMarks.push(linkKey);
      }
    }

    // Skip img tags inside inline context
    if (tag === 'img') return;

    for (const child of el.childNodes || []) {
      walk(child, newMarks);
    }
  }

  for (const child of node[0]?.childNodes || []) {
    walk(child, []);
  }

  if (children.length === 0) {
    const text = node.text().trim();
    if (text) children.push({ _type: 'span', _key: uid(), text, marks: [] });
  }

  return { children, markDefs };
}

// ── Category palette ──────────────────────────────────────────────────────────

const GRADIENTS = [
  'linear-gradient(135deg,#1a0533 0%,#6b21a8 100%)',
  'linear-gradient(135deg,#0f172a 0%,#1e40af 100%)',
  'linear-gradient(135deg,#1c1917 0%,#c2410c 100%)',
  'linear-gradient(135deg,#052e16 0%,#166534 100%)',
  'linear-gradient(135deg,#0c0a09 0%,#78350f 100%)',
  'linear-gradient(135deg,#1e1b4b 0%,#4338ca 100%)',
  'linear-gradient(135deg,#450a0a 0%,#dc2626 100%)',
  'linear-gradient(135deg,#042f2e 0%,#0d9488 100%)',
];

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('📂  Reading weprom_blogs.xml…');
  const xml = readFileSync('./weprom_blogs.xml', 'utf-8');

  console.log('🔍  Parsing XML…');
  const result = await parseXml(xml, { explicitArray: true, trim: true });
  const items = result.rss.channel[0].item || [];

  const posts = items.filter(item => {
    return item['wp:post_type']?.[0] === 'post' && item['wp:status']?.[0] === 'publish';
  });

  console.log(`✅  Found ${posts.length} published posts.\n`);

  const existing = await client.fetch(`*[_type == "post"]{ _id, "slug": slug.current }`);
  const existingSlugs = new Set(existing.map(e => e.slug));
  console.log(`ℹ️   ${existingSlugs.size} posts already in Sanity (will update with full content).\n`);

  // Build slug→id map for existing posts so we can patch them
  const existingBySlug = new Map(existing.map(e => [e.slug, e._id]));

  let created = 0, updated = 0, skipped = 0, errors = 0;

  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];

    const rawTitle = item.title?.[0];
    const title = (typeof rawTitle === 'object' ? rawTitle._ : rawTitle)?.trim();
    if (!title || title.length < 3) { skipped++; continue; }

    const slug = slugify(title);
    if (!slug) { skipped++; continue; }

    const isUpdate = existingBySlug.has(slug);

    const pubDate = item.pubDate?.[0] || new Date().toISOString();
    const rawContent = item['content:encoded']?.[0];
    const htmlContent = typeof rawContent === 'object' ? rawContent._ : rawContent || '';

    const wpCats = item.category?.map(c => (typeof c === 'object' ? c._ : c)) || [];
    const category = mapCategory(wpCats);

    console.log(`  ${isUpdate ? '🔁' : '🔄'} [${i + 1}/${posts.length}] ${title.slice(0, 65)}`);

    let content;
    try {
      content = await htmlToPortableText(htmlContent);
    } catch (err) {
      console.warn(`    ⚠️  Content parse error: ${err.message}`);
      content = [];
    }

    if (content.length === 0) {
      content.push({
        _type: 'block',
        _key: uid(),
        style: 'normal',
        children: [{ _type: 'span', _key: uid(), text: title, marks: [] }],
        markDefs: [],
      });
    }

    // Try to get featured image from wp:postmeta
    let heroImage = GRADIENTS[i % GRADIENTS.length];
    const metas = item['wp:postmeta'] || [];
    for (const meta of metas) {
      const key = meta['wp:meta_key']?.[0];
      const val = meta['wp:meta_value']?.[0];
      if (key === '_thumbnail_id' || (key && key.includes('_image') && val && val.startsWith('http'))) {
        if (val && val.startsWith('http')) { heroImage = val; break; }
      }
    }
    // Also check first image in content
    const firstImg = content.find(b => b._type === 'image');
    if (firstImg && heroImage.startsWith('linear-gradient')) {
      heroImage = firstImg.asset?._ref ? heroImage : heroImage;
    }

    const doc = {
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      date: new Date(pubDate).toISOString(),
      category,
      author: 'WeProm Team',
      readTime: `${Math.max(2, Math.ceil(htmlContent.split(/\s+/).length / 200))} min read`,
      image: heroImage,
      content,
    };

    const existingId = existingBySlug.get(slug);

    try {
      if (existingId) {
        // Patch existing post: set all fields + unset stale WP-only fields
        await client.patch(existingId)
          .set({
            title: doc.title,
            date: doc.date,
            category: doc.category,
            author: doc.author,
            readTime: doc.readTime,
            image: heroImage,
            content,
          })
          .unset(['publishedAt', 'status'])
          .commit();
        updated++;
        console.log(`    ♻️  Updated (${content.length} blocks)`);
      } else {
        await client.create(doc);
        existingBySlug.set(slug, 'new');
        created++;
        console.log(`    ✅ Created (${content.length} blocks)`);
      }
    } catch (err) {
      errors++;
      console.error(`    ❌ Error: ${err.message}`);
    }

    // Rate limiting: pause every 3 posts to avoid Sanity free-tier limits
    if (i % 3 === 2) await new Promise(r => setTimeout(r, 800));
  }

  console.log(`\n🎉  Migration complete!`);
  console.log(`   Created : ${created}`);
  console.log(`   Updated : ${updated}`);
  console.log(`   Skipped : ${skipped}`);
  console.log(`   Errors  : ${errors}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

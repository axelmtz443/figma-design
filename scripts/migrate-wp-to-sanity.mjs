/**
 * WordPress XML → Sanity migration script
 *
 * Usage:
 *   SANITY_TOKEN=<your_token> node scripts/migrate-wp-to-sanity.mjs
 *
 * Reads weprom_blogs.xml, filters published posts, converts HTML content
 * to Sanity Portable Text blocks, and uploads via the Sanity client.
 *
 * Get your token at: https://www.sanity.io/manage → project k3wb9a79 → API → Tokens
 * (create an "Editor" token)
 */

import { createClient } from '@sanity/client';
import { parseString } from 'xml2js';
import { readFileSync } from 'fs';
import { promisify } from 'util';
import { createHash } from 'crypto';

const parseXml = promisify(parseString);

// ── Sanity client ─────────────────────────────────────────────────────────────

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error('❌  Set SANITY_TOKEN env var before running this script.');
  console.error('   Get it at: https://www.sanity.io/manage → project k3wb9a79 → API → Tokens');
  process.exit(1);
}

const client = createClient({
  projectId: 'k3wb9a79',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// ── Category mapping (WP → Sanity) ───────────────────────────────────────────

function mapCategory(wpCategories) {
  if (!wpCategories || wpCategories.length === 0) return 'Marketing';
  const cats = wpCategories.map(c => (typeof c === 'string' ? c : c._).toLowerCase()).join(' ');
  if (cats.includes('branding'))                    return 'Marketing';
  if (cats.includes('google') || cats.includes('seo') || cats.includes('search')) return 'Tools';
  if (cats.includes('redes') || cats.includes('social') || cats.includes('facebook')) return 'Marketing';
  if (cats.includes('invest') || cats.includes('finance'))  return 'DeFi';
  if (cats.includes('web3') || cats.includes('blockchain')) return 'Web3';
  if (cats.includes('seguri'))                      return 'Security';
  if (cats.includes('ux') || cats.includes('diseño') || cats.includes('design')) return 'UX';
  return 'Marketing';
}

// ── Slug generator ────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // remove accents
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 96);
}

// ── HTML → Portable Text (simple, no deps) ───────────────────────────────────

function htmlToPortableText(html) {
  if (!html) return [];

  // Strip WP block comments and scripts/style tags
  const clean = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/\[caption[^\]]*\][\s\S]*?\[\/caption\]/gi, '')
    .replace(/\[[\w\/][^\]]*\]/g, ''); // strip remaining shortcodes

  const blocks = [];

  // Split by block-level elements
  const sections = clean.split(/(?=<h[1-6][\s>])|(?=<p[\s>])|(?=<blockquote[\s>])|(?=<ul[\s>])|(?=<ol[\s>])/i);

  for (const section of sections) {
    const trimmed = section.trim();
    if (!trimmed) continue;

    // Headings
    const headingMatch = trimmed.match(/^<h([1-6])[\s>]([\s\S]*?)<\/h[1-6]>/i);
    if (headingMatch) {
      const level = parseInt(headingMatch[1]);
      const text = stripTags(headingMatch[2]).trim();
      if (text) {
        blocks.push({
          _type: 'block',
          _key: uid(),
          style: level <= 2 ? 'h2' : 'h3',
          children: [{ _type: 'span', _key: uid(), text, marks: [] }],
          markDefs: [],
        });
      }
      continue;
    }

    // Lists
    const listMatch = trimmed.match(/^<(ul|ol)[\s>]([\s\S]*?)<\/(ul|ol)>/i);
    if (listMatch) {
      const items = [...listMatch[2].matchAll(/<li[\s>]([\s\S]*?)<\/li>/gi)];
      for (const item of items) {
        const text = stripTags(item[1]).trim();
        if (text) {
          blocks.push({
            _type: 'block',
            _key: uid(),
            style: 'normal',
            listItem: 'bullet',
            level: 1,
            children: [{ _type: 'span', _key: uid(), text, marks: [] }],
            markDefs: [],
          });
        }
      }
      continue;
    }

    // Blockquote
    const bqMatch = trimmed.match(/^<blockquote[\s>]([\s\S]*?)<\/blockquote>/i);
    if (bqMatch) {
      const text = stripTags(bqMatch[1]).trim();
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

    // Paragraphs and plain text — split by <p> tags
    const paragraphs = trimmed.split(/<p[\s>]|<br\s*\/?>/gi);
    for (const para of paragraphs) {
      const text = stripTags(para).trim();
      if (text && text.length > 1) {
        // Inline marks: bold and italic
        const children = parseInlineMarks(para.replace(/<\/p>/gi, ''));
        if (children.length) {
          blocks.push({
            _type: 'block',
            _key: uid(),
            style: 'normal',
            children,
            markDefs: [],
          });
        }
      }
    }
  }

  return blocks.filter(b => b.children?.some(c => c.text?.trim()));
}

function parseInlineMarks(html) {
  // Very simplified: just strip tags and produce a single span with marks
  const boldMatch = html.includes('<strong') || html.includes('<b>') || html.includes('<b ');
  const emMatch = html.includes('<em') || html.includes('<i>') || html.includes('<i ');
  const text = stripTags(html).trim();
  if (!text) return [];
  const marks = [];
  if (boldMatch) marks.push('strong');
  if (emMatch) marks.push('em');
  return [{ _type: 'span', _key: uid(), text, marks }];
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

let _counter = 0;
function uid() {
  return createHash('md5').update(String(Date.now()) + String(_counter++)).digest('hex').slice(0, 12);
}

// ── Gradient palette for posts without featured image ────────────────────────

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

// ── Main migration ────────────────────────────────────────────────────────────

async function main() {
  console.log('📂  Reading weprom_blogs.xml…');
  const xml = readFileSync('./weprom_blogs.xml', 'utf-8');

  console.log('🔍  Parsing XML…');
  const result = await parseXml(xml, { explicitArray: true, trim: true });
  const items = result.rss.channel[0].item || [];

  // Filter: published posts only
  const posts = items.filter(item => {
    const type = item['wp:post_type']?.[0];
    const status = item['wp:status']?.[0];
    return type === 'post' && status === 'publish';
  });

  console.log(`✅  Found ${posts.length} published posts to migrate.\n`);

  // Check for existing slugs to avoid duplicates
  const existing = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  const existingSlugs = new Set(existing.map(e => e.slug));
  console.log(`ℹ️   ${existingSlugs.size} posts already exist in Sanity (will skip duplicates).\n`);

  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];

    const rawTitle = item.title?.[0];
    const title = typeof rawTitle === 'object' ? rawTitle._ : rawTitle;
    if (!title || title.trim().length < 3) { skipped++; continue; }

    const slug = slugify(title);
    if (!slug || existingSlugs.has(slug)) {
      console.log(`  ⏭️  Skipping (duplicate): ${title}`);
      skipped++;
      continue;
    }

    const pubDate = item.pubDate?.[0] || new Date().toISOString();
    const rawContent = item['content:encoded']?.[0];
    const htmlContent = typeof rawContent === 'object' ? rawContent._ : rawContent || '';

    const wpCats = item.category?.map(c => (typeof c === 'object' ? c._ : c)) || [];
    const category = mapCategory(wpCats);

    const content = htmlToPortableText(htmlContent);
    // Ensure at least one block
    if (content.length === 0) {
      content.push({
        _type: 'block',
        _key: uid(),
        style: 'normal',
        children: [{ _type: 'span', _key: uid(), text: title, marks: [] }],
        markDefs: [],
      });
    }

    const doc = {
      _type: 'post',
      title: title.trim(),
      slug: { _type: 'slug', current: slug },
      date: new Date(pubDate).toISOString(),
      category,
      author: 'WeProm Team',
      readTime: `${Math.max(2, Math.ceil(htmlContent.split(/\s+/).length / 200))} min read`,
      image: GRADIENTS[i % GRADIENTS.length],
      content,
    };

    try {
      await client.create(doc);
      existingSlugs.add(slug);
      created++;
      console.log(`  ✅ [${i + 1}/${posts.length}] ${title.slice(0, 70)}`);
    } catch (err) {
      errors++;
      console.error(`  ❌ [${i + 1}/${posts.length}] ${title}: ${err.message}`);
    }

    // Rate limit: 5 req/s to stay within Sanity's free tier limits
    if (i % 5 === 4) await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\n🎉  Migration complete!`);
  console.log(`   Created : ${created}`);
  console.log(`   Skipped : ${skipped}`);
  console.log(`   Errors  : ${errors}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

// src/lib/sanityQueries.node.js
import { createClient } from '@sanity/client';

// Configuración directa para Node.js (sin import.meta.env)
const client = createClient({
  projectId: 'k3wb9a79',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true, // En build siempre usamos CDN
});

export async function getAllSlugs() {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map(p => `/blog/${p.slug}`);
}

export async function getPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    author,
    readTime,
    image
  }`;
  return await client.fetch(query, { slug });
}

export async function getAllPosts() {
  const query = `*[_type == "post"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    subcategory,
    author,
    readTime,
    image
  }`;
  return await client.fetch(query);
}
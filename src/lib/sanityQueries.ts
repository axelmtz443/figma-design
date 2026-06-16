// src/lib/sanityQueries.ts
import { sanityClient } from './sanityClient';

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  content?: any;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    author,
    readTime,
    image,
  }`;
  return await sanityClient.fetch(query);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    author,
    readTime,
    image,
    content[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    }
  }`;
  return await sanityClient.fetch(query, { slug });
}

export async function getAllSlugs(): Promise<string[]> {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const posts = await sanityClient.fetch(query);
  return posts.map((p: { slug: string }) => `/blog/${p.slug}`);
}
// src/lib/sanityQueries.ts
import { sanityClient } from './sanityClient';

export interface OurProject {
  _id: string;
  order: number;
  client: string;
  tag: string;
  description: string;
  image: any;
  logo: any;
  accent: string;
}

export interface SuccessStory {
  _id: string;
  order: number;
  client: string;
  service: string;
  description: string;
  logo: any;
  coverImage: any;
  expandedImage1: any;
  expandedImage2: any;
  color: string;
  gridSize: string;
}

export async function getOurProjects(): Promise<OurProject[]> {
  return sanityClient.fetch(
    `*[_type == "ourProject"] | order(order asc) { _id, order, client, tag, description, image, logo, accent }`
  );
}

export async function getSuccessStories(): Promise<SuccessStory[]> {
  return sanityClient.fetch(
    `*[_type == "successStory"] | order(order asc) { _id, order, client, service, description, logo, coverImage, expandedImage1, expandedImage2, color, gridSize }`
  );
}

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
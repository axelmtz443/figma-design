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

export interface MktDigitalProject {
  _id: string;
  order: number;
  name: string;
  subname: string;
  logo: any;
  cardImg: any;
  traffic: string;
  accounts: string;
  conversations: string;
  interactions: string;
  color: string;
}

export interface MarketResearchProject {
  _id: string;
  order: number;
  client: string;
  objetivos: string;
  resultados: string[];
  image: any;
  logo: any;
}

export async function getMktDigitalProjects(): Promise<MktDigitalProject[]> {
  return sanityClient.fetch(
    `*[_type == "mktDigitalProject"] | order(order asc) { _id, order, name, subname, logo, cardImg, traffic, accounts, conversations, interactions, color }`
  );
}

export async function getMarketResearchProjects(): Promise<MarketResearchProject[]> {
  return sanityClient.fetch(
    `*[_type == "marketResearchProject"] | order(order asc) { _id, order, client, objetivos, resultados, image, logo }`
  );
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  subcategory?: string;
  author: string;
  readTime: string;
  image: string;
  seoTitle?: string;
  seoDescription?: string;
  content?: any;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post" && defined(slug.current) && slug.current != "sin-slug"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    category,
    subcategory,
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
    subcategory,
    author,
    readTime,
    image,
    seoTitle,
    seoDescription,
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

// ─── Portfolio ────────────────────────────────────────────────────────────────

export interface PortfolioCase {
  _id: string;
  uen: 'investigacion-de-mercado' | 'marketing-digital' | 'branding';
  industry: string;
  order: number;
  client: string;
  projectTitle: string;
  description: string;
  objectives: string;
  results: string[];
  coverImage: any;
  logo?: any;
  color: string;
  featured: boolean;
}

export async function getPortfolioCases(uen?: string): Promise<PortfolioCase[]> {
  const filter = uen
    ? `*[_type == "portfolioCase" && uen == $uen]`
    : `*[_type == "portfolioCase"]`;
  const query = `${filter} | order(featured desc, order asc) {
    _id, uen, industry, order, client, projectTitle, description,
    objectives, results, coverImage, logo, color, featured
  }`;
  return sanityClient.fetch(query, uen ? { uen } : {});
}

// ─── Team ──────────────────────────────────────────────────────────────────

export interface TeamMember {
  _id: string;
  order: number;
  name: string;
  role: string;
  email?: string;
  description?: string;
  photo: any;
  active: boolean;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return sanityClient.fetch(
    `*[_type == "teamMember" && active == true] | order(order asc) { _id, order, name, role, email, description, photo, active }`
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────

export interface Review {
  _id: string;
  order: number;
  name: string;
  rating: number;
  photo: any;
  text?: string;
  category: string;
}

export async function getReviews(category: string): Promise<Review[]> {
  return sanityClient.fetch(
    `*[_type == "review" && category == $category] | order(order asc) { _id, order, name, rating, photo, text, category }`,
    { category }
  );
}

export async function getAllSlugs(): Promise<string[]> {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const posts = await sanityClient.fetch(query);
  return posts.map((p: { slug: string }) => `/blog/${p.slug}`);
}
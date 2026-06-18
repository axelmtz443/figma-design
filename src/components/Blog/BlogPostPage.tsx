import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { BlogPost as SanityBlogPost } from '../../lib/sanityQueries';

// ─── Types ────────────────────────────────────────────────────────────────────
// Soportamos el tipado de Sanity, manteniendo retrocompatibilidad por si quedan reductos estáticos
export type BlogPost = SanityBlogPost & {
  id?: number;
  _id?: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const FULL_GRADIENT = 'linear-gradient(90deg, #DA3731, #1096D6, #F7B033)';

function extractHeadings(blocks: any[]): string[] {
  if (!blocks || !Array.isArray(blocks)) return [];
  const headings: string[] = [];
  for (const block of blocks) {
    if (block._type === 'block' && block.style === 'h2' && block.children) {
      const text = block.children.map((c: any) => c.text).join('');
      if (text) headings.push(text);
    }
  }
  return headings;
}

// Genera un ID válido para selectores HTML a partir del texto
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// ─── Social icons ─────────────────────────────────────────────────────────────
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014 3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

// ─── Table of Contents ────────────────────────────────────────────────────────
function TableOfContents({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div
      className="rounded-2xl p-5 sticky top-6"
      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <p className="font-montserrat font-bold text-white text-[13px] uppercase tracking-widest mb-4">
        Table of Contents
      </p>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={`#${slugify(item)}`}
              className="font-montserrat text-[12px] text-white/50 hover:text-white/90 transition-colors block leading-relaxed"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Related card ─────────────────────────────────────────────────────────────
function RelatedCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      onClick={onClick}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer hover:border-white/20 transition-all"
    >
      <div className="relative w-full aspect-[4/3]" style={{ background: post.image }}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("/textures/noise.svg")' }} />
        <span 
          className="absolute top-3 left-3 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full" 
          style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          {post.category}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-montserrat font-semibold text-white text-[13px] leading-snug line-clamp-2 group-hover:text-white/80 transition-colors">
          {post.title}
        </h3>
        <p className="font-montserrat text-white/35 text-[11px]">{post.date}</p>
      </div>
    </motion.article>
  );
}

// ─── BlogPostPage — default export ───────────────────────────────────────────
export default function BlogPostPage({
  post,
  onBack,
  onNavigate,
  relatedPosts = [],
}: {
  post: BlogPost;
  onBack: () => void;
  onNavigate: (p: BlogPost) => void;
  relatedPosts?: BlogPost[];
}) {
  const headings = extractHeadings(post.content);
  
  // Parseo seguro de fecha (Soporta ISO strings de Sanity y formatos raw)
  const formattedDate = post.date 
    ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
    : '';

  // Configuración de renderizado personalizado para PortableText de Sanity
  // Configuración de renderizado personalizado para PortableText de Sanity
  const portableTextComponents = {
    block: {
      h2: ({ children }: any) => {
        const text = children?.[0] || '';
        const id = slugify(text);
        return <h2 id={id} className="font-montserrat font-bold text-white text-[20px] mt-8 mb-4 scroll-mt-6 break-words whitespace-pre-wrap">{children}</h2>;
      },
      h3: ({ children }: any) => <h3 className="font-montserrat font-semibold text-white/80 text-[16px] mt-6 mb-3 break-words whitespace-pre-wrap">{children}</h3>,
      normal: ({ children }: any) => <p className="font-montserrat text-white/60 text-[14px] leading-relaxed mb-4 break-words overflow-wrap-anywhere whitespace-pre-wrap">{children}</p>,
    },

    
    list: {
      bullet: ({ children }: any) => <ul className="mb-4 list-disc pl-6 text-white/60 text-[14px] flex flex-col gap-1">{children}</ul>,
      number: ({ children }: any) => <ol className="mb-4 list-decimal pl-6 text-white/60 text-[14px] flex flex-col gap-1">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="font-montserrat leading-relaxed">{children}</li>,
      number: ({ children }: any) => <li className="font-montserrat leading-relaxed">{children}</li>,
    },

    types: {
      image: ({ value }: any) => (
        <div className="my-6 rounded-xl overflow-hidden flex justify-center items-center w-full">
          <img src={value.url} alt={value.alt || 'Blog Image'} className="w-full sm:w-[70%] h-auto object-cover rounded-lg" />
        </div>
      ),
    },
    
  };

  return (
    <motion.div
      key={post._id || post.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-transparent min-h-screen py-12 px-4 sm:px-8"
    >
      <div className="max-w-5xl mx-auto p-16">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={onBack}
          className="font-montserrat text-[12px] text-white/40 hover:text-white/80 transition-colors mb-2 flex items-center gap-2"
        >
          ← Back to Blog
        </motion.button>

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-4"
        >
          <span
            className="font-montserrat text-[11px] font-semibold uppercase tracking-widest text-white px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {post.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-montserrat font-bold text-white text-center text-[28px] sm:text-[36px] lg:text-[42px] leading-tight tracking-tight mb-5 max-w-3xl mx-auto"
        >
          {post.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-10 flex-wrap"
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-montserrat font-bold flex-shrink-0"
            style={{ background: FULL_GRADIENT }}
          >
            {post.author ? post.author.split(' ').map((n) => n[0]).join('') : 'WP'}
          </div>
          <span className="font-montserrat text-white/50 text-[12px]">{post.author || 'WeProm Team'}</span>
          {formattedDate && (
            <>
              <span className="text-white/20 text-[12px]">·</span>
              <span className="font-montserrat text-white/50 text-[12px]">{formattedDate}</span>
            </>
          )}
          <span className="text-white/20 text-[12px]">·</span>
          <span className="font-montserrat text-white/50 text-[12px]">{post.readTime || '5 min read'}</span>
        </motion.div>

        {/* Hero image */}
        

        {/* Two-column layout */}
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 w-full overflow-hidden">

          {/* Article body */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="w-full min-w-0 break-words"
          >
            {post.content ? (
              <PortableText value={post.content} components={portableTextComponents} />
            ) : (
              <p className="font-montserrat text-white/60 text-[14px]">No content available.</p>
            )}

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pt-6 mt-8 border-t border-white/10">
              <span className="font-montserrat text-white/40 text-[12px]">Share this blog</span>
              {[XIcon, FacebookIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <Icon />
                </button>
              ))}
            </div>
          </motion.article>

          {/* Sidebar - Table of Contents */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-[220px] flex-shrink-0"
          >
            <TableOfContents items={headings} />
          </motion.aside>
        </div>

        {/* Read More (Related posts) */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-montserrat font-bold text-white text-[20px]">Read More</h2>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onBack}
                className="font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                See All
              </motion.button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => (
                <RelatedCard
                  key={rp._id || rp.id}
                  post={rp}
                  onClick={() => {
                    onNavigate(rp);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
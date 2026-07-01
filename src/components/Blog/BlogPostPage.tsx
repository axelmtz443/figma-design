import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { BlogPost as SanityBlogPost } from '../../lib/sanityQueries';

export type BlogPost = SanityBlogPost & {
  id?: number;
  _id?: string;
};

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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

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

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function TableOfContents({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div
      className="rounded-2xl p-4 sm:p-5 lg:sticky lg:top-6"
      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <p className="font-montserrat font-bold text-white text-[11px] sm:text-[13px] uppercase tracking-widest mb-3 sm:mb-4">
        Contenido
      </p>
      <ul className="flex flex-col gap-1.5 sm:gap-2">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={'#' + slugify(item)}
              className="font-montserrat text-[11px] sm:text-[12px] text-white/50 hover:text-white/90 transition-colors block leading-relaxed"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileToc({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="lg:hidden mb-6 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
      <div className="flex gap-2 pb-1">
        {items.map((item, i) => (
          <a
            key={i}
            href={'#' + slugify(item)}
            className="font-montserrat text-[11px] text-white/50 hover:text-white/90 whitespace-nowrap px-3 py-1.5 rounded-full flex-shrink-0 transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

function RelatedCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      onClick={onClick}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer hover:border-white/20 transition-all"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: post.image }}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" />
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

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  const portableTextComponents = {
    block: {
      h2: ({ children }: any) => {
        const text = Array.isArray(children) ? children[0] : '';
        const id = slugify(String(text));
        return (
          <h2 id={id} className="font-montserrat font-bold text-white text-[18px] sm:text-[20px] mt-7 sm:mt-8 mb-3 sm:mb-4 scroll-mt-6 break-words">
            {children}
          </h2>
        );
      },
      h3: ({ children }: any) => (
        <h3 className="font-montserrat font-semibold text-white/80 text-[15px] sm:text-[16px] mt-5 sm:mt-6 mb-2 sm:mb-3 break-words">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="font-montserrat text-white/60 text-[13px] sm:text-[14px] leading-relaxed mb-4 break-words">
          {children}
        </p>
      ),
    },

    
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          {children}
        </a>
      ),
      strong: ({ children }: any) => <strong className="font-bold text-white">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
    },

    list: {
      bullet: ({ children }: any) => (
        <ul className="mb-4 list-disc pl-5 sm:pl-6 text-white/60 text-[13px] sm:text-[14px] flex flex-col gap-1">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="mb-4 list-decimal pl-5 sm:pl-6 text-white/60 text-[13px] sm:text-[14px] flex flex-col gap-1">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="font-montserrat leading-relaxed">{children}</li>
      ),
      number: ({ children }: any) => (
        <li className="font-montserrat leading-relaxed">{children}</li>
      ),
    },
    types: {
      image: ({ value }: any) => (
        <div className="my-5 sm:my-6 rounded-xl overflow-hidden flex justify-center items-center w-full">
          <img
            src={value.url}
            alt={value.alt || 'Blog Image'}
            className="w-full sm:w-[80%] lg:w-[70%] h-auto object-cover rounded-lg"
          />
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
      className="w-full bg-transparent min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12">

        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={onBack}
          className="font-montserrat text-[12px] text-white/40 hover:text-white/80 transition-colors mb-4 sm:mb-6 flex items-center gap-2"
        >
          {'← Back to Blog'}
        </motion.button>

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-3 sm:mb-4"
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
          className="font-montserrat font-bold text-white text-center text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-tight tracking-tight mb-4 sm:mb-5 max-w-3xl mx-auto"
        >
          {post.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap"
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-montserrat font-bold flex-shrink-0"
            style={{ background: FULL_GRADIENT }}
          >
            {post.author ? post.author.split(' ').map((n: string) => n[0]).join('') : 'WP'}
          </div>
          <span className="font-montserrat text-white/50 text-[12px]">{post.author || 'WeProm Team'}</span>
          {formattedDate && (
            <>
              <span className="text-white/20 text-[12px]">{'·'}</span>
              <span className="font-montserrat text-white/50 text-[12px]">{formattedDate}</span>
            </>
          )}
          <span className="text-white/20 text-[12px]">{'·'}</span>
          <span className="font-montserrat text-white/50 text-[12px]">{post.readTime || '5 min read'}</span>
        </motion.div>

        {/* ToC mobile — pills horizontales */}
        <MobileToc items={headings} />

        {/* Layout: artículo + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-10 w-full">

          {/* Artículo */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="w-full min-w-0"
          >
            {post.content ? (
              <PortableText value={post.content} components={portableTextComponents} />
            ) : (
              <p className="font-montserrat text-white/60 text-[14px]">No content available.</p>
            )}

            {/* Share */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-5 sm:pt-6 mt-6 sm:mt-8 border-t border-white/10">
              <span className="font-montserrat text-white/40 text-[12px]">Comparte este artículo</span>
              {(() => {
                const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
                const shareTitle = post.title || '';
                const shareLinks = [
                  { Icon: XIcon, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}` },
                  { Icon: FacebookIcon, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
                  { Icon: LinkedInIcon, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
                  { Icon: WhatsAppIcon, url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}` },
                ];
                return shareLinks.map(({ Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                  >
                    <Icon />
                  </a>
                ));
              })()}
            </div>
          </motion.article>

          {/* Sidebar desktop — solo visible en lg+ */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block w-[220px] flex-shrink-0"
          >
            <TableOfContents items={headings} />
          </motion.aside>

        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-white/10">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="font-montserrat font-bold text-white text-[18px] sm:text-[20px]">Read More</h2>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
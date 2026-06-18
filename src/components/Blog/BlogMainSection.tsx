import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { getAllPosts, BlogPost } from '../../lib/sanityQueries';
import { useNavigate } from 'react-router-dom';

const FULL_GRADIENT = 'linear-gradient(90deg, #DA3731, #1096D6, #F7B033)';
const POSTS_PER_PAGE = 9;
const VIEWS_KEY = 'blog_post_views';

function getViewCounts(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(VIEWS_KEY) || '{}'); }
  catch { return {}; }
}

const ALL_CATEGORIES = ['Todos', 'Marketing', 'Tools', 'UX', 'Web3', 'DeFi', 'Security', 'DAOs', 'Smart Contracts', 'dApps', 'Multi-Chain'];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Más recientes' },
  { value: 'oldest', label: 'Más antiguos' },
  { value: 'az',     label: 'A → Z' },
  { value: 'views',  label: 'Más vistos' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch { return iso; }
}

function isGradient(s: string) {
  return s?.startsWith('linear-gradient') || s?.startsWith('radial-gradient');
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const GradientLine = () => (
  <div className="w-16 h-[2px] mb-6" style={{ background: FULL_GRADIENT }} />
);

function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative w-full max-w-xl">
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Buscar artículos..."
        className="w-full pl-11 pr-10 py-3 rounded-2xl font-montserrat text-[13px] text-white placeholder:text-white/25 bg-white/[0.04] border border-white/10 focus:outline-none focus:border-white/25 transition-colors"
      />
      {value && (
        <button onClick={() => onChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
}

function CategoryPills({ active, onChange, available }: { active: string; onChange: (c: string) => void; available: Set<string> }) {
  const cats = ALL_CATEGORIES.filter(c => c === 'Todos' || available.has(c));
  return (
    <div className="flex flex-wrap gap-2">
      {cats.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`font-montserrat text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
            active === cat
              ? 'border-transparent text-white'
              : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/70 bg-white/[0.02]'
          }`}
          style={active === cat ? { background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' } : {}}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function SortSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="font-montserrat text-[12px] text-white/60 bg-white/[0.04] border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:border-white/25 transition-colors appearance-none cursor-pointer"
    >
      {SORT_OPTIONS.map(o => (
        <option key={o.value} value={o.value} className="bg-black">{o.label}</option>
      ))}
    </select>
  );
}

// Smart pagination — shows first/last + window around current
function Pagination({ current, total, onChange }: { current: number; total: number; onChange: (n: number) => void }) {
  if (total <= 1) return null;

  const pages: (number | '…')[] = [];
  const window = 1;
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - window && i <= current + window)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '…') {
      pages.push('…');
    }
  }

  return (
    <div className="flex items-center justify-center gap-1.5 mt-12 flex-wrap">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="font-montserrat text-[11px] text-white/50 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition disabled:opacity-25"
      >
        ← Anterior
      </button>

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`e${i}`} className="font-montserrat text-white/20 text-[12px] px-1">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={`w-8 h-8 rounded-lg font-montserrat text-[12px] border transition ${
              p === current
                ? 'border-white/30 text-white bg-white/10'
                : 'border-white/10 text-white/35 bg-white/[0.02] hover:bg-white/[0.07]'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="font-montserrat text-[11px] text-white/50 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition disabled:opacity-25"
      >
        Siguiente →
      </button>
    </div>
  );
}

// ─── Cards ────────────────────────────────────────────────────────────────────

function FeaturedCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -3 }}
      onClick={onClick}
      className="group grid grid-cols-1 sm:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer hover:border-white/25 hover:bg-white/[0.04] transition-all mb-6"
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-full min-h-[220px] overflow-hidden">
        {isGradient(post.image) ? (
          <div className="w-full h-full" style={{ background: post.image }} />
        ) : (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className="absolute top-4 left-4 font-montserrat text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}
        >
          {post.category}
        </span>
        <span
          className="absolute top-4 right-4 font-montserrat text-[9px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          Destacado
        </span>
      </div>

      <div className="p-7 sm:p-10 flex flex-col justify-center gap-4">
        <p className="font-montserrat text-white/35 text-[11px] uppercase tracking-widest">{formatDate(post.date)}</p>
        <h2 className="font-montserrat font-bold text-white text-[22px] sm:text-[26px] leading-snug group-hover:text-white/90 transition-colors line-clamp-3">
          {post.title}
        </h2>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold font-montserrat flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }}>
            {(post.author || 'W').split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <span className="font-montserrat text-white/45 text-[12px]">{post.author}</span>
          <span className="text-white/20">·</span>
          <span className="font-montserrat text-white/45 text-[12px]">{post.readTime}</span>
        </div>
        <span className="font-montserrat text-[12px] text-white/50 group-hover:text-white transition-colors mt-1 inline-flex items-center gap-1">
          Leer artículo →
        </span>
      </div>
    </motion.article>
  );
}

function BlogCard({ post, index, onClick, views }: { post: BlogPost; index: number; onClick: () => void; views: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer transition-all hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {isGradient(post.image) ? (
          <div className="w-full h-full transition-transform duration-500 group-hover:scale-105" style={{ background: post.image }} />
        ) : (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        )}
        <span
          className="absolute top-3 left-3 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full z-10"
          style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          {post.category}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-montserrat font-semibold text-white text-[13px] leading-snug group-hover:text-white/90 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 mt-auto pt-2">
          <p className="font-montserrat text-white/35 text-[11px]">{formatDate(post.date)}</p>
          <span className="text-white/15">·</span>
          <p className="font-montserrat text-white/35 text-[11px]">{post.readTime}</p>
        </div>
      </div>
    </motion.article>
  );
}

function TrendingCard({ post, rank, onClick, views }: { post: BlogPost; rank: number; onClick: () => void; views: number }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      onClick={onClick}
      className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.02] cursor-pointer hover:border-white/15 hover:bg-white/[0.04] transition-all"
    >
      <span className="font-aston text-[32px] leading-none text-white/8 flex-shrink-0 w-8 text-center select-none">
        {rank}
      </span>
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
        {isGradient(post.image) ? (
          <div className="w-full h-full" style={{ background: post.image }} />
        ) : (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <span className="font-montserrat text-[10px] font-semibold uppercase tracking-wider text-white/30">{post.category}</span>
        <h4 className="font-montserrat font-semibold text-white/80 text-[12px] leading-snug line-clamp-2 group-hover:text-white transition-colors">{post.title}</h4>
        <span className="font-montserrat text-[10px] text-white/25">{formatDate(post.date)}</span>
      </div>
    </motion.div>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function NewsletterStrip() {
  const [email, setEmail] = useState('');
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full border-t border-white/10 pt-16 mt-20 flex flex-col sm:flex-row items-center justify-between gap-8"
    >
      <div className="max-w-xs">
        <h3 className="font-aston text-[36px] sm:text-[44px] text-white leading-tight tracking-tight mb-3">¡Eso no<br />es Todo!</h3>
        <p className="font-montserrat text-white/40 text-[13px] leading-relaxed">¿Quieres conocer más sobre los temas más relevantes de Marketing y Publicidad?</p>
      </div>
      <div className="flex flex-col gap-4 w-full sm:w-auto sm:min-w-[320px] p-6 rounded-[24px]" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <p className="font-montserrat font-bold text-white text-[18px] sm:text-[20px] text-center leading-snug">Suscríbete a<br />nuestro news letter</p>
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}
          className="bg-transparent border border-white/20 rounded-full px-5 py-2.5 font-montserrat text-white text-[13px] text-right placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors" />
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          className="relative w-full py-2.5 rounded-full font-montserrat font-semibold text-white text-[13px] tracking-wide transition-all overflow-hidden"
          style={{ background: 'transparent', border: '1.5px solid transparent', backgroundImage: 'linear-gradient(#111, #111), linear-gradient(90deg, #DA3731, #1096D6, #F7B033)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
          subscribe
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function BlogSection() {
  const [posts, setPosts]         = useState<BlogPost[]>([]);
  const [loading, setLoading]     = useState(true);
  const [search, setSearch]       = useState('');
  const [category, setCategory]   = useState('Todos');
  const [sort, setSort]           = useState('newest');
  const [page, setPage]           = useState(1);
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});
  const navigate = useNavigate();

  useEffect(() => {
    setViewCounts(getViewCounts());
    getAllPosts().then(data => { setPosts(data); setLoading(false); });
  }, []);

  // Categories that actually exist in the fetched posts
  const availableCategories = useMemo(() => new Set(posts.map(p => p.category)), [posts]);

  // Filtered + sorted posts
  const filtered = useMemo(() => {
    let result = [...posts];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p => p.title?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q));
    }
    if (category !== 'Todos') {
      result = result.filter(p => p.category === category);
    }

    switch (sort) {
      case 'oldest': result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); break;
      case 'az':     result.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'es')); break;
      case 'views':  result.sort((a, b) => (viewCounts[b.slug] || 0) - (viewCounts[a.slug] || 0)); break;
      default:       result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); break;
    }

    return result;
  }, [posts, search, category, sort, viewCounts]);

  // Trending posts (top 4 by local views, only when no active filter)
  const trendingPosts = useMemo(() => {
    const hasViews = Object.keys(viewCounts).length > 0;
    if (!hasViews || search || category !== 'Todos') return [];
    return [...posts]
      .filter(p => (viewCounts[p.slug] || 0) > 0)
      .sort((a, b) => (viewCounts[b.slug] || 0) - (viewCounts[a.slug] || 0))
      .slice(0, 4);
  }, [posts, viewCounts, search, category]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const isFiltering = search || category !== 'Todos';

  // When filtering: show all in grid. When not: first is featured, rest in grid
  const featuredPost = !isFiltering && filtered.length > 0 ? filtered[0] : null;
  const gridPosts    = !isFiltering && filtered.length > 0 ? filtered.slice(1) : filtered;
  const visibleGrid  = gridPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handlePage = (n: number) => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleSearch = (v: string) => { setSearch(v); setPage(1); };
  const handleCategory = (c: string) => { setCategory(c); setPage(1); };
  const handleSort = (s: string) => { setSort(s); setPage(1); };
  const handleNavigate = (post: BlogPost) => navigate(`/blog/${post.slug}`);

  if (loading) {
    return (
      <section className="w-full bg-transparent py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
          <p className="font-montserrat text-white/40 text-[13px]">Cargando artículos...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-transparent py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <GradientLine />
          <h1 className="font-aston text-[36px] sm:text-[52px] lg:text-[60px] text-white leading-tight tracking-tight mb-3">Blog</h1>
          <p className="font-montserrat text-white/40 text-[13px] sm:text-[14px] max-w-md leading-relaxed">
            Explora insights, tendencias y mejores prácticas de marketing y publicidad.
          </p>
        </motion.div>

        {/* Search + Sort */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5"
        >
          <SearchBar value={search} onChange={handleSearch} />
          <SortSelect value={sort} onChange={handleSort} />
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <CategoryPills active={category} onChange={handleCategory} available={availableCategories} />
        </motion.div>

        {/* Result count */}
        <AnimatePresence mode="wait">
          {isFiltering && (
            <motion.p
              key="count"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="font-montserrat text-white/30 text-[12px] mb-6"
            >
              {filtered.length === 0
                ? 'Sin resultados'
                : `${filtered.length} artículo${filtered.length !== 1 ? 's' : ''}${category !== 'Todos' ? ` en ${category}` : ''}${search ? ` con "${search}"` : ''}`
              }
            </motion.p>
          )}
        </AnimatePresence>

        {/* Trending strip — only when no filter active and user has visited posts */}
        <AnimatePresence>
          {trendingPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-white/40">Lo más visto</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trendingPosts.map((post, i) => (
                  <TrendingCard
                    key={post._id}
                    post={post}
                    rank={i + 1}
                    views={viewCounts[post.slug] || 0}
                    onClick={() => handleNavigate(post)}
                  />
                ))}
              </div>
              <div className="border-b border-white/8 mt-8 mb-10" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured post */}
        {featuredPost && (
          <FeaturedCard post={featuredPost} onClick={() => handleNavigate(featuredPost)} />
        )}

        {/* Grid */}
        {visibleGrid.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleGrid.map((post, i) => (
              <BlogCard
                key={post._id}
                post={post}
                index={i}
                views={viewCounts[post.slug] || 0}
                onClick={() => handleNavigate(post)}
              />
            ))}
          </div>
        ) : (
          !featuredPost && (
            <div className="flex flex-col items-center py-20 gap-3 text-center">
              <svg className="w-10 h-10 text-white/15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
              <p className="font-montserrat text-white/30 text-[14px]">No se encontraron artículos</p>
              <button onClick={() => { handleSearch(''); handleCategory('Todos'); }} className="font-montserrat text-[12px] text-white/50 hover:text-white transition-colors underline underline-offset-2">
                Limpiar filtros
              </button>
            </div>
          )
        )}

        <Pagination current={page} total={totalPages} onChange={handlePage} />
        <NewsletterStrip />
      </div>
    </section>
  );
}

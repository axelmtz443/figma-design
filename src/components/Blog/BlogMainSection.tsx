import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getAllPosts, BlogPost } from '../../lib/sanityQueries';
import { useNavigate } from 'react-router-dom';

// ─── Gradient helpers ─────────────────────────────────────────────────────────
const FULL_GRADIENT = 'linear-gradient(90deg, #DA3731, #1096D6, #F7B033)';

const GradientLine = () => (
  <div className="w-16 h-[2px] mb-6" style={{ background: FULL_GRADIENT }} />
);

const POSTS_PER_PAGE = 9;

// ─── Newsletter strip ─────────────────────────────────────────────────────────
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
        <h3 className="font-aston text-[36px] sm:text-[44px] text-white leading-tight tracking-tight mb-3">
          ¡Eso no<br />es Todo!
        </h3>
        <p className="font-montserrat text-white/40 text-[13px] leading-relaxed">
          ¿Quieres conocer más sobre los temas más relevantes de Marketing y Publicidad?
        </p>
      </div>

      <div
        className="flex flex-col gap-4 w-full sm:w-auto sm:min-w-[320px] p-6 rounded-[24px]"
        style={{ background: 'rgba(255,255,255,0.07)' }}
      >
        <p className="font-montserrat font-bold text-white text-[18px] sm:text-[20px] text-center leading-snug">
          Suscríbete a<br />nuestro news letter
        </p>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-white/20 rounded-full px-5 py-2.5 font-montserrat text-white text-[13px] text-right placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-full py-2.5 rounded-full font-montserrat font-semibold text-white text-[13px] tracking-wide transition-all overflow-hidden"
          style={{
            background: 'transparent',
            border: '1.5px solid transparent',
            backgroundImage: 'linear-gradient(#111, #111), linear-gradient(90deg, #DA3731, #1096D6, #F7B033)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        >
          subscribe
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────
function Pagination({
  current,
  total,
  onPrev,
  onNext,
  onPage,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onPage: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={onPrev}
        disabled={current === 1}
        className="font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition disabled:opacity-30"
      >
        Previous
      </button>

      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onPage(n)}
          className={`w-8 h-8 rounded-full font-montserrat text-[12px] border transition ${
            n === current
              ? 'border-white/30 text-white bg-white/10'
              : 'border-white/10 text-white/40 bg-white/[0.03] hover:bg-white/[0.07]'
          }`}
        >
          {n}
        </button>
      ))}

      <button
        onClick={onNext}
        disabled={current === total}
        className="font-montserrat text-[12px] text-white/50 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition disabled:opacity-30"
      >
        Next
      </button>
    </div>
  );
}

// ─── Single Blog Card ─────────────────────────────────────────────────────────
function BlogCard({ post, index, onClick }: { post: BlogPost; index: number; onClick: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer transition-all hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: post.image }}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        <span className="absolute top-3 left-3 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)' }}>
          {post.category}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-montserrat font-semibold text-white text-[13px] leading-snug group-hover:text-white/90 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="font-montserrat text-white/35 text-[11px] mt-auto pt-2">{post.date}</p>
      </div>
    </motion.article>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visiblePosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handlePage = (n: number) => {
    setPage(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <section className="w-full bg-transparent py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-montserrat text-white/60">Cargando artículos...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-transparent py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <GradientLine />
          <h1 className="font-aston text-[36px] sm:text-[52px] lg:text-[60px] text-white leading-tight tracking-tight mb-3">
            Blog
          </h1>
          <p className="font-montserrat text-white/40 text-[13px] sm:text-[14px] max-w-md leading-relaxed">
            Explora insights, tendencias y mejores prácticas de marketing y publicidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visiblePosts.map((post, i) => (
            <BlogCard
              key={post._id}
              post={post}
              index={i}
              onClick={() => navigate(`/blog/${post.slug}`)}
            />
          ))}
        </div>

        <Pagination
          current={page}
          total={totalPages}
          onPrev={() => handlePage(Math.max(1, page - 1))}
          onNext={() => handlePage(Math.min(totalPages, page + 1))}
          onPage={handlePage}
        />

        <NewsletterStrip />
      </div>
    </section>
  );
}

export default BlogSection;
import BlogCard from './BlogCard';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../images/ISOTIPE.png';
import { getAllPosts, BlogPost } from '../../lib/sanityQueries';

function formatDate(iso: string) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return iso; }
}

function BlogSection() {
  const [isOn, setIsOn] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts().then(data => setPosts(data.filter(p => p.image).slice(0, 3)));
  }, []);

  return (
    <section className={`w-full pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ${isOn ? 'bg-transparent' : 'bg-[#050505]'}`}>
      <div className="max-w-[1400px] mx-auto">

        <div
          className="relative mb-8 sm:mb-12 cursor-pointer group flex flex-col items-center justify-center w-full"
          onClick={() => setIsOn(!isOn)}
          title={isOn ? "Apagar luz" : "Encender luz"}
        >
          <div className={`absolute -top-20 left-1/2 w-[2px] h-20 bg-gradient-to-b from-transparent to-white/20 -translate-x-1/2 transition-opacity duration-500 ${isOn ? 'opacity-100' : 'opacity-20'}`} />
          {isOn && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-[80px] bg-white/10 animate-light-pulse pointer-events-none" />
          )}
          <img
            src={logoImage}
            alt="Logo"
            className={`w-24 sm:w-[10rem] h-auto object-contain relative z-10 transition-all duration-500 animate-lamp-swing origin-top rounded-full
              ${isOn ? 'brightness-125' : 'brightness-[0.2] grayscale'}
              group-hover:scale-105
            `}
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white/40 uppercase tracking-widest whitespace-nowrap">
            Click para {isOn ? 'Apagar' : 'Encender'}
          </div>
        </div>

        <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
          <div className="text-left flex-1">
            <h2
              className={`font-aston mb-3 sm:mb-4 transition-colors duration-500 leading-tight text-[36px] sm:text-[44px] lg:text-[56px] ${isOn ? 'text-white' : 'text-white/20'}`}
              style={{ fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              Lo último en el mundo del Marketing.
            </h2>
            <p
              className={`font-montserrat max-w-3xl transition-colors duration-500 text-[20px] sm:text-[22px] lg:text-[23px] ${isOn ? 'text-soft-gray' : 'text-white/10'}`}
              style={{ lineHeight: '28px', letterSpacing: '0.01em' }}
            >
              Escribimos para los amantes de la creatividad, la publicidad y los negocios.
            </p>
          </div>

          <div className="flex-shrink-0 self-start sm:self-center">
            <button
              onClick={() => navigate('/blog')}
              className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent border border-white/30 text-white font-montserrat font-medium text-[14px] sm:text-[16px] transition-all duration-300 hover:border-white/60 hover:bg-white/5 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Ver Blog</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post._id}
              slug={post.slug}
              image={post.image}
              title={post.title}
              date={formatDate(post.date)}
              category={post.category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogSection;
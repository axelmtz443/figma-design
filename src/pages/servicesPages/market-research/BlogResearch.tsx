import BlogCard from '../../../components/Home/BlogCard';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPosts, BlogPost } from '../../../lib/sanityQueries';

function formatDate(iso: string) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return iso; }
}

function BlogResearch() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts().then(data => {
      const filtered = data.filter(p => p.image && p.category?.toUpperCase() === 'DEFI');
      setPosts(filtered.slice(0, 3));
    });
  }, []);

  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-[1400px] mx-auto">

        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 lg:gap-8">
          <div className="text-left flex-1">
            <h2
              className="font-aston mb-2 sm:mb-3 lg:mb-4 leading-tight text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] text-white"
              style={{ fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              Conoce más sobre Investigación de Mercados
            </h2>
            <p
              className="font-montserrat max-w-3xl text-base sm:text-[20px] md:text-[22px] lg:text-[23px] text-soft-gray"
              style={{ lineHeight: '1.4', letterSpacing: '0.01em' }}
            >
              Insights, tendencias y mejores prácticas del mundo del marketing.
            </p>
          </div>

          <div className="flex-shrink-0 self-start sm:self-center">
            <button
              onClick={() => navigate('/blog')}
              className="group relative px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full bg-transparent border border-white/30 text-white font-montserrat font-medium text-[12px] sm:text-[14px] lg:text-[16px] transition-all duration-300 hover:border-white/60 hover:bg-white/5 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Ver Blog</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

export default BlogResearch;
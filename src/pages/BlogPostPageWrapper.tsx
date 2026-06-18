import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostBySlug, getAllPosts, BlogPost } from '../lib/sanityQueries';
import BlogPostPageComponent from '../components/Blog/BlogPostPage';

import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

export default function BlogPostPageWrapper() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    Promise.all([getPostBySlug(slug), getAllPosts()])
      .then(([singlePost, allPosts]) => {
        if (singlePost) {
          setPost(singlePost);

          // Track view in localStorage
          try {
            const stored = JSON.parse(localStorage.getItem('blog_post_views') || '{}');
            stored[slug] = (stored[slug] || 0) + 1;
            localStorage.setItem('blog_post_views', JSON.stringify(stored));
          } catch {}

          // Related: same category first, then any other posts
          const sameCategory = allPosts.filter(p => p.slug !== slug && p.category === singlePost.category);
          const others       = allPosts.filter(p => p.slug !== slug && p.category !== singlePost.category);
          setRelatedPosts([...sameCategory, ...others].slice(0, 3));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="text-white text-center py-20 font-montserrat">Cargando artículo...</div>;
  }

  if (!post) {
    return <div className="text-white text-center py-20 font-montserrat">Artículo no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-grow">
        <BlogPostPageComponent
          post={post}
          relatedPosts={relatedPosts}
          onBack={() => navigate('/blog')}
          onNavigate={(newPost) => navigate(`/blog/${newPost.slug}`)}
        />
      </main>

      <Footer />
    </div>
  );
}
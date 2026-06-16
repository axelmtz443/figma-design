import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostBySlug, getAllPosts, BlogPost } from '../lib/sanityQueries';
import BlogPostPageComponent from '../components/Blog/BlogPostPage';

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
          const related = allPosts.filter(p => p.slug !== slug).slice(0, 3);
          setRelatedPosts(related);
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
    <BlogPostPageComponent
      post={post}
      relatedPosts={relatedPosts}
      onBack={() => navigate('/blog')}
      onNavigate={(newPost) => navigate(`/blog/${newPost.slug}`)}
    />
  );
}
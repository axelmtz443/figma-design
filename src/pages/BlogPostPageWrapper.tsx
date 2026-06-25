import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug, getAllPosts, BlogPost } from '../lib/sanityQueries';
import BlogPostPageComponent from '../components/Blog/BlogPostPage';

import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

const SITE_NAME = 'WeProm';
const SITE_URL  = 'https://weprom.mx';

function isGradient(s: string) {
  return s?.startsWith('linear-gradient') || s?.startsWith('radial-gradient');
}

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

          try {
            const stored = JSON.parse(localStorage.getItem('blog_post_views') || '{}');
            stored[slug] = (stored[slug] || 0) + 1;
            localStorage.setItem('blog_post_views', JSON.stringify(stored));
          } catch {}

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

  const pageTitle       = `${post.seoTitle || post.title} | ${SITE_NAME}`;
  const description     = post.seoDescription || '';
  const canonicalUrl    = `${SITE_URL}/blog/${post.slug}`;
  const ogImage         = post.image && !isGradient(post.image) ? post.image : `${SITE_URL}/og-default.jpg`;
  const publishedDate   = post.date ? new Date(post.date).toISOString() : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seoTitle || post.title,
    ...(description && { description }),
    ...(publishedDate && { datePublished: publishedDate }),
    author: { '@type': 'Person', name: post.author || SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    ...(ogImage && { image: ogImage }),
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="canonical" href={canonicalUrl} />
        {description && <meta name="description" content={description} />}

        {/* Open Graph */}
        <meta property="og:type"        content="article" />
        <meta property="og:title"       content={post.seoTitle || post.title} />
        <meta property="og:url"         content={canonicalUrl} />
        <meta property="og:site_name"   content={SITE_NAME} />
        {description && <meta property="og:description" content={description} />}
        {ogImage     && <meta property="og:image"       content={ogImage} />}
        {publishedDate && <meta property="article:published_time" content={publishedDate} />}

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={post.seoTitle || post.title} />
        {description && <meta name="twitter:description" content={description} />}
        {ogImage     && <meta name="twitter:image"       content={ogImage} />}

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
    </>
  );
}

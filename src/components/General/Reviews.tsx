import { useEffect, useState } from 'react';
import { getReviews, Review } from '../../lib/sanityQueries';
import { urlFor } from '../../lib/sanityImage';
import googleLogo from '../../images/google-logo.png';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < rating ? '#e6af41' : 'rgba(255,255,255,0.15)'}>
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
);

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 flex-shrink-0 w-64 sm:w-72">
      <div className="flex items-center gap-3">
        <img
          src={urlFor(review.photo)}
          alt={review.name}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0 border border-white/10"
        />
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-[13px] sm:text-[14px] leading-tight truncate">{review.name}</p>
          <p className="text-white/40 text-[11px] truncate">Cliente verificado en Google</p>
        </div>
        <GoogleIcon />
      </div>
      {review.text && (
        <p className="text-white/70 text-[12px] sm:text-[13px] leading-relaxed line-clamp-4">{review.text}</p>
      )}
      <StarRating rating={review.rating} />
    </div>
  );
}

function InfiniteRow({ reviews, direction }: { reviews: Review[]; direction: 'left' | 'right' }) {
  const looped = [...reviews, ...reviews];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-10 sm:w-16 h-full z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
      <div className="absolute top-0 right-0 w-10 sm:w-16 h-full z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #000, transparent)' }} />

      <div
        className="flex gap-3 sm:gap-4 py-1"
        style={{
          animation: `reviews-scroll-${direction} 30s linear infinite`,
          width: 'max-content',
        }}
      >
        {looped.map((review, index) => (
          <ReviewCard key={`${review._id}-${index}`} review={review} />
        ))}
      </div>

      <style>{`
        @keyframes reviews-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes reviews-scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

interface ReviewsProps {
  category: string;
  title?: string;
  subtitle?: string;
}

export default function Reviews({ category, title = 'No sólo lo decimos nosotros...', subtitle = 'Somos una empresa atenta y profesional, y nuestros clientes comparten esa opinión. ¡Descubre lo que dicen de nosotros!' }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews(category).then(setReviews).catch(() => {});
  }, [category]);

  if (reviews.length === 0) return null;

  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const mid = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, mid);
  const row2 = reviews.slice(mid).length > 0 ? reviews.slice(mid) : row1;

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-montserrat text-white overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-aston text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <InfiniteRow reviews={row1} direction="left" />
          {reviews.length > 3 && <InfiniteRow reviews={row2} direction="right" />}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-5 sm:px-6 py-4 flex items-center gap-3 sm:gap-4 mx-auto flex-wrap justify-center">
          <div className="p-2 sm:p-2.5 bg-white rounded-xl shadow-xl flex-shrink-0">
            <img src={googleLogo} className="w-8 h-8 sm:w-10 sm:h-10" alt="Google" />
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold text-xs sm:text-sm">Puntuación de {avgRating.toFixed(1)} estrellas</p>
            <p className="text-white/60 text-[10px] sm:text-xs">Basado en {reviews.length} opiniones verificadas</p>
          </div>
          <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
            <StarRating rating={Math.round(avgRating)} />
          </div>
        </div>

      </div>
    </section>
  );
}

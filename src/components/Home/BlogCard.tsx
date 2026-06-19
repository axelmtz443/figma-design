import { Link } from 'react-router-dom';

interface BlogCardProps {
  slug: string;
  image: string;
  title: string;
  date: string;
  category?: string;
}

function BlogCard({ slug, image, title, date, category }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group block w-full rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-400 hover:scale-[1.02] hover:bg-white/[0.06]"
    >
      <div className="h-48 sm:h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-6">
        {category && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-amber-400/80 mb-3 block">
            {category}
          </span>
        )}
        <h3 className="font-montserrat font-semibold text-white text-[17px] sm:text-[19px] leading-snug mb-4 group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-zinc-500">{date}</span>
          <span className="text-[12px] text-white/30 group-hover:text-white/60 transition-colors flex items-center gap-1">
            Leer
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

import { useState, useEffect } from 'react';
import { getMarketResearchTestimonials, MarketResearchTestimonial } from '../../../lib/sanityQueries';

export interface Testimonial {
  id: string | number;
  name: string;
  location?: string;
  dateLabel: string;
  comment: string;
  rating: number;
  helpfulCount: number;
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

function sanityToTestimonial(t: MarketResearchTestimonial): Testimonial {
  return {
    id: t._id,
    name: t.name,
    location: t.location,
    dateLabel: formatDate(t.date),
    comment: t.comment,
    rating: t.rating,
    helpfulCount: t.helpfulCount || 0,
  };
}

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Laura Pérez', location: 'Jalisco, México', dateLabel: '2 de junio de 2026', comment: '"Asesoramiento excepcional desde el primer contacto. Entendieron perfectamente nuestra visión y la materializaron en productos increíbles"', rating: 5, helpfulCount: 18 },
  { id: 2, name: 'Maria González', location: 'CDMX, México', dateLabel: '28 de mayo de 2026', comment: 'Excelente servicio! Los productos personalizados son de la más alta calidad y la atención es inmediata.', rating: 5, helpfulCount: 12 },
  { id: 3, name: 'Carlos Rodríguez', location: 'Monterrey, México', dateLabel: '15 de mayo de 2026', comment: 'Trabajamos con WeProm para nuestra campaña de lanzamiento corporativo y superaron por completo las expectativas de conversión.', rating: 5, helpfulCount: 24 },
  { id: 4, name: 'Ana Martínez', location: 'Guadalajara, México', dateLabel: '2 de mayo de 2026', comment: 'Los mejores en personalización de productos. Rápidos, proactivos y con un control de calidad implacable.', rating: 5, helpfulCount: 9 },
];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS);
  const [activeMainIndex, setActiveMainIndex] = useState<number>(0);

  useEffect(() => {
    getMarketResearchTestimonials().then((data) => {
      if (data && data.length > 0) setTestimonials(data.map(sanityToTestimonial));
    }).catch(() => {});
  }, []);

  const mainReview = testimonials[activeMainIndex] || testimonials[0];
  const sidebarReviews = testimonials;
  const avgRating = testimonials.reduce((sum, r) => sum + r.rating, 0) / testimonials.length;
  const totalHelpful = testimonials.reduce((sum, r) => sum + r.helpfulCount, 0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<Set<string | number>>(new Set());

  const toggleHelpful = (id: string | number) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const goNext = () => setActiveMainIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveMainIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goNext();
    if (distance < -50) goPrev();
  };

  return (
    <section
      className="w-full bg-transparent py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 relative overflow-hidden select-none antialiased"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-12 sm:space-y-16 relative z-10">

        <div className="text-center space-y-3 sm:space-y-4">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide"
            style={{ fontFamily: "'Astonpoliz', sans-serif" }}
          >
            No sólo lo decimos nosotros...
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed px-4">
            Somos una empresa atenta y profesional, y nuestros clientes comparten esa opinión. <br className="hidden sm:inline"/>
            <span className="text-white font-medium">¡Descubre lo que dicen de nosotros!</span>
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-6 w-full max-w-3xl mx-auto">
          <div className="bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-5 xl:p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl xl:text-4xl font-bold text-[#e6af41]">{avgRating.toFixed(1)}</span>
              <div className="flex text-[#e6af41] text-xs xl:text-sm">
                {'★'.repeat(5)}
              </div>
            </div>
            <span className="text-zinc-500 text-xs font-medium tracking-wide">Calificación promedio</span>
          </div>

          <div className="bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-5 xl:p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md">
            <span className="text-3xl xl:text-4xl font-bold text-[#599ddf]">{testimonials.length}</span>
            <span className="text-zinc-500 text-xs font-medium tracking-wide">Reseñas totales</span>
          </div>

          <div className="bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-5 xl:p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md">
            <span className="text-3xl xl:text-4xl font-bold text-[#80b67d]">{totalHelpful}</span>
            <span className="text-zinc-500 text-xs font-medium tracking-wide">Veces marcado como útil</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 w-full items-stretch">

          <div
            className="lg:col-span-7"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              key={mainReview.id}
              className="testimonial-fade bg-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[320px] sm:min-h-[360px] lg:min-h-[380px] transition-all duration-500 hover:border-zinc-700/60 shadow-2xl"
            >

              <div className="absolute top-4 sm:top-6 right-6 sm:right-8 text-[#e6af41] opacity-10 pointer-events-none select-none font-serif text-6xl sm:text-7xl lg:text-8xl leading-none">
                &ldquo;
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-zinc-900 pb-4 sm:pb-5 lg:pb-6 w-full">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                    {mainReview.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg tracking-wide">{mainReview.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex text-[#e6af41] text-[10px] sm:text-xs">
                        {'★'.repeat(mainReview.rating)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="text-zinc-600 text-[10px] sm:text-xs font-medium pr-1">{mainReview.dateLabel}</span>
                </div>
              </div>

              <div className="my-5 sm:my-6 lg:my-8 flex-grow flex items-center">
                <p className="text-zinc-200 text-base sm:text-lg lg:text-xl font-light leading-relaxed italic tracking-wide">
                  {mainReview.comment}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-t border-zinc-900 pt-4 sm:pt-5 lg:pt-6 text-xs sm:text-sm text-zinc-500 font-medium">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{mainReview.location || 'Ubicación remota'}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-zinc-500">
                    A {mainReview.helpfulCount + (likedIds.has(mainReview.id) ? 1 : 0)} personas les pareció útil
                  </span>
                  <button
                    onClick={() => toggleHelpful(mainReview.id)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 transition-all duration-300 ${
                      likedIds.has(mainReview.id)
                        ? 'bg-[#80b67d]/10 border-[#80b67d]/40 text-[#80b67d]'
                        : 'bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill={likedIds.has(mainReview.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>{likedIds.has(mainReview.id) ? 'Útil' : 'Me resulta útil'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Indicadores de carrusel - solo móvil */}
            <div className="flex lg:hidden justify-center items-center gap-1.5 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMainIndex(idx)}
                  aria-label={`Ver testimonio ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeMainIndex ? 'w-6 bg-[#e6af41]' : 'w-1.5 bg-zinc-700'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 bg-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-4 sm:p-5 lg:p-6 flex-col min-h-[320px] sm:min-h-[360px] lg:min-h-[380px] max-h-[440px] sm:max-h-[460px] lg:max-h-[480px]">
            <div className="flex items-center gap-2 pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-zinc-900">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e6af41]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h4 className="text-white font-bold text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase">Más reseñas destacadas</h4>
            </div>

            <div className="flex-grow overflow-y-auto space-y-2 sm:space-y-3 pr-1 custom-scrollbar">
              {sidebarReviews.map((testimonial, index) => {
                const isSelected = index === activeMainIndex;
                return (
                  <div
                    key={testimonial.id}
                    onClick={() => setActiveMainIndex(index)}
                    className={`w-full p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer flex gap-3 sm:gap-4 items-start text-left border ${
                      isSelected
                        ? 'bg-zinc-900/60 border-zinc-700/50 shadow-inner'
                        : 'bg-[#121214]/20 border-transparent hover:bg-zinc-900/30 hover:border-zinc-800/60'
                    }`}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div className="flex-grow space-y-0.5 sm:space-y-1 overflow-hidden">
                      <div className="flex justify-between items-baseline gap-2 w-full">
                        <h5 className="text-white font-semibold text-xs sm:text-sm truncate">{testimonial.name}</h5>
                        <div className="flex text-[#e6af41] text-[8px] sm:text-[10px] flex-shrink-0">
                          {'★'.repeat(testimonial.rating)}
                        </div>
                      </div>
                      <p className="text-zinc-500 text-[10px] sm:text-xs truncate">
                        {testimonial.location || 'Ubicación remota'} <span className="text-zinc-600">·</span> {testimonial.dateLabel}
                      </p>
                      <p className="text-zinc-400 text-[10px] sm:text-xs line-clamp-2 pt-0.5 leading-relaxed font-light">
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .testimonial-fade {
          animation: testimonialFadeIn 0.4s ease-out;
        }
        @keyframes testimonialFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 99px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      `}</style>
    </section>
  );
}

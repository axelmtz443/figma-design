import React, { useRef, useEffect, useState } from 'react';
import googleLogo from '../../../images/google-logo.png';

const reviews = [
  { name: 'Jessica Zamora', tag: 'Cliente verificado en Google', avatar: 'JZ', color: '#c5362e', text: 'Tienen un servicio excelente y son súper amables! Todo es muy profesional, el equipo es muy atento y te acompañan en todo el proceso. ¡Super recomendados!' },
  { name: 'Johana Kamila Gutiérrez', tag: 'Cliente verificado en Google', avatar: 'JG', color: '#599ddf', text: 'Tuve una muy buena experiencia con ellos, ofrecen una amplia variedad de servicios y cuentan con un equipo profesional, excelente agencia.' },
  { name: 'Pérez Lecter', tag: 'Cliente verificado en Google', avatar: 'PL', color: '#e6af41', text: 'El proyecto que hicieron fue muy profesional y a todos nos encantó.' },
  { name: 'Cecilia Hernandez', tag: 'Cliente verificado en Google', avatar: 'CH', color: '#80b67d', text: 'Una empresa increíble y muy creativa!! Siempre los recomiendo, además personas muy humanas, atentas y resilientes.' },
  { name: 'Kevin R.', tag: 'Cliente verificado en Google', avatar: 'KR', color: '#599ddf', text: 'Mi experiencia ha sido excepcional. Altamente estratégicos, dedicados y orientados a resultados.' },
  { name: 'María López', tag: 'Cliente verificado en Google', avatar: 'ML', color: '#c5362e', text: 'Excelente trabajo en todo momento. El equipo siempre dispuesto a dar lo mejor.' },
  { name: 'Carlos Mendez', tag: 'Cliente verificado en Google', avatar: 'CM', color: '#80b67d', text: 'Profesionalismo de primer nivel. Entregaron antes del tiempo estimado y superaron nuestras expectativas.' },
  { name: 'Ana Torres', tag: 'Cliente verificado en Google', avatar: 'AT', color: '#e6af41', text: 'El mejor equipo de producción con el que hemos trabajado. Creatividad y calidad en cada entrega.' },
  { name: 'Roberto Sánchez', tag: 'Cliente verificado en Google', avatar: 'RS', color: '#c5362e', text: 'Increíble la calidad de producción. Cada detalle fue cuidado al máximo. 100% recomendados.' },
  { name: 'Laura Vega', tag: 'Cliente verificado en Google', avatar: 'LV', color: '#599ddf', text: 'Desde el primer contacto hasta la entrega final, todo fue perfecto. Un equipo muy comprometido.' },
];

const row1 = [...reviews.slice(0, 5), ...reviews.slice(0, 5)];
const row2 = [...reviews.slice(5), ...reviews.slice(5)];
const testimonialVideo = 'https://res.cloudinary.com/dodxaehv3/video/upload/v1779631999/tania-garcia_zjzonz.mp4';

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="10" height="10" className="sm:w-[11px] sm:h-[11px]" viewBox="0 0 24 24" fill="#e6af41">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
);

const GoogleIcon = () => (
  <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex flex-col gap-2 flex-shrink-0 w-40 sm:w-44 md:w-48">
    <div className="flex items-center gap-2">
      <div
        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white font-bold text-[8px] sm:text-[10px] flex-shrink-0"
        style={{ backgroundColor: review.color }}
      >
        {review.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-[9px] sm:text-[10px] leading-tight truncate">{review.name}</p>
        <p className="text-white/40 text-[8px] sm:text-[9px] truncate">{review.tag}</p>
      </div>
      <GoogleIcon />
    </div>
    <p className="text-white/60 text-[9px] sm:text-[10px] leading-relaxed line-clamp-3">{review.text}</p>
    <StarRating />
  </div>
);

const InfiniteRow = ({ reviews, direction }: { reviews: typeof row1; direction: 'left' | 'right' }) => (
  <div className="relative overflow-hidden">
    <div className="absolute top-0 left-0 w-8 sm:w-12 md:w-16 h-full z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
    <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 h-full z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to left, #000, transparent)' }} />

    <div
      className="flex gap-2 sm:gap-3 py-1"
      style={{
        animation: `scroll-${direction} 25s linear infinite`,
        width: 'max-content',
        height: '230px sm:h-250 md:h-270px',
      }}
    >
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>

    <style>{`
      @keyframes scroll-left {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes scroll-right {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
    `}</style>
  </div>
);

const NuestrosClientes = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { videoRef.current?.play(); setPlaying(true); }
        else { videoRef.current?.pause(); setPlaying(false); }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  return (
    <section ref={sectionRef} className="w-full bg-transparent py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-montserrat text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-aston tracking-tight mb-3 sm:mb-4">
            Nuestros clientes hablan por nosotros
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
            Ayudamos a Empresas y Marcas de cualquier sector a generar un posicionamiento de alto impacto a través de producción profesional.
          </p>
        </div>

        {/* Layout: video izquierda + carruseles derecha */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-[5rem] items-stretch">

          {/* Video - Responsive */}
          <div className="w-full lg:w-[280px] xl:w-[350px] flex-shrink-0">
            <div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group h-full"
              style={{ aspectRatio: '9/16', minHeight: 250 }}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src={testimonialVideo}
                className="w-full h-full object-cover"
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-300" />
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  {playing ? (
                    <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="white">
                      <rect x="5" y="3" width="4" height="18" rx="1" />
                      <rect x="15" y="3" width="4" height="18" rx="1" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}>
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Carruseles + rating */}
          <div className="flex-1 flex flex-col justify-between gap-3 sm:gap-4 overflow-hidden">

            {/* Fila 1 → izquierda */}
            <InfiniteRow reviews={row1} direction="left" />

            {/* Fila 2 → derecha */}
            <InfiniteRow reviews={row2} direction="right" />

            {/* Rating Google - Responsive */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 mt-auto flex-wrap sm:flex-nowrap">
              <div className="p-2 sm:p-[10px] bg-white rounded-xl sm:rounded-2xl shadow-xl flex-shrink-0">
                <img src={googleLogo} className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-[10px]" alt="Google" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-white font-bold text-xs sm:text-sm truncate">Puntuación de 4.9 estrellas</p>
                <p className="text-white/80 text-[10px] sm:text-xs truncate">Basado en 49 opiniones verificadas</p>
              </div>
              <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="#e6af41">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default NuestrosClientes;
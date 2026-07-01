import { useState, useEffect } from 'react';
import Reviews from '../General/Reviews';

const VIDEO_TESTIMONIALS = [
  { id: 1, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774196364/video1_vcadzb.mp4' },
  { id: 2, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774278806/video2_sbik0h.mp4' },
  { id: 3, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774278872/video3_gjvblb.mp4' },
  { id: 4, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774282181/video4_en08t2.mp4' },
  { id: 5, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774284093/video5_ssw8th.mp4' },
];

function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (activeVideo) return;
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % VIDEO_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeVideo]);

  return (
    <section className="w-full py-10 sm:py-16 md:py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">

        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-aston text-white leading-tight mb-4 text-[32px] sm:text-[44px] lg:text-[64px]">
            No sólo lo decimos nosotros...
          </h2>
          <p className="font-montserrat text-white/60 text-[14px] sm:text-[18px] max-w-3xl mx-auto">
            Somos una empresa atenta y profesional, y nuestros clientes comparten
            esa opinión. ¡Descubre lo que dicen de nosotros!
          </p>
        </div>

        {/* Layout: video izquierda + reseñas derecha */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-stretch">

          {/* LADO IZQUIERDO: Video Reel */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-24 z-30 group/reel">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-[9/16] max-h-[360px] sm:max-h-[500px] lg:max-h-[700px] mx-auto lg:mx-0 shadow-2xl transition-all duration-700">

              {VIDEO_TESTIMONIALS.map((video, index) => (
                <video
                  key={video.id}
                  src={video.url}
                  autoPlay
                  muted={index === currentVideoIndex ? isMuted : true}
                  loop
                  playsInline
                  preload="auto"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    index === currentVideoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                  style={{ filter: 'brightness(0.8)'}}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

              {/* Botón Mute/Unmute */}
              <div className="absolute top-6 right-6 z-30">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                  className="w-10 h-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95 mt-4"
                >
                  {isMuted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Indicadores de progreso */}
              <div className="absolute top-6 left-6 right-6 z-20 flex gap-2">
                {VIDEO_TESTIMONIALS.map((_, index) => (
                  <div key={`track-${index}`} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-md">
                    <div
                      key={`progress-${index}-${index === currentVideoIndex}`}
                      className={`h-full bg-gradient-to-r from-blue-500 to-white ${
                        index === currentVideoIndex ? 'animate-progress-fill' : index < currentVideoIndex ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Botón Central Play */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button
                  onClick={() => setActiveVideo(VIDEO_TESTIMONIALS[currentVideoIndex].url)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-white group"
                >
                  <svg className="w-8 h-8 text-white group-hover:text-black transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Texto Informativo */}
              <div className="absolute bottom-4 sm:bottom-10 left-5 sm:left-8 right-5 sm:right-8 z-20">
                <div className="flex items-center gap-2 mb-1.5 sm:mb-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white/70 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-montserrat">EN DIRECTO: TESTIMONIOS</span>
                </div>
                <h3 className="text-white font-montserrat font-bold text-base sm:text-2xl leading-tight">
                  Nuestros clientes <br/> <span className="text-soft-gray font-light italic">hablan por nosotros.</span>
                </h3>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Reseñas sin header (Reviews lo maneja) */}
          <div className="w-full lg:w-[58%] flex flex-col">
            <div className="hidden lg:block">
              <Reviews category="Home" title="" subtitle="" />
            </div>
            <div className="lg:hidden">
              <Reviews category="Home" />
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .animate-progress-fill {
          animation: fill 5s linear forwards;
        }

        @keyframes fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity"
            onClick={() => setActiveVideo(null)}
          />
          <div className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={activeVideo}
              autoPlay
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

    </section>
  );
}

export default TestimonialsSection;

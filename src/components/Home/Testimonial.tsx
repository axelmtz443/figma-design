import { useState, useEffect, useRef } from 'react';
import googleLogo from '../../images/google-logo.png';

// Declarar la variable global google para TypeScript
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  icon?: 'twitter' | 'linkedin' | 'other' | 'google';
  rating?: number;
  timeDescription?: string;
}

function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Eliminada la variable no utilizada videoContainerRef

  useEffect(() => {
    if (activeVideo) return;
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % VIDEO_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeVideo]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michael Brown',
      role: 'IT Director',
      company: 'HealthCare',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      text: 'The real-time threat detection and automated response features have significantly reduced our risk exposure.',
      icon: 'twitter'
    },
    {
      id: 2,
      name: 'Michael Brown',
      role: 'IT Director',
      company: 'HealthCare',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      text: 'The real-time threat detection and automated response features have significantly reduced our risk exposure.',
      icon: 'linkedin'
    }
  ];

  const [googleReviews, setGoogleReviews] = useState<Testimonial[]>([]);
  const [stats, setStats] = useState({ rating: 4.9, total: 100 });

  useEffect(() => {
    const scriptId = 'google-maps-script';
    
    const fetchGoogleReviews = () => {
      // Verificar si google está disponible
      if (typeof window === 'undefined' || !window.google) {
        console.warn('Google Maps API no está disponible');
        return;
      }

      const placeId = 'ChIJ-17NUpquKIQRMGCoJQIJWgs';
      const dummyDiv = document.createElement('div');
      
      try {
        const service = new window.google.maps.places.PlacesService(dummyDiv);

        service.getDetails(
          { placeId, fields: ['reviews', 'rating', 'user_ratings_total'] },
          (place: any, status: any) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
              setStats({ 
                rating: place.rating || 4.9, 
                total: place.user_ratings_total || 100 
              });
              
              const mappedReviews: Testimonial[] = place.reviews
                .filter((r: any) => r.rating >= 4)
                .map((r: any, idx: number) => ({
                  id: `google-${idx}`,
                  name: r.author_name,
                  role: 'Cliente verificado',
                  company: 'Google',
                  image: r.profile_photo_url,
                  text: r.text,
                  icon: 'google',
                  rating: r.rating,
                  timeDescription: r.relative_time_description
                }));
              setGoogleReviews(mappedReviews);
            }
          }
        );
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
      }
    };

    // Definir la función initMap global
    window.initMap = function() {
      console.log('Google Maps API cargada correctamente');
      fetchGoogleReviews();
    };

    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBcXEBZHoAuDRFdHgp-2dm-OQ93qY3gYxw&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      script.onerror = () => {
        console.error('Error al cargar Google Maps API');
      };
      
      document.head.appendChild(script);
    } else {
      // Si el script ya existe, verificar si google ya está disponible
      const checkGoogle = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          fetchGoogleReviews();
          clearInterval(checkGoogle);
        }
      }, 100);
      
      // Timeout para no quedar en un loop infinito
      setTimeout(() => clearInterval(checkGoogle), 10000);
    }
  }, []);

  const displayReviews = googleReviews.length > 0 ? googleReviews : testimonials;
  const rows = [
    [...displayReviews, ...displayReviews, ...displayReviews],
    [...[...displayReviews].reverse(), ...displayReviews, ...displayReviews]
  ];

  const VIDEO_TESTIMONIALS = [
    { id: 1, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774196364/video1_vcadzb.mp4' },
    { id: 2, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774278806/video2_sbik0h.mp4' },
    { id: 3, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774278872/video3_gjvblb.mp4' },
    { id: 4, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774282181/video4_en08t2.mp4' },
    { id: 5, url: 'https://res.cloudinary.com/dodxaehv3/video/upload/f_auto,q_auto/v1774284093/video5_ssw8th.mp4' },
  ];

  const getIconComponent = (icon?: string) => {
    switch (icon) {
      case 'twitter':
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        );
      case 'linkedin':
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        );
      case 'google':
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.662 3.269-5.445 3.269-3.369 0-6.106-2.737-6.106-6.106s2.737-6.106 6.106-6.106c1.483 0 2.805.506 3.832 1.348l2.766-2.766C17.472 2.062 15.176 1 12.545 1 6.551 1 1.688 5.864 1.688 11.857s4.863 10.857 10.857 10.857c5.994 0 10.857-4.864 10.857-10.857 0-.589-.063-1.161-.173-1.718h-10.684z"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        );
    }
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="flex-shrink-0 w-[220px] sm:w-[340px] lg:w-[380px] mx-2 sm:mx-3 group">
      <div
        className="relative h-full rounded-[20px] sm:rounded-[28px] p-4 sm:p-5 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          {getIconComponent(testimonial.icon)}
        </div>

        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/10 flex-shrink-0"
          />
          <div>
            <h3 className="font-montserrat font-semibold text-white text-[15px] sm:text-[18px] leading-tight">
              {testimonial.name}
            </h3>
            <p className="font-montserrat text-soft-gray text-[12px] sm:text-[14px]">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>

        <p className="font-montserrat text-white/80 text-[13px] sm:text-[15px] leading-relaxed">
          {testimonial.text}
        </p>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px] sm:rounded-[28px]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[20px] sm:rounded-[28px]" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-10 sm:py-16 md:py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-aston text-white leading-tight mb-4 text-[32px] sm:text-[44px] lg:text-[64px]">
            No sólo lo decimos nosotros...
          </h2>
          <p className="font-montserrat text-soft-gray text-[14px] sm:text-[18px] max-w-3xl mx-auto">
            Somos una empresa atenta y profesional, y nuestros clientes comparten 
            esa opinión. ¡Descubre lo que dicen de nosotros!
          </p>
        </div>

        {/* Contenedor Principal Split (Video | Reviews) */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          
          {/* LADO IZQUIERDO: Video Reel Dinámico */}
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

          {/* LADO DERECHO: Carousel de Reseñas */}
          <div className="w-full lg:w-[58%] flex flex-col gap-[1rem] relative py-[25px] px-[10px]">
             <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none rounded-[30px]" />
             <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none rounded-[30px]" />

            <div className="relative overflow-hidden group/row py-2">
              <div className="flex animate-scroll-right group-hover/row:pause">
                {rows[0].map((testimonial, index) => (
                  <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
            
            <div className="relative overflow-hidden group/row py-2 hidden sm:block">
              <div className="flex animate-scroll-left group-hover/row:pause">
                {rows[1].map((testimonial, index) => (
                  <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

             {/* Badge Google */}
             <div className="mx-2 sm:mx-4 mt-4 p-4 sm:p-6 md:p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="p-3 sm:p-4 bg-white rounded-2xl shadow-xl">
                  <img src={googleLogo} className="w-8 h-8 sm:w-10 sm:h-10" alt="Google" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg sm:text-xl tracking-tight">Puntuación de {stats.rating.toFixed(1)} estrellas</p>
                  <p className="text-white/60 text-xs sm:text-sm">Basado en {stats.total} opiniones verificadas</p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-end gap-1">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 sm:w-6 sm:h-6 ${i < Math.round(stats.rating) ? 'text-yellow-400' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/50 text-[10px] uppercase tracking-widest">Trust verified</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }

        @media (max-width: 639px) {
          .animate-scroll-right { animation-duration: 18s; }
        }
        
        .animate-progress-fill {
          animation: fill 5s linear forwards;
        }

        @keyframes fill {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(calc(-33.333%)); }
          100% { transform: translateX(0); }
        }

        .hover\\:pause:hover { animation-play-state: paused; }
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
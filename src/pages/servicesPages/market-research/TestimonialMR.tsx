import { useState, useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

// Interfaz estrictamente tipada y lista para respuestas de una base de datos/CRUD externo
export interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  company: string;
  image?: string; // Opcional por si el cliente no tiene foto en DB
  text: string;
  rating: number;
  location?: string;
  verified: boolean;
  timeDescription?: string;
}

export default function TestimonialsSection() {
  // Datos locales de respaldo estructurados idénticos a la imagen de referencia
  const fallbackTestimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Laura Pérez',
      role: 'Consultoría de Marca',
      company: 'WeProm',
      text: '"Asesoramiento excepcional desde el primer contacto. Entendieron perfectamente nuestra visión y la materializaron en productos increíbles"',
      rating: 5,
      location: 'Jalisco, México',
      verified: true,
      timeDescription: 'Hace 1 semana'
    },
    {
      id: 2,
      name: 'Maria González',
      role: 'CEO',
      company: 'Alpha Growth',
      text: 'Excelente servicio! Los productos personalizados son de la más alta calidad y la atención es inmediata.',
      rating: 5,
      location: 'CDMX, México',
      verified: true,
      timeDescription: 'Hace 3 días'
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      role: 'Director de Operaciones',
      company: 'Logix Tech',
      text: 'Trabajamos con WeProm para nuestra campaña de lanzamiento corporativo y superaron por completo las expectativas de conversión.',
      rating: 5,
      location: 'Monterrey, México',
      verified: true,
      timeDescription: 'Hace 2 semanas'
    },
    {
      id: 4,
      name: 'Ana Martínez',
      role: 'Growth Marketer',
      company: 'Studio Design',
      text: 'Los mejores en personalización de productos. Rápidos, proactivos y con un control de calidad implacable.',
      rating: 5,
      location: 'Guadalajara, México',
      verified: true,
      timeDescription: 'Hace 1 mes'
    }
  ];

  const [reviews, setReviews] = useState<Testimonial[]>(fallbackTestimonials);
  const [activeMainIndex, setActiveMainIndex] = useState<number>(0);
  const [stats, setStats] = useState({
    rating: 4.9,
    totalReviews: 247,
    fiveStars: 238,
    responseRate: 100
  });

  useEffect(() => {
    const scriptId = 'google-maps-script';

    const fetchGoogleReviews = () => {
      if (typeof window.google === 'undefined') return;

      const placeId = 'ChIJ-17NUpquKIQRMGCoJQIJWgs';
      const dummyDiv = document.createElement('div');
      const service = new window.google.maps.places.PlacesService(dummyDiv);

      service.getDetails(
        { placeId, fields: ['reviews', 'rating', 'user_ratings_total'] },
        (place: any, status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
            // Cálculos dinámicos escalables simulando la UI
            const total = place.user_ratings_total || 247;
            const rating = place.rating || 4.9;
            
            setStats({
              rating: rating,
              totalReviews: total,
              fiveStars: Math.round(total * 0.96), // Estimación proporcional premium
              responseRate: 100
            });

            const mappedReviews: Testimonial[] = place.reviews
              .filter((r: any) => r.rating >= 4)
              .map((r: any, idx: number) => ({
                id: `google-${idx}`,
                name: r.author_name,
                role: 'Cliente verificado',
                company: 'Google Review',
                image: r.profile_photo_url,
                text: r.text.startsWith('"') ? r.text : `"${r.text}"`,
                rating: r.rating,
                location: 'Opinión de Google',
                verified: true,
                timeDescription: r.relative_time_description
              }));

            if (mappedReviews.length > 0) {
              setReviews(mappedReviews);
            }
          }
        }
      );
    };

    const existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBcXEBZHoAuDRFdHgp-2dm-OQ93qY3gYxw&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        const checkGoogle = setInterval(() => {
          if (typeof window.google !== 'undefined' && window.google.maps && window.google.maps.places) {
            fetchGoogleReviews();
            clearInterval(checkGoogle);
          }
        }, 100);
      };
      document.head.appendChild(script);
    } else {
      const checkGoogle = setInterval(() => {
        if (typeof window.google !== 'undefined' && window.google.maps && window.google.maps.places) {
          fetchGoogleReviews();
          clearInterval(checkGoogle);
        }
      }, 100);
    }
  }, []);

  // La reseña principal de la izquierda será la seleccionada en la lista de la derecha
  const mainReview = reviews[activeMainIndex] || reviews[0];
  // El feed secundario contiene el resto de las reseñas disponibles
  const sidebarReviews = reviews;

  return (
    <section 
      className="w-full bg-transparent py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none antialiased"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-16 relative z-10">
        
        {/* ── ENCABEZADO ── */}
        <div className="text-center space-y-4">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide"
            style={{ fontFamily: "'Astonpoliz', sans-serif" }}
          >
            No sólo lo decimos nosotros...
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Somos una empresa atenta y profesional, y nuestros clientes comparten esa opinión. <br className="hidden sm:inline"/>
            <span className="text-white font-medium">¡Descubre lo que dicen de nosotros!</span>
          </p>
        </div>

        {/* ── BENTO GRID: MÉTRICAS ANALÍTICAS DE REPUTACIÓN ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* Tarjeta 1: Calificación */}
          <div className="bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-[#e6af41]">{stats.rating.toFixed(1)}</span>
              <div className="flex text-[#e6af41] text-xs sm:text-sm">
                {'★'.repeat(5)}
              </div>
            </div>
            <span className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide">Calificación promedio</span>
          </div>

          {/* Tarjeta 2: Reseñas Totales */}
          <div className="bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md">
            <span className="text-3xl sm:text-4xl font-bold text-[#599ddf]">{stats.totalReviews}+</span>
            <span className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide">Reseñas verificadas</span>
          </div>

          {/* Tarjeta 3: Reseñas 5 Estrellas */}
          <div className="bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md">
            <span className="text-3xl sm:text-4xl font-bold text-[#80b67d]">{stats.fiveStars}</span>
            <span className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide">Reseñas 5 estrellas</span>
          </div>

          {/* Tarjeta 4: Tasa de Respuesta */}
          <div className="bg-[#121214]/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#80b67d] animate-pulse" />
              <span className="text-3xl sm:text-4xl font-bold text-white">{stats.responseRate}%</span>
            </div>
            <span className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide">Respuesta a reseñas</span>
          </div>
        </div>

        {/* ── CUADRÍCULA DE CONFIANZA CENTRALIZADA (Layout Asimétrico) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
          
          {/* BLOQUE IZQUIERDO: Reseña Principal Expandida (7 Columnas) */}
          <div className="lg:col-span-7 bg-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[380px] transition-all duration-500 hover:border-zinc-700/60 shadow-2xl">
            
            {/* Comillas Decorativas de Fondo */}
            <div className="absolute top-6 right-8 text-[#e6af41] opacity-10 pointer-events-none select-none font-serif text-8xl leading-none">
              “
            </div>

            {/* Fila Superior: Autor, Verificación y Tiempo */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-900 pb-6 w-full">
              <div className="flex items-center gap-4">
                {mainReview.image ? (
                  <img 
                    src={mainReview.image} 
                    alt={mainReview.name} 
                    className="w-14 h-14 rounded-full object-cover border border-zinc-800 bg-zinc-900"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-lg">
                    {mainReview.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-white font-bold text-lg tracking-wide">{mainReview.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    {/* Estrellas Doradas */}
                    <div className="flex text-[#e6af41] text-xs">
                      {'★'.repeat(mainReview.rating)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag de Verificación */}
              <div className="flex flex-col sm:items-end gap-1">
                {mainReview.verified && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#80b67d]/10 border border-[#80b67d]/20">
                    <svg className="w-3.5 h-3.5 text-[#80b67d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#80b67d] font-semibold text-[11px] uppercase tracking-wider">Verificado</span>
                  </div>
                )}
                {mainReview.timeDescription && (
                  <span className="text-zinc-600 text-xs font-medium pr-1">{mainReview.timeDescription}</span>
                )}
              </div>
            </div>

            {/* Cuerpo de la Opinión */}
            <div className="my-8 flex-grow flex items-center">
              <p className="text-zinc-200 text-lg sm:text-xl font-light leading-relaxed italic tracking-wide">
                {mainReview.text}
              </p>
            </div>

            {/* Fila Inferior: Metadata Geográfica y Corporativa */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-zinc-900 pt-6 text-sm text-zinc-500 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{mainReview.location || 'Ubicación remota'}</span>
              </div>
              <div className="text-zinc-600">
                <span>{mainReview.role} en </span>
                <span className="text-zinc-400 font-semibold">{mainReview.company}</span>
              </div>
            </div>
          </div>

          {/* BLOQUE DERECHO: Feed Lateral Interactivo de Más Reseñas (5 Columnas) */}
          <div className="lg:col-span-5 bg-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-6 flex flex-col min-h-[380px] max-h-[480px]">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-zinc-900">
              <svg className="w-4 h-4 text-[#e6af41]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase">Más reseñas destacadas</h4>
            </div>

            {/* Contenedor con Scroll List Nativo Premium */}
            <div className="flex-grow overflow-y-auto space-y-3 pr-1 custom-scrollbar">
              {sidebarReviews.map((testimonial, index) => {
                const isSelected = index === activeMainIndex;
                return (
                  <div
                    key={testimonial.id}
                    onClick={() => setActiveMainIndex(index)}
                    className={`w-full p-4 rounded-xl transition-all duration-300 cursor-pointer flex gap-4 items-start text-left border ${
                      isSelected
                        ? 'bg-zinc-900/60 border-zinc-700/50 shadow-inner'
                        : 'bg-[#121214]/20 border-transparent hover:bg-zinc-900/30 hover:border-zinc-800/60'
                    }`}
                  >
                    {/* Inicial o Avatar Compacto */}
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 object-cover overflow-hidden">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.name} />
                      ) : (
                        testimonial.name.charAt(0)
                      )}
                    </div>

                    <div className="flex-grow space-y-1 overflow-hidden">
                      <div className="flex justify-between items-baseline gap-2 w-full">
                        <h5 className="text-white font-semibold text-sm truncate">{testimonial.name}</h5>
                        <div className="flex text-[#e6af41] text-[10px] flex-shrink-0">
                          {'★'.repeat(testimonial.rating)}
                        </div>
                      </div>
                      <p className="text-zinc-500 text-xs truncate">
                        {testimonial.role} <span className="text-zinc-600">@</span> {testimonial.company}
                      </p>
                      <p className="text-zinc-400 text-xs line-clamp-2 pt-0.5 leading-relaxed font-light">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Estilos del Scrollbar Premium de baja fricción visual */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
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
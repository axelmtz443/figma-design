import { useState, useEffect } from 'react';

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
      if (typeof window.google === 'undefined') return;

      const placeId = 'ChIJ-17NUpquKIQRMGCoJQIJWgs';
      const dummyDiv = document.createElement('div');

      const service = new window.google.maps.places.PlacesService(dummyDiv);

      service.getDetails({ placeId, fields: ['reviews', 'rating', 'user_ratings_total'] }, (place: any, status: any) => {
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
              icon: 'google' as const,
              rating: r.rating,
              timeDescription: r.relative_time_description
            }));
          setGoogleReviews(mappedReviews);
        }
      });
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

  const displayReviews = googleReviews.length > 0 ? googleReviews : testimonials;
  const rows = [
    [...displayReviews, ...displayReviews, ...displayReviews],
    [...[...displayReviews].reverse(), ...displayReviews, ...displayReviews]
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
              <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.662 3.269-5.445 3.269-3.369 0-6.106-2.737-6.106-6.106s2.737-6.106 6.106-6.106c1.483 0 2.805.506 3.832 1.348l2.766-2.766C17.472 2.062 15.176 1 12.545 1 6.551 1 1.688 5.864 1.688 11.857s4.863 10.857 10.857 10.857c5.994 0 10.857-4.864 10.857-10.857 0-.589-.063-1.161-.173-1.718h-10.684z" />
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
    <div className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] mx-2 sm:mx-3 group">
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
            <p className="font-montserrat text-white/50 text-[12px] sm:text-[14px]">
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
    <section className="w-full py-14 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-aston text-white leading-tight mb-4 text-[32px] sm:text-[44px] lg:text-[64px]">
            No sólo lo decimos nosotros...
          </h2>
          <p className="font-montserrat text-white text-[17px] sm:text-[25px] max-w-5xl mx-auto">
            Somos una empresa atenta y profesional, y nuestros clientes comparten
            esa opinión. ¡Descubre lo que dicen de nosotros!
          </p>
        </div>

        {/* Carousel full width */}
        <div className="flex flex-col gap-4 relative py-6">

          {/* Sombras laterales */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          {/* Fila 1 — izquierda */}
          <div className="relative overflow-hidden group/row py-2">
            <div className="flex animate-scroll-right group-hover/row:pause">
              {rows[0].map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Fila 2 — derecha */}
          <div className="relative overflow-hidden group/row py-2">
            <div className="flex animate-scroll-left group-hover/row:pause">
              {rows[1].map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Badge Google */}
        <div className="mt-8 mx-4 p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-white rounded-2xl shadow-xl">
              <img src="https://images.seeklogo.com/logo-png/62/1/google-new-logo-png_seeklogo-622426.png" className="w-10 h-10" alt="Google" />
            </div>
            <div>
              <p className="text-white font-bold text-xl tracking-tight">Puntuación de {stats.rating.toFixed(1)} estrellas</p>
              <p className="text-white/60 text-sm">Basado en {stats.total} opiniones verificadas</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-6 h-6 ${i < Math.round(stats.rating) ? 'text-yellow-400' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/50 text-[10px] uppercase tracking-widest">Trust verified</span>
          </div>
        </div>

      </div>

      <style>{`
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .animate-scroll-left  { animation: scroll-left  40s linear infinite; }

        @keyframes scroll-right {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
        @keyframes scroll-left {
          0%   { transform: translateX(calc(-33.333%)); }
          100% { transform: translateX(0); }
        }

        .hover\:pause:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;
import { useRef, useEffect, useState } from 'react';
import Reviews from '../../../components/General/Reviews';

const testimonialVideo = 'https://res.cloudinary.com/dodxaehv3/video/upload/v1779631999/tania-garcia_zjzonz.mp4';

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

        <div className="w-full max-w-xs mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group"
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

      </div>

      <Reviews
        category="Producción Audiovisual"
        title="Nuestros clientes hablan por nosotros"
        subtitle="Ayudamos a Empresas y Marcas de cualquier sector a generar un posicionamiento de alto impacto a través de producción profesional."
      />
    </section>
  );
};

export default NuestrosClientes;

import React from 'react';
import { useContactPopup } from '../../../context/ContactPopupContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Importación de imágenes
import cocaColaImg from '../../../images/SuccessStoriesCards/cocacola.jpeg';
import fortiaImg from '../../../images/SuccessStoriesCards/fortia-blue.jpeg';
import selloRojoImg from '../../../images/SuccessStoriesCards/sello-rojo.jpeg';
import vitromexImg from '../../../images/SuccessStoriesCards/vitromex-green.jpeg';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SUCCESS_STORIES = [
  { id: 1, name: "Coca-Cola", img: cocaColaImg, color: "#fe001a" },
  { id: 2, name: "Fortuna", img: fortiaImg, color: "#3b82f6" },
  { id: 3, name: "Sello", img: selloRojoImg, color: "#ef4444" },
  { id: 4, name: "Vitromex", img: vitromexImg, color: "#22c55e" },
];

const SuccessStories = () => {
  const { openPopup } = useContactPopup();
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-transparent relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-red-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-aston text-white mb-3 sm:mb-4 tracking-light">
            Casos de Éxito
          </h2>
          <p className="text-white font-montserrat text-base sm:text-lg md:text-xl max-w-3xl mx-auto pt-2 sm:pt-4 px-4">
            Resultados comprobados por marcas y empresas líderes en su sector
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative max-w-5xl mx-auto group">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ 
                clickable: true,
                dynamicBullets: true 
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="pb-16 sm:pb-20 pt-6 sm:pt-10"
          >
            {SUCCESS_STORIES.map((story) => (
              <SwiperSlide key={story.id} className="max-w-[600px] sm:max-w-[700px] md:max-w-[850px] w-[85%] sm:w-[90%] transition-opacity duration-500 [&:not(.swiper-slide-active)]:opacity-40">
                <div className="relative group p-1 sm:p-2">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-90 blur-[12px] sm:blur-[17px] transition-opacity duration-500 -z-10"
                    style={{ backgroundColor: story.color }}
                  />
                  
                  {/* Tarjeta de imagen */}
                  <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img 
                      src={story.img} 
                      alt={story.name} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de Navegación Custom */}
          <button className="swiper-button-prev-custom absolute left-[-10px] sm:left-[-20px] md:left-[-40px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-[-10px] sm:right-[-20px] md:right-[-40px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Botón Final CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openPopup('Consultoría Estratégica')}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-bold rounded-full text-base sm:text-lg hover:bg-zinc-200 transition-colors shadow-xl shadow-white/5"
          >
            Contactar
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
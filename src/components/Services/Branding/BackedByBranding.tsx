import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

import LOGO1 from '../../../images/branding/BrandsCarrusel/CSLOGOROSA.png'
import LOGO2 from '../../../images/branding/BrandsCarrusel/LOGOGRANBRAVOEDITABLE.png'
import LOGO3 from '../../../images/branding/BrandsCarrusel/LogosParaWeb_Mesa de trabajo 1 (1).png'
import LOGO4 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-04.png'
import LOGO5 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-05.png'
import LOGO6 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-06.png'
import LOGO7 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-08.png'
import LOGO8 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-09.png'
import LOGO9 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-12.png'
import LOGO10 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-14.png'
import LOGO11 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-15.png'
import LOGO12 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-16.png'
import LOGO13 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-17.png'
import LOGO14 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-18.png'
import LOGO15 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-19.png'
import LOGO16 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-20.png'
import LOGO17 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-21.png'
import LOGO18 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-22.png'
import LOGO19 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-23.png'
import LOGO20 from '../../../images/branding/BrandsCarrusel/LogosParaWeb-24.png'
import LOGO21 from '../../../images/branding/BrandsCarrusel/LOGOTIPOCOMBAZUL.png'
import LOGO22 from '../../../images/branding/BrandsCarrusel/Mesa de trabajo 1 (2).png'
import LOGO23 from '../../../images/branding/BrandsCarrusel/Mesa de trabajo 1 (3).png'
import LOGO24 from '../../../images/branding/BrandsCarrusel/Mesa de trabajo 2 (2).png'
import LOGO25 from '../../../images/branding/BrandsCarrusel/Mesa de trabajo 2@2x (1).png'
import LOGO26 from '../../../images/branding/BrandsCarrusel/Mesa de trabajo 4.png'
import LOGO27 from '../../../images/branding/BrandsCarrusel/Mesa de trabajo 5 (1).png'
import LOGO28 from '../../../images/branding/BrandsCarrusel/Mesa de trabajo 12.png'






interface Brand {
  src?: string;
  isText?: boolean;
  className?: string;
  sizeClass?: string; // Añadimos esto para controlar tamaños personalizados
}

function BackedByBranding() {
  const brands: Brand[] = [
  { src: LOGO1 },
  { src: LOGO2 },
  { src: LOGO3 },
  { src: LOGO4 },
  { src: LOGO5 },
  { src: LOGO6 },
  { src: LOGO7 },
  { src: LOGO8 },
  { src: LOGO9 },
  { src: LOGO10 },
  { src: LOGO11 },
  { src: LOGO12 },
  { src: LOGO13 },
  { src: LOGO14 },
  { src: LOGO15 },
  { src: LOGO16 },
  { src: LOGO17 },
  { src: LOGO18 },
  { src: LOGO19 },
  { src: LOGO20 },
  { src: LOGO21 },
  { src: LOGO22 },
  { src: LOGO23 },
  { src: LOGO24 },
  { src: LOGO25 },
  { src: LOGO26 },
  { src: LOGO27 },
  { src: LOGO28 },
];


  const allBrands = [...brands, ...brands];

  return (
    <section className="relative w-full pt-10 sm:pt-12 pb-14 sm:pb-4 overflow-hidden bg-transparent group">

      <div className="absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" />
      <div className="absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" />

      <div className="relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10">

        
        <div className="relative flex items-center">
          <button className="prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronLeft size={40} strokeWidth={1} />
          </button>
          <button className="next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronRight size={40} strokeWidth={1} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 3, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="flex items-center"
          >
            {allBrands.map((brand, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center py-4">
                <div className="flex items-center justify-center h-24 sm:h-28 w-full px-4 py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                  {brand.isText ? (
                    <span className={`${brand.className} text-black whitespace-nowrap`}>
                      
                    </span>

                  ) : (
                    <img
                      src={brand.src}
                      className={`w-auto object-contain transition-all ${
                        brand.sizeClass ? brand.sizeClass : 'h-7 sm:h-9 md:h-11'
                      }`}
                    />
                  )}
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
}

export default BackedByBranding;

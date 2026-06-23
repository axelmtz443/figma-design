import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

import Calaverandia from '../../images/Brands/Calaverandia.png'
import Cinepolis from '../../images/Brands/Cinepolis.png'
import GrupoCaliente from '../../images/Brands/Grupo_Caliente_Logo.png'
import GrupoCollins from '../../images/Brands/GRUPOCOLLINS-min (1).png'
import Heineken from '../../images/Brands/Heineken-Logo.png'
import Driscols from '../../images/Brands/LogoDriscolls.png'
import Ford from '../../images/Brands/LogoFord.png'
import HospitalJoya from '../../images/Brands/LogoHospitalJoya.png'
import HospitalSanJavier from '../../images/Brands/LogoHospitalSanJavier.webp'
import Interceramic from '../../images/Brands/logoInterceramic.png'
import Kenworth from '../../images/Brands/LogoKenworth.svg'
import KIA from '../../images/Brands/LogoKIA.webp'
import LogoSelloRojo from '../../images/Brands/logo-sello-rojo.png'
import Macdonalds from '../../images/Brands/MACDONALDS-min.png'
import Marisa from '../../images/Brands/Marisa.png'
import MercedesBenz from '../../images/Brands/mercedes.png'
import Nissan from '../../images/Brands/Nissan.png'
import OReilly from '../../images/Brands/OReilly_Autopartes.png'
import Pepsico from '../../images/Brands/PEPSICO-min.png'
import Televisa from '../../images/Brands/TELEVISA-min.png'
import UDG from '../../images/Brands/UDG-min.png'
import Vitromex from '../../images/Brands/VITROMEX-min.png'
import Volkswagen from '../../images/Brands/Volkswagen_logopng.png'

interface Brand {
  name: string;
  src?: string;
  alt?: string;
  isText?: boolean;
  className?: string;
}

function AboutBackedBy() {
  const brands: Brand[] = [
    { name: 'Cinepolis', src: Cinepolis, alt: 'Cinepolis Logo' },
    { name: 'Calaverandia', src: Calaverandia, alt: 'Calaverandia Logo' },
    { name: 'Grupo Caliente', src: GrupoCaliente, alt: 'Grupo Caliente Logo' },
    { name: 'Grupo Collins', src: GrupoCollins, alt: 'Grupo Collins Logo' },
    { name: 'Heineken', src: Heineken, alt: 'Heineken Logo' },
    { name: "Driscoll's", src: Driscols, alt: "Driscoll's Logo" },
    { name: 'Ford', src: Ford, alt: 'Ford Logo' },
    { name: 'Hospital Joya', src: HospitalJoya, alt: 'Hospital Joya Logo' },
    { name: 'Hospital San Javier', src: HospitalSanJavier, alt: 'Hospital San Javier Logo' },
    { name: 'Interceramic', src: Interceramic, alt: 'Interceramic Logo' },
    { name: 'Kenworth', src: Kenworth, alt: 'Kenworth Logo' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo' },
    { name: 'Sello Rojo', src: LogoSelloRojo, alt: 'Sello Rojo Logo' },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo" },
    { name: 'Marisa', src: Marisa, alt: 'Marisa Logo' },
    { name: 'Mercedes-Benz', src: MercedesBenz, alt: 'Mercedes-Benz Logo' },
    { name: 'Nissan', src: Nissan, alt: 'Nissan Logo' },
    { name: "O'Reilly", src: OReilly, alt: "O'Reilly Autopartes Logo" },
    { name: 'Pepsico', src: Pepsico, alt: 'Pepsico Logo' },
    { name: 'Televisa', src: Televisa, alt: 'Televisa Logo' },
    { name: 'UDG', src: UDG, alt: 'UDG Logo' },
    { name: 'Vitromex', src: Vitromex, alt: 'Vitromex Logo' },
    { name: 'Volkswagen', src: Volkswagen, alt: 'Volkswagen Logo' },
  ];

  const allBrands = [...brands, ...brands];

  return (
    <section className="relative w-full overflow-x-hidden pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 md:pb-20 bg-transparent group">
      {/* Gradientes laterales - más pequeños en mobile */}
      <div className="absolute top-0 left-0 w-12 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" />
      <div className="absolute top-0 right-0 w-12 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" />

      <div className="relative w-full max-w-[1519px] mx-auto px-3 sm:px-8 z-10">
        <p className="font-aston text-[20px] sm:text-[30px] md:text-[42px] tracking-[-0.01em] text-white text-center mb-6 sm:mb-12 md:mb-16">
          Nuestros clientes
        </p>

        <div className="relative flex items-center">
          <button className="prev-btn absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronLeft size={40} strokeWidth={1} />
          </button>

          <button className="next-btn absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
            <ChevronRight size={40} strokeWidth={1} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 30 },
              640: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="flex items-center w-full"
          >
            {allBrands.map((brand, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center py-3 sm:py-4">
                <div className="flex items-center justify-center h-16 sm:h-24 md:h-28 w-full px-3 sm:px-4 py-3 sm:py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                  {brand.isText ? (
                    <span className={`${brand.className} text-white whitespace-nowrap text-sm sm:text-base`}>
                      {brand.name}
                    </span>
                  ) : (
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="h-6 sm:h-10 md:h-14 w-auto object-contain max-w-[120px] sm:max-w-none"
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

export default AboutBackedBy;
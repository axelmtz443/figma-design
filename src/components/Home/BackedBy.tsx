import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

const COLORS = {
  red: '#FF3B30',
  blue: '#007AFF',
  green: '#34C759',
  yellow: '#FF9500',
};

interface Brand {
  name: string;
  src?: string;
  alt?: string;
  isText?: boolean;
  className?: string;
  sizeClass?: string;
}

function BackedBy() {
  const brands: Brand[] = [
    { name: 'Cinepolis', src: Cinepolis, alt: 'Cinepolis Logo' },
    { name: 'Calaverandia', src: Calaverandia, alt: 'Calaverandia Logo', sizeClass: 'h-14 sm:h-16 md:h-18' },
    { name: 'Grupo Caliente', src: GrupoCaliente, alt: 'Grupo Caliente Logo' },
    { name: 'Grupo Collins', src: GrupoCollins, alt: 'Grupo Collins Logo', sizeClass: 'h-12 sm:h-16 md:h-20' },
    { name: 'Heineken', src: Heineken, alt: 'Heineken Logo', sizeClass: 'h-16 sm:h-20 md:h-24' },
    { name: "Driscoll's", src: Driscols, alt: "Driscoll's Logo" },
    { name: 'Ford', src: Ford, alt: 'Ford Logo', sizeClass: 'h-8 sm:h-10 md:h-14' },
    { name: 'Hospital Joya', src: HospitalJoya, alt: 'Hospital Joya Logo', sizeClass: 'h-12 sm:h-16 md:h-18' },
    { name: 'Hospital San Javier', src: HospitalSanJavier, alt: 'Hospital San Javier Logo', sizeClass: 'h-14 sm:h-18 md:h-20' },
    { name: 'Interceramic', src: Interceramic, alt: 'Interceramic Logo' },
    { name: 'Kenworth', src: Kenworth, alt: 'Kenworth Logo' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo', sizeClass: 'h-20 sm:h-24 md:h-28' },
    { name: 'Sello Rojo', src: LogoSelloRojo, alt: 'Sello Rojo Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Marisa', src: Marisa, alt: 'Marisa Logo', sizeClass: 'h-12 sm:h-16 md:h-18' },
    { name: 'Mercedes-Benz', src: MercedesBenz, alt: 'Mercedes-Benz Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Nissan', src: Nissan, alt: 'Nissan Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: "O'Reilly", src: OReilly, alt: "O'Reilly Autopartes Logo", sizeClass: 'h-24 sm:h-28 md:h-32' },
    { name: 'Pepsico', src: Pepsico, alt: 'Pepsico Logo' },
    { name: 'Televisa', src: Televisa, alt: 'Televisa Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'UDG', src: UDG, alt: 'UDG Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Vitromex', src: Vitromex, alt: 'Vitromex Logo' },
    { name: 'Volkswagen', src: Volkswagen, alt: 'Volkswagen Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
  ];

  const stats = [
    { number: '+35', label: 'Años de experiencia', color: COLORS.red },
    { number: '+10,000', label: 'Proyectos Realizados', color: COLORS.blue },
    { number: '+1,000', label: 'Clientes Globales', color: COLORS.green },
    { number: '+3', label: 'Sedes Internacionales', color: COLORS.yellow },
  ];

  const allBrands = [...brands, ...brands];

  return (
    <section className="relative w-full pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 md:pb-4 overflow-hidden bg-transparent group">

      <div className="relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10">

        <p className="font-montserrat font-light text-[18px] sm:text-[24px] md:text-[36px] tracking-[-0.02em] text-white/60 text-center mb-10 sm:mb-16 uppercase">
          Elegidos por las grandes marcas
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
                      {brand.name}
                    </span>
                  ) : (
                    <img
                      src={brand.src}
                      alt={brand.alt}
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

        {/* Estadísticas */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 mt-8 sm:mt-12"
          style={{
            background: 'linear-gradient(135deg, rgba(255,59,48,0.05), rgba(255,149,0,0.05), rgba(0,122,255,0.05))',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group/stat"
              >
                <div
                  className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-2 transition-transform duration-300 group-hover/stat:scale-110"
                  style={{
                    background: `linear-gradient(to bottom, ${stat.color}, ${stat.color}B3)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white/60 font-medium">
                  {stat.label}
                </div>
                <div
                  className="w-12 h-1 mx-auto mt-3 rounded-full transform scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(to right, transparent, ${stat.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default BackedBy;
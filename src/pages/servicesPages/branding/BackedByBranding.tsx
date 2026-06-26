import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/free-mode';

import CASASOK from '../../../images/branding/BrandsCarrusel/CASASOK_BCO.png';
import GRANBRAVO from '../../../images/branding/BrandsCarrusel/GRANBRAVO_BCO.png';
import ULTRANAV from '../../../images/branding/BrandsCarrusel/ULTRANAV_BCO.png';
import PERFECTSTONES from '../../../images/branding/BrandsCarrusel/PERFECTSTONES_BCO.png';
import MAREAPLATA from '../../../images/branding/BrandsCarrusel/MAREAPLATA_BCO.png';
import AGUACALIENTE from '../../../images/branding/BrandsCarrusel/AGUACALIENTE_BCO.png';
import LOUNASH from '../../../images/branding/BrandsCarrusel/LOU&NASH_BCO.png';
import OPALY from '../../../images/branding/BrandsCarrusel/OPALY_BCO.png';
import KOENE from '../../../images/branding/BrandsCarrusel/KOENE_BCO.png';
import BASALTIKA from '../../../images/branding/BrandsCarrusel/BASALTIKA_BCO.png';
import BIDAULT from '../../../images/branding/BrandsCarrusel/BIDAULT_BCO.png';
import BLACKANTFIT from '../../../images/branding/BrandsCarrusel/BLACK-ANT-FIT_BCO.png';
import CANTU from '../../../images/branding/BrandsCarrusel/CANTU_BCO.png';
import RUFFINI from '../../../images/branding/BrandsCarrusel/RUFFINI_BCO.png';
import ALDORA from '../../../images/branding/BrandsCarrusel/ALDORA_BCO.png';
import AJSGREENHOUSES from '../../../images/branding/BrandsCarrusel/AJS-GREENHOUSES_BCO.png';
import KUXTAL from '../../../images/branding/BrandsCarrusel/KUXTAL_BCO.png';
import VAGUAL from '../../../images/branding/BrandsCarrusel/VAGUAL_BCO.png';
import XERYUS from '../../../images/branding/BrandsCarrusel/XERYUS_BCO.png';
import GGPHARMAS from '../../../images/branding/BrandsCarrusel/GG-PHARMAS_BCO.png';
import GRUPOWEPROM from '../../../images/branding/BrandsCarrusel/GRUPO-WEPROM_BCO.png';
import HOMEBOYS from '../../../images/branding/BrandsCarrusel/HOME-BOYS_BCO.png';
import DEYUNPHARMA from '../../../images/branding/BrandsCarrusel/DEYUN-PHARMA_BCO.png';
import GUITRONSANDOVAL from '../../../images/branding/BrandsCarrusel/GÜITRON-SANDOVAL_BCO.png';
import GLOBALMINDSCHOOL from '../../../images/branding/BrandsCarrusel/GLOBAL-MIND-SCHOOL_BCO.png';
import IMPERIUM from '../../../images/branding/BrandsCarrusel/IMPERIUM_BCO.png';
import DOKARAI from '../../../images/branding/BrandsCarrusel/DOKARAI_BCO.png';

const logos = [
  CASASOK, GRANBRAVO, ULTRANAV, PERFECTSTONES, MAREAPLATA,
  AGUACALIENTE, LOUNASH, OPALY, KOENE, BASALTIKA,
  BIDAULT, BLACKANTFIT, CANTU, RUFFINI, ALDORA,
  AJSGREENHOUSES, KUXTAL, VAGUAL, XERYUS, GGPHARMAS,
  GRUPOWEPROM, HOMEBOYS, DEYUNPHARMA, GUITRONSANDOVAL,
  GLOBALMINDSCHOOL, IMPERIUM, DOKARAI,
];

const allLogos = [...logos, ...logos];

function BackedByBranding() {
  return (
    <section
      className="relative w-full py-10 sm:py-14 md:py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000 0%, rgba(0,0,0,0.7) 40%, transparent 100%)',
      }}
    >
      {/* Edge fades */}
      <div className="absolute top-0 left-0 w-10 sm:w-24 md:w-40 lg:w-56 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent" />
      <div className="absolute top-0 right-0 w-10 sm:w-24 md:w-40 lg:w-56 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent" />

      <div className="relative z-10 max-w-[1519px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Título */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-[1px] w-8 sm:w-12 bg-white/20" />
          <h3 className="font-aston text-white/70 text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide text-center leading-snug px-2">
            Algunas marcas que hemos desarrollado
          </h3>
          <div className="h-[1px] w-8 sm:w-12 bg-white/20" />
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={28}
          slidesPerView={2}
          loop={true}
          speed={5000}
          grabCursor={true}
          freeMode={{ enabled: true, momentum: true }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            360:  { slidesPerView: 2,  spaceBetween: 28 },
            480:  { slidesPerView: 3,  spaceBetween: 40 },
            640:  { slidesPerView: 4,  spaceBetween: 48 },
            768:  { slidesPerView: 5,  spaceBetween: 56 },
            1024: { slidesPerView: 6,  spaceBetween: 64 },
            1280: { slidesPerView: 7,  spaceBetween: 72 },
          }}
          className="flex items-center"
        >
          {allLogos.map((src, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center py-2">
              {/* Logo box — scales to fill container while keeping aspect ratio */}
              <div
                className="flex items-center justify-center mx-auto"
                style={{ width: 'clamp(80px, 12vw, 160px)', height: 'clamp(60px, 9vw, 120px)' }}
              >
                <img
                  src={src}
                  alt="Brand Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BackedByBranding;
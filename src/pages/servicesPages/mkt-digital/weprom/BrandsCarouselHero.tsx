import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

import Cinepolis from '../../../../images/Brands/Cinepolis.png';
import GrupoCaliente from '../../../../images/Brands/Grupo_Caliente_Logo.png';
import Heineken from '../../../../images/Brands/Heineken-Logo.png';
import Ford from '../../../../images/Brands/LogoFord.png';
import KIA from '../../../../images/Brands/LogoKIA.webp';
import Macdonalds from '../../../../images/Brands/MACDONALDS-min.png';
import MercedesBenz from '../../../../images/Brands/mercedes.png';
import Nissan from '../../../../images/Brands/Nissan.png';
import Pepsico from '../../../../images/Brands/PEPSICO-min.png';
import Televisa from '../../../../images/Brands/TELEVISA-min.png';
import Volkswagen from '../../../../images/Brands/Volkswagen_logopng.png';

const brands = [
    { name: 'Cinepolis', src: Cinepolis, alt: 'Cinepolis Logo' },
    { name: 'Grupo Caliente', src: GrupoCaliente, alt: 'Grupo Caliente Logo' },
    { name: 'Heineken', src: Heineken, alt: 'Heineken Logo', sizeClass: 'h-16 sm:h-20 md:h-24' },
    { name: 'Ford', src: Ford, alt: 'Ford Logo', sizeClass: 'h-8 sm:h-10 md:h-14' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo', sizeClass: 'h-20 sm:h-24 md:h-28' },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Mercedes-Benz', src: MercedesBenz, alt: 'Mercedes-Benz Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Nissan', src: Nissan, alt: 'Nissan Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Pepsico', src: Pepsico, alt: 'Pepsico Logo' },
    { name: 'Televisa', src: Televisa, alt: 'Televisa Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
    { name: 'Volkswagen', src: Volkswagen, alt: 'Volkswagen Logo', sizeClass: 'h-16 sm:h-18 md:h-20' },
];

const allBrands = [...brands, ...brands];

export default function BrandsCarouselHero() {
    return (
        <section className="relative w-full pt-4 pb-16 flex flex-col items-center justify-center overflow-hidden bg-transparent group font-montserrat select-none">

            {/* Contenedor Carrusel de Marcas */}
            <div className="relative w-full max-w-[1519px] mx-auto px-4 sm:px-8 z-10">
                <div className="absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black via-black/50 to-transparent opacity-80" />

                <div className="relative flex items-center">
                    <button className="prev-brands-hero absolute left-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                        <ChevronLeft size={40} strokeWidth={1} />
                    </button>
                    <button className="next-brands-hero absolute right-0 z-30 p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                        <ChevronRight size={40} strokeWidth={1} />
                    </button>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        speed={4000}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        navigation={{ prevEl: '.prev-brands-hero', nextEl: '.next-brands-hero' }}
                        breakpoints={{
                            480: { slidesPerView: 3, spaceBetween: 40 },
                            640: { slidesPerView: 3, spaceBetween: 50 },
                            1024: { slidesPerView: 5, spaceBetween: 50 },
                        }}
                        className="flex items-center"
                    >
                        {allBrands.map((brand, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center py-4">
                                <div className="flex items-center justify-center h-20 sm:h-24 w-full px-4 py-4 rounded-2xl bg-white border border-white/10 shadow-lg transition-transform duration-500 hover:scale-105">
                                    <img
                                        src={brand.src}
                                        alt={brand.alt}
                                        className={`w-auto object-contain transition-all ${
                                            brand.sizeClass ? brand.sizeClass : 'h-7 sm:h-9 md:h-11'
                                        }`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

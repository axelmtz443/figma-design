import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

import Cinepolis from '../../../images/Brands/Cinepolis.png';
import GrupoCaliente from '../../../images/Brands/Grupo_Caliente_Logo.png';
import Heineken from '../../../images/Brands/Heineken-Logo.png';
import Ford from '../../../images/Brands/LogoFord.png';
import KIA from '../../../images/Brands/LogoKIA.webp';
import Macdonalds from '../../../images/Brands/MACDONALDS-min.png';
import MercedesBenz from '../../../images/Brands/mercedes.png';
import Nissan from '../../../images/Brands/Nissan.png';
import Pepsico from '../../../images/Brands/PEPSICO-min.png';
import Televisa from '../../../images/Brands/TELEVISA-min.png';
import Volkswagen from '../../../images/Brands/Volkswagen_logopng.png';

const brands = [
    { name: 'Cinepolis', src: Cinepolis, alt: 'Cinepolis Logo' },
    { name: 'Grupo Caliente', src: GrupoCaliente, alt: 'Grupo Caliente Logo' },
    { name: 'Heineken', src: Heineken, alt: 'Heineken Logo', sizeClass: 'h-12 sm:h-16 md:h-20 lg:h-24' },
    { name: 'Ford', src: Ford, alt: 'Ford Logo', sizeClass: 'h-6 sm:h-8 md:h-10 lg:h-14' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo', sizeClass: 'h-16 sm:h-20 md:h-24 lg:h-28' },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
    { name: 'Mercedes-Benz', src: MercedesBenz, alt: 'Mercedes-Benz Logo', sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
    { name: 'Nissan', src: Nissan, alt: 'Nissan Logo', sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
    { name: 'Pepsico', src: Pepsico, alt: 'Pepsico Logo' },
    { name: 'Televisa', src: Televisa, alt: 'Televisa Logo', sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
    { name: 'Volkswagen', src: Volkswagen, alt: 'Volkswagen Logo', sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
];

const allBrands = [...brands, ...brands];

export default function TwoSectionBrands() {
    return (
        <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-transparent group font-montserrat select-none">
            
            <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                <h1 className="font-aston text-3xl sm:text-4xl md:text-5xl font-medium text-white mt-2 px-4">
                    Algunos de nuestros clientes
                </h1>
            </div>

            <div className="relative w-full max-w-[1519px] mx-auto px-3 sm:px-4 lg:px-8 z-10">
                <div className="absolute top-0 left-0 w-12 sm:w-20 md:w-32 lg:w-48 xl:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute top-0 right-0 w-12 sm:w-20 md:w-32 lg:w-48 xl:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black via-black/50 to-transparent opacity-80" />

                <div className="relative flex items-center">
                    <button className="prev-brands absolute left-0 z-30 p-1 sm:p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                        <ChevronLeft size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={1} />
                    </button>
                    <button className="next-brands absolute right-0 z-30 p-1 sm:p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                        <ChevronRight size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={1} />
                    </button>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        speed={4000}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        navigation={{ prevEl: '.prev-brands', nextEl: '.next-brands' }}
                        breakpoints={{
                            480: { slidesPerView: 3, spaceBetween: 25 },
                            640: { slidesPerView: 3, spaceBetween: 30 },
                            768: { slidesPerView: 4, spaceBetween: 35 },
                            1024: { slidesPerView: 5, spaceBetween: 40 },
                            1280: { slidesPerView: 6, spaceBetween: 45 },
                        }}
                        className="flex items-center"
                    >
                        {allBrands.map((brand, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center py-2 sm:py-3 lg:py-4">
                                <div className="flex items-center justify-center h-16 sm:h-20 lg:h-24 w-full px-3 sm:px-4 py-3 sm:py-4 rounded-2xl bg-white border border-white/10 shadow-lg transition-transform duration-500 hover:scale-105">
                                    <img
                                        src={brand.src}
                                        alt={brand.alt}
                                        className={`w-auto object-contain transition-all ${
                                            brand.sizeClass ? brand.sizeClass : 'h-5 sm:h-7 md:h-9 lg:h-11'
                                        }`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="mt-12 sm:mt-14 lg:mt-16 z-20">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-3.5 bg-[#22252a] hover:bg-[#2d3138] text-white/90 hover:text-white border border-white/10 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]">
                    Casos de éxito
                </button>
            </div>
            
        </section>
    );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar } from 'lucide-react';

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

const heroBg = 'https://res.cloudinary.com/dexcrnwcu/video/upload/v1776655936/Mercedes_Benz_EQC_zzprl2.mp4';

const brands = [
    { name: 'Cinepolis', src: Cinepolis, alt: 'Cinepolis Logo' },
    { name: 'Grupo Caliente', src: GrupoCaliente, alt: 'Grupo Caliente Logo' },
    { name: 'Heineken', src: Heineken, alt: 'Heineken Logo', sizeClass: 'h-12 sm:h-16 md:h-20 lg:h-24' },
    { name: 'Ford', src: Ford, alt: 'Ford Logo', sizeClass: 'h-6 sm:h-8 md:h-10 lg:h-14' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo', sizeClass: 'h-14 sm:h-20 md:h-24 lg:h-28' },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: 'h-12 sm:h-14 md:h-16 lg:h-20' },
    { name: 'Mercedes-Benz', src: MercedesBenz, alt: 'Mercedes-Benz Logo', sizeClass: 'h-12 sm:h-14 md:h-16 lg:h-20' },
    { name: 'Nissan', src: Nissan, alt: 'Nissan Logo', sizeClass: 'h-12 sm:h-14 md:h-16 lg:h-20' },
    { name: 'Pepsico', src: Pepsico, alt: 'Pepsico Logo' },
    { name: 'Televisa', src: Televisa, alt: 'Televisa Logo', sizeClass: 'h-12 sm:h-14 md:h-16 lg:h-20' },
    { name: 'Volkswagen', src: Volkswagen, alt: 'Volkswagen Logo', sizeClass: 'h-12 sm:h-14 md:h-16 lg:h-20' },
];

const allBrands = [...brands, ...brands];

const AudiovisualHero = () => {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={heroBg}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ opacity: 0.35 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />

                <div className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-20 max-w-5xl w-full">
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="font-aston font-extrabold tracking-wide leading-[1.05] text-white"
                        style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}
                    >
                        Producciones
                        <br />
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #ba3f35, #5fa1cf, #7eb387, #e5ad43)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Audiovisuales
                        </span>
                        <br />
                        de alto impacto.
                    </motion.h1>

                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mt-3 sm:mt-4 text-white font-montserrat font-normal text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl leading-relaxed"
                    >
                        Quédate para siempre en la mente de tus clientes con proyectos que sí cumplen objetivos.
                    </motion.p>

                    {/* Acciones de Conversión - Responsive */}
                    <motion.div 
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.28 }}
                        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-6 sm:mt-8 md:mt-10"
                    >
                        <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#ba3f35] text-white rounded-xl font-bold text-[11px] sm:text-[13px] uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 group-hover:text-[#ba3f35] transition-colors duration-300">
                                Cotizar Proyecto
                                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                        
                        <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/80 text-white rounded-xl font-bold text-[11px] sm:text-[13px] uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:border-white">
                            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 group-hover:text-black transition-colors duration-300">
                                <Calendar size={16} className="sm:w-[18px] sm:h-[18px] transition-colors duration-300" />
                                Agendar Videollamada
                            </span>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── CARRUSEL DE MARCAS ── */}
            <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-transparent group select-none">
                <div className="absolute top-0 left-0 w-12 sm:w-20 md:w-32 lg:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" />
                <div className="absolute top-0 right-0 w-12 sm:w-20 md:w-32 lg:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" />

                {/* Texto superior integrado */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16 relative z-10 px-4">
                    <h2 className="font-aston text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-wide">
                        Algunos de nuestros clientes
                    </h2>
                </div>

                <div className="relative w-full max-w-[1519px] mx-auto px-2 sm:px-4 md:px-8 z-10">
                    <div className="relative flex items-center">
                        <button className="prev-btn absolute left-0 z-30 p-1 sm:p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                            <ChevronLeft size={32} className="sm:w-10 sm:h-10" strokeWidth={1} />
                        </button>
                        <button className="next-btn absolute right-0 z-30 p-1 sm:p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                            <ChevronRight size={32} className="sm:w-10 sm:h-10" strokeWidth={1} />
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
                                480: { slidesPerView: 2.5, spaceBetween: 25 },
                                640: { slidesPerView: 3, spaceBetween: 30 },
                                768: { slidesPerView: 3.5, spaceBetween: 35 },
                                1024: { slidesPerView: 4.5, spaceBetween: 40 },
                                1280: { slidesPerView: 5.5, spaceBetween: 50 },
                            }}
                            className="flex items-center"
                        >
                            {allBrands.map((brand, index) => (
                                <SwiperSlide key={index} className="flex items-center justify-center py-2 sm:py-3 md:py-4">
                                    <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 w-full px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
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
            </section>
        </>
    );
};

export default AudiovisualHero;
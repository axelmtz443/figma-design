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

const AudiovisualHero = () => {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
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

                <div className="relative z-10 px-6 sm:px-12 md:px-20 max-w-5xl">
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="font-aston font-extrabold tracking-wide leading-none text-white"
                        style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
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
                        className="mt-4 text-white font-montserrat font-normal text-base sm:text-2xl max-w-2xl leading-relaxed"
                    >
                        Quédate para siempre en la mente de tus clientes con proyectos que sí cumplen objetivos.
                    </motion.p>

                    {/* Acciones de Conversión */}
                    <motion.div 
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.28 }}
                        className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mt-10"
                    >
                        <button className="group relative w-full sm:w-auto px-8 py-4 bg-[#ba3f35] text-white rounded-xl font-bold text-[13px] uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#ba3f35] transition-colors duration-300">
                                Cotizar Proyecto
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                        
                        <button className="group relative w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/80 text-white rounded-xl font-bold text-[13px] uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:border-white">
                            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300">
                                <Calendar size={18} className="transition-colors duration-300" />
                                Agendar Videollamada
                            </span>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── CARRUSEL DE MARCAS ── */}
            <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-transparent group select-none">
                <div className="absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" />
                <div className="absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" />

                {/* Texto superior integrado */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className="font-aston text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-wide">
                        Algunos de nuestros clientes
                    </h2>
                </div>

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
        </>
    );
};

export default AudiovisualHero;

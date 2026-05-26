import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

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

import bgVideo from '../../../images/videobackground.mp4'

import heroRight from '../../../images/branding/hero-right.png';

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

const ConsultoriaHero = () => {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
                {/* Video de fondo */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={bgVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ opacity: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/60 lg:to-transparent" />
            
                {/* Contenedor Principal en 2 Columnas */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* COLUMNA IZQUIERDA: TEXTO Y BOTONES */}
                    <div className="flex flex-col">
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-aston text-5xl sm:text-6xl md:text-7xl py-2 font-medium tracking-tight leading-[1.1] text-white"
                        >
                            Professional <br />
                            <span 
                                className="inline-block mt-2 font-normal tracking-wide"
                                style={{
                                    background: 'linear-gradient(to right, #c5362e, #599ddf, #80b67d, #e6af41)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}
                            >
                                Branding
                            </span>
                        </motion.h1>
            
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-6 text-white font-montserrat text-lg sm:text-xl max-w-lg leading-relaxed"
                        >
                            Hacemos marcas memorables, creativas y de alto impacto para que te vean, te recuerden y se queden contigo
                        </motion.p>
            
                        {/* CONTENEDOR DE BOTONES */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <button className="bg-white text-black font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                                Cotizar proyecto
                            </button>
                            <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm">
                                Servicios
                            </button>
                        </motion.div>
                    </div>
            
                    {/* COLUMNA DERECHA: IMAGEN CON EFECTO FLOAT */}
                    {/* COLUMNA DERECHA: IMAGEN CON EFECTO FLOAT */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="hidden lg:flex justify-center relative"
                    >
                        {/* Resplandor de fondo para la imagen */}
                        <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full" />
                        
                        <img 
                            src={heroRight} // <--- Ya con la referencia importada
                            alt="Branding Excellence" 
                            className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float"
                        />
                    </motion.div>
            
                </div>
            </section>

            {/* ── CARRUSEL DE MARCAS ── */}
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

export default ConsultoriaHero;
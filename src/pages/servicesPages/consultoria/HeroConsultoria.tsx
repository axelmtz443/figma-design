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

import bgVideo from '../../../images/videobackground.mp4';

const brands = [
    { name: 'Cinepolis', src: Cinepolis, alt: 'Cinepolis Logo' },
    { name: 'Grupo Caliente', src: GrupoCaliente, alt: 'Grupo Caliente Logo' },
    { name: 'Heineken', src: Heineken, alt: 'Heineken Logo', sizeClass: 'h-12 sm:h-16 md:h-20 lg:h-24' },
    { name: 'Ford', src: Ford, alt: 'Ford Logo', sizeClass: 'h-6 sm:h-8 md:h-10 lg:h-14' },
    { name: 'KIA', src: KIA, alt: 'KIA Logo', sizeClass: 'h-14 sm:h-20 md:h-24 lg:h-28' },
    { name: "McDonald's", src: Macdonalds, alt: "McDonald's Logo", sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
    { name: 'Mercedes-Benz', src: MercedesBenz, alt: 'Mercedes-Benz Logo', sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
    { name: 'Nissan', src: Nissan, alt: 'Nissan Logo', sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
    { name: 'Pepsico', src: Pepsico, alt: 'Pepsico Logo' },
    { name: 'Televisa', src: Televisa, alt: 'Televisa Logo', sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
    { name: 'Volkswagen', src: Volkswagen, alt: 'Volkswagen Logo', sizeClass: 'h-12 sm:h-16 md:h-18 lg:h-20' },
];

const words = [
    { text: 'Escalar',    color: '#5fa1cf' },
    { text: 'Transformar', color: '#7eb387' },
    { text: 'Expandir',   color: '#e5ad43' },
    { text: 'Acelerar',   color: '#ba3f35' },
];

const AnimatedWord = () => {
    const [index, setIndex] = useState(0);
    const [animState, setAnimState] = useState<'visible' | 'exit' | 'enter'>('visible');

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimState('exit');
            setTimeout(() => {
                setIndex(prev => (prev + 1) % words.length);
                setAnimState('enter');
                setTimeout(() => {
                    setAnimState('visible');
                }, 50);
            }, 350);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const { text, color } = words[index];

    const styles: Record<string, React.CSSProperties> = {
        visible: { transform: 'translateY(0)',    opacity: 1 },
        exit:    { transform: 'translateY(-110%)', opacity: 0 },
        enter:   { transform: 'translateY(110%)',  opacity: 0 },
    };

    return (
        <span
            style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'bottom',
            }}
        >
            <span
                style={{
                    display: 'inline-block',
                    paddingLeft: '1rem sm:1.5rem',
                    color,
                    transition: animState === 'exit'
                        ? 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease'
                        : animState === 'visible'
                            ? 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease'
                            : 'none',
                    ...styles[animState],
                }}
            >
                {text}
            </span>
        </span>
    );
};

const allBrands = [...brands, ...brands];

const ConsultoriaHero = () => {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={bgVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ opacity: 0.35 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />

                <div className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-4xl">
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="font-aston text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-2 font-medium tracking-normal leading-snug text-white"
                    >
                        Consultoría Estratégica para 
                        <AnimatedWord />
                        <br />
                        tus Resultados Comerciales
                    </motion.h1>

                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mt-3 sm:mt-4 text-white font-montserrat font-normal text-base sm:text-xl md:text-2xl max-w-xl leading-relaxed"
                    >
                        Trabajamos con tu equipo directivo y comercial para convertir esfuerzos en crecimiento real y sostenido.
                    </motion.p>

                    <motion.button
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.28 }}
                        className="mt-6 sm:mt-8 relative text-white font-montserrat font-bold text-base sm:text-lg md:text-xl px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white/10 transition-all duration-300"
                        style={{
                            border: '3px solid grey',
                        }}
                    >
                        Agendar sesión de descubrimiento
                    </motion.button>
                </div>
            </section>

            {/* ── CARRUSEL DE MARCAS ── */}
            <section className="relative w-full pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 overflow-hidden bg-transparent group">
                <div className="absolute top-0 left-0 w-12 sm:w-20 md:w-32 lg:w-48 xl:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-black to-transparent opacity-90" />
                <div className="absolute top-0 right-0 w-12 sm:w-20 md:w-32 lg:w-48 xl:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-black to-transparent opacity-90" />

                <div className="relative w-full max-w-[1519px] mx-auto px-3 sm:px-6 md:px-8 z-10">
                    <div className="relative flex items-center">
                        <button className="prev-btn absolute left-0 z-30 p-1 sm:p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                            <ChevronLeft size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={1} />
                        </button>
                        <button className="next-btn absolute right-0 z-30 p-1 sm:p-2 text-white/50 hover:text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
                            <ChevronRight size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={1} />
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
                                480: { slidesPerView: 3, spaceBetween: 25 },
                                640: { slidesPerView: 3, spaceBetween: 30 },
                                768: { slidesPerView: 4, spaceBetween: 35 },
                                1024: { slidesPerView: 5, spaceBetween: 40 },
                                1280: { slidesPerView: 6, spaceBetween: 45 },
                            }}
                            className="flex items-center"
                        >
                            {allBrands.map((brand, index) => (
                                <SwiperSlide key={index} className="flex items-center justify-center py-2 sm:py-4">
                                    <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-full px-3 sm:px-4 py-3 sm:py-4 rounded-2xl bg-white border border-white/20 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                                        <img
                                            src={brand.src}
                                            alt={brand.alt}
                                            className={`w-auto object-contain transition-all ${
                                                brand.sizeClass ? brand.sizeClass : 'h-6 sm:h-7 md:h-9 lg:h-11'
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
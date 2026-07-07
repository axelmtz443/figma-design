import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Calendar, TrendingUp, PieChart, LineChart, Target, Trophy } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useContactPopup } from '../../../context/ContactPopupContext';

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

const WepromLogo = () => (
  <svg
    id="Capa_2"
    data-name="Capa 2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 780.55 712.65"
    className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 drop-shadow-[0_0_50px_rgba(197,54,46,0.3)] transition-all duration-500"
  >
    <defs>
      <style>{`
        .cls-1 { fill: url(#Degradado_sin_nombre_6); }
        .cls-2 { fill: url(#Degradado_sin_nombre_170); }
        .cls-3 { fill: url(#Degradado_sin_nombre_201); }
        .cls-4 { fill: url(#Degradado_sin_nombre_194); }
        .cls-5 { fill: url(#Degradado_sin_nombre_3); }
        .cls-6 { fill: url(#Degradado_sin_nombre_22); }
        .cls-7 { fill: url(#Degradado_sin_nombre_194-2); }
        .cls-8 { fill: url(#Degradado_sin_nombre_6-2); }
      `}</style>
      <linearGradient id="Degradado_sin_nombre_194" data-name="Degradado sin nombre 194" x1="689.73" y1="503.15" x2="689.73" y2="506.87" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#f09428"/>
        <stop offset=".21" stopColor="#f29d2b"/>
        <stop offset=".64" stopColor="#f7ac31"/>
        <stop offset="1" stopColor="#f9b233"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_194-2" data-name="Degradado sin nombre 194" x1="734.92" y1="96.62" x2="734.92" y2="554.63" xlinkHref="#Degradado_sin_nombre_194"/>
      <linearGradient id="Degradado_sin_nombre_6" data-name="Degradado sin nombre 6" x1="3.05" y1="515.94" x2="3.11" y2="515.84" gradientUnits="userSpaceOnUse">
        <stop offset=".07" stopColor="#e6332a"/>
        <stop offset=".11" stopColor="#d53a36"/>
        <stop offset=".29" stopColor="#95586a"/>
        <stop offset=".47" stopColor="#607195"/>
        <stop offset=".64" stopColor="#3685b7"/>
        <stop offset=".78" stopColor="#1893cf"/>
        <stop offset=".91" stopColor="#069bdd"/>
        <stop offset="1" stopColor="#009fe3"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_6-2" data-name="Degradado sin nombre 6" x1="81.77" y1="583.27" x2="374.34" y2="76.54" xlinkHref="#Degradado_sin_nombre_6"/>
      <linearGradient id="Degradado_sin_nombre_22" data-name="Degradado sin nombre 22" x1="42.84" y1="505.91" x2="42.84" y2="271.32" gradientUnits="userSpaceOnUse">
        <stop offset=".01" stopColor="#a3332a"/>
        <stop offset="1" stopColor="#e6332a"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_3" data-name="Degradado sin nombre 3" x1="728.43" y1="52.76" x2="460.78" y2="516.35" gradientUnits="userSpaceOnUse">
        <stop offset=".05" stopColor="#f9b233"/>
        <stop offset=".09" stopColor="#d6b343"/>
        <stop offset=".17" stopColor="#7db66c"/>
        <stop offset=".2" stopColor="#60b87b"/>
        <stop offset="1" stopColor="#579966"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_201" data-name="Degradado sin nombre 201" x1="72.81" y1="406.73" x2="706.31" y2="406.73" gradientUnits="userSpaceOnUse">
        <stop offset=".08" stopColor="#e6332a"/>
        <stop offset=".09" stopColor="#d73935"/>
        <stop offset=".14" stopColor="#a5515d"/>
        <stop offset=".2" stopColor="#796681"/>
        <stop offset=".25" stopColor="#53779f"/>
        <stop offset=".3" stopColor="#3585b8"/>
        <stop offset=".36" stopColor="#1d91cb"/>
        <stop offset=".42" stopColor="#0d98d8"/>
        <stop offset=".49" stopColor="#039de0"/>
        <stop offset=".58" stopColor="#009fe3"/>
        <stop offset=".79" stopColor="#60b87b"/>
        <stop offset=".8" stopColor="#79b76f"/>
        <stop offset=".83" stopColor="#a0b55c"/>
        <stop offset=".86" stopColor="#c0b44d"/>
        <stop offset=".89" stopColor="#d9b341"/>
        <stop offset=".93" stopColor="#ebb239"/>
        <stop offset=".96" stopColor="#f5b234"/>
        <stop offset="1" stopColor="#f9b233"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_170" data-name="Degradado sin nombre 170" x1="476.57" y1="292.44" x2="476.57" y2="683.68" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0072bc"/>
        <stop offset=".76" stopColor="#0099de"/>
        <stop offset=".82" stopColor="#18a1c4"/>
        <stop offset=".94" stopColor="#4cb18f"/>
        <stop offset="1" stopColor="#60b87b"/>
      </linearGradient>
    </defs>
    <g id="Capa_1-2" data-name="Capa 1">
      <g>
        <g>
          <path className="cls-4" d="M689.65,503.45c-.02,1.21.04,2.41.15,3.6,0-.34,0-.67,0-1.02-.1-1.02-.14-2.04-.14-3.08,0,.16,0,.34,0,.49Z"/>
          <path className="cls-7" d="M689.63,73.54c-.5,31.91.61,381.87.05,428.04.07,1.52.11,3,.12,4.46,3.9,41.46,85.93,70.25,85.93,70.25-.02.33-.04.66-.07.98.04.02.07.02.07.02,1.05-62.18,4.22-381.27,4.61-419.89-22.48-67.07-71.63-81.03-90.71-83.86Z"/>
        </g>
        <g>
          <path className="cls-1" d="M3.1,515.98s0-.02,0-.03c-.02-.19-.05-.17,0,.03h0Z"/>
          <path className="cls-8" d="M431.96,221.95c-.13-54.69-44.85-157.97-137.14-157.99-63.84-.01-107.65,44.61-115.62,78.86-2.17,9.34-5.02,32.33-4.68,42.53.91,27.13.68,261.45-.33,275.79-.44,6.34,9,77.5-43.57,110.47-13.3,8.34-29.17,12.53-44.57,9.54-56.62-10.99-82.24-66.42-82.58-66.96,0,0,2.89,18.21,6.04,25.9,42.24,103.24,120.38,95.8,129.9,95.81,41.25.06,111.55-13.84,117.71-110.67.18-2.83-2.19-305.52-.44-309.75,8.56-63.57,46.31-76.16,61.68-77.55,79.89-12.58,113.6,84.02,113.6,84.02Z"/>
        </g>
        <path className="cls-6" d="M85.03,580.94c-1.33-34.92,0-214.45.64-266.37l-16.69-147.31c-45.39,9.82-59.23,54.27-64.18,71.89-9.06,32.24-2.78,235.33-1.41,274.66.02.48,4.33,8.89,11.93,19.6,12.55,17.11,35.35,40.49,69.7,47.53Z"/>
        <path className="cls-5" d="M644.41,0c-93.28,0-119.15,63.97-123.25,91.33-2.17,14.48-1.84,49.14-1.91,53.97-.26,17.39,0,34.8,0,52.19,0,35.8-.58,294.56-.54,311.14.23,121.3,1.06,148.46-.19,153.58,36.49-.13,73.68-22.95,87.88-71.01.16-4.11.24-10.35.21-14.74-.21-38.72-.44-357.05-.4-364.78.27-54.87-6.83-138.05,75.64-138.83-.02-.14,70.61.32,98.71,85.14C778.08,38.21,693.73,0,644.41,0Z"/>
        <path className="cls-3" d="M689.65,502.45c0-.34.01-.71.02-1.1,2.31,49.53-24.6,68.58-63.68,44.95-7.02-4.24-453.47-351.17-462.71-357.04-50.68-32.22-94.3-22-94.3-22,2.75,20.65,16.33,144.9,16.69,147.31-.64-81.57,64.92-75.98,95.29-51.61-8.3-6.66,431.17,335.9,460.54,353.92,12.4,7.6,24.78,15.6,37.68,22.34,12.61,6.6,27.45,9.42,42.05,8.26,17.39-1.38,31.93-12.96,40.25-27.49,7.3-12.75,11.86-25.71,13.93-40.34.12-.86.23-2.11.31-3.37,0,0-86.8-30.46-86.08-73.83Z"/>
        <path className="cls-2" d="M431.83,578.79c-2.69-24.65,1.42-351.8.27-355.44-9.74-30.89-38.95-75.63-85.43-85.33,0,0,.71,393.75.54,405.37-1.54,102.5,60.48,163.96,132.95,168.81,133.65,8.95,126.23-121.02,126.23-121.02-30.09,101.91-163.57,88.4-174.56-12.4Z"/>
      </g>
    </g>
  </svg>
);

const OrbitalSystem = () => {
  const [angle, setAngle] = useState(0);
  const requestRef = useRef<number | null>(null);

  const differentiators = [
    { title: 'Más y Mejores Ventas', icon: TrendingUp },
    { title: 'Optimización de Recursos', icon: PieChart },
    { title: 'Crecimiento Sostenido', icon: LineChart },
    { title: 'Planeación Estratégica', icon: Target },
    { title: 'Mayor Competitividad', icon: Trophy },
  ];

  useEffect(() => {
    const animate = () => {
      setAngle(prev => (prev + 0.0025) % (Math.PI * 2));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const radiusX = typeof window !== 'undefined' && window.innerWidth < 768 ? 130 : window.innerWidth < 1280 ? 210 : 260;
  const radiusZ = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : window.innerWidth < 1280 ? 120 : 160;
  const tiltY = 15;

  return (
    <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px] flex items-center justify-center perspective-1000">
      <div className="absolute z-10">
        <WepromLogo />
        <div className="absolute inset-0 bg-[#c5362e] blur-[100px] sm:blur-[120px] opacity-15 -z-10 rounded-full" />
      </div>

      {differentiators.map((diff, index) => {
        const itemAngle = angle + (index * (Math.PI * 2)) / differentiators.length;
        const x = Math.cos(itemAngle) * radiusX;
        const z = Math.sin(itemAngle) * radiusZ;
        const y = Math.sin(itemAngle) * tiltY;
        const scale = ((z + radiusZ) / (2 * radiusZ)) * 0.45 + 0.65;
        const opacity = ((z + radiusZ) / (2 * radiusZ)) * 0.75 + 0.25;
        const zIndex = Math.round(z);
        const Icon = diff.icon;

        return (
          <div
            key={diff.title}
            className="absolute flex flex-col items-center justify-center cursor-default transition-all duration-75"
            style={{
              transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
              zIndex: zIndex,
              opacity: opacity,
              filter: `blur(${Math.max(0, (radiusZ - z) * 0.006 - 0.5)}px)`
            }}
          >
            <div className="bg-[#0c0d0e]/80 backdrop-blur-md border border-zinc-800/80 p-2 sm:p-2.5 lg:p-3 rounded-xl shadow-2xl flex items-center gap-2 sm:gap-2.5 transition-all duration-300 group w-36 sm:w-40 md:w-44 lg:w-48 hover:bg-neutral-900/90 hover:border-zinc-700/80">
              <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/20">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5362e] drop-shadow-md" />
              </div>
              <div className="flex flex-col justify-center text-left">
                <span className="font-bold text-neutral-100 text-[10px] sm:text-[10px] md:text-[11px] lg:text-xs leading-snug">{diff.title}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ConsultoriaHero = () => {
    const { openPopup } = useContactPopup();
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative w-full min-h-screen md:min-h-[750px] flex items-center overflow-hidden py-20 sm:py-24 md:py-0">
                <style>{`
                    .consultoria-btn-gradient {
                        background: linear-gradient(90deg, #c5362e, #e6af41, #80b67d, #599ddf);
                        background-size: 300% 100%;
                        animation: consultoriaGradientShift 6s ease infinite;
                    }
                    @keyframes consultoriaGradientShift {
                        0%   { background-position: 0%   50%; }
                        50%  { background-position: 100% 50%; }
                        100% { background-position: 0%   50%; }
                    }
                `}</style>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

                    {/* ── Logo construyéndose (móvil: arriba, desktop: derecha) ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="flex items-center justify-center order-first md:order-last w-full"
                    >
                        <OrbitalSystem />
                    </motion.div>

                    {/* ── Texto ── */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <motion.h1
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="font-aston text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-2 font-medium tracking-normal leading-snug text-white"
                        >
                            Consultoría Estratégica para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5fa0cf00] via-[#7eb38700] to-[#e5ac4300]">.</span> 
                            <AnimatedWord />
                        </motion.h1>

                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="mt-3 sm:mt-4 text-white font-montserrat font-normal text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
                        >
Te ayudamos a comprender y optimizar las diferentes áreas de tu negocio a través de soluciones efectivas y personalizadas.
                        </motion.p>

                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="flex flex-row flex-nowrap gap-3 sm:gap-4 mt-8 sm:mt-10"
                        >
                            <button
                                onClick={() => openPopup('Consultoría Estratégica')}
                                className="consultoria-btn-gradient relative text-white font-montserrat font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 rounded-full border-none cursor-pointer shadow-[0_0_20px_rgba(197,54,46,0.4)] transition-transform duration-300 hover:scale-[1.06] active:scale-95 whitespace-nowrap"
                            >
                                Solicitar diagnóstico
                            </button>

                            <a
                                href="https://calendar.app.google/9z2zxVcSLAVmWtHJ7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-full border border-white/25 text-white/80 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 font-montserrat font-medium text-xs sm:text-sm md:text-base transition-all duration-300 hover:border-white/60 hover:text-white hover:scale-[1.06] active:scale-95 flex items-center gap-2 whitespace-nowrap"
                            >
                                <Calendar size={16} />
                                Agendar Reunión
                            </a>
                        </motion.div>
                    </div>
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
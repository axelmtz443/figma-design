import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { TrendingUp, Lightbulb, LineChart, Users, ChevronDown } from 'lucide-react';

const LogoRed = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 4100 4100" className={className}>
    <path fill="#e6332a" d="M211.4,2806.07s0,.02,0,.02c0-.01,0-.02,0-.03,0,0,0,0,0,0Z"/>
    <path fill="#e6332a" d="M211.4,2806.06c-.08-.83-.22-.78,0,0h0Z"/>
    <path fill="#e6332a" d="M211.44,2806.23v-.02s-.02-.08-.03-.12c.01.05.02.08.03.13Z"/>
    <path fill="#e6332a" d="M1024.79,2545.56c-2.11,30.14,42.78,368.44-207.13,525.16-63.21,39.64-138.65,59.55-211.89,45.33-269.18-52.23-390.95-315.74-392.56-318.32,0-.02,13.74,86.56,28.69,123.11,200.78,490.8,572.24,455.42,617.5,455.48,196.08.3,530.3-65.8,559.59-526.1.47-7.42-2.74-447.83-4.32-845.06l-385.63-299.79c.25,360.65-1.3,798.25-4.24,840.17Z"/>
    <path fill="#bf2521" d="M1748.51,1850.55c-412.39-319.2-758.1-586.35-775.55-597.45-240.92-153.18-448.28-104.58-448.28-104.58,10.91,82,57.78,507.75,73.89,652.34l-73.89-652.34c-215.77,46.66-281.57,258-305.1,341.74-43.06,153.25-13.23,1118.73-6.71,1305.68.08,2.29,20.58,42.26,56.71,93.17,59.67,81.36,168.06,192.49,331.36,225.94-6.31-166,0-1019.45,3.06-1266.25h0s0,0,0,0c-3.06-387.79,308.6-361.2,452.98-245.35-15.49-12.43,297.39,231.24,691.54,536.94v-289.85Z"/>
    <path fill="#e6332a" d="M3475.2,2741.93c-.1,5.85.16,11.65.71,17.41-.06-7.39-.27-14.92-.63-22.62-.03,1.83-.06,3.58-.09,5.22Z"/>
  </svg>
);

const LogoBlue = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 4100 4100" className={className}>
    <path fill="#009fe3" d="M1598.24,657.44c-303.5-.07-511.75,212.07-549.65,374.89-7.25,31.13-16.05,94.16-20.11,145.78l385.89,293.15c.47-56.25,1.28-90.52,2.51-93.51,40.68-302.22,220.13-362.03,293.24-368.68,379.79-59.81,540.04,399.4,540.04,399.4-.6-259.98-213.22-750.95-651.91-751.04Z"/>
    <path fill="#0072bc" d="M3041.68,3258.99c-192.84,377.96-743.62,290.84-792.13-154.18-12.77-117.18,6.75-1672.39,1.3-1689.68-46.31-146.85-185.18-359.52-406.11-405.64,0,0,3.37,1871.78,2.55,1927.07-7.3,487.27,287.5,779.43,632.02,802.5,454.64,30.45,565.87-277.25,592.37-454.75l-29.99-25.31Z"/>
  </svg>
);

const LogoGreen = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 4100 4100" className={className}>
    <path fill="#60b87b" d="M3260.12,353.37c-443.44,0-566.39,304.08-585.9,434.15-10.33,68.84-8.74,233.58-9.08,256.58-1.24,82.66-.02,165.44-.02,248.12,0,117.55-1.31,740.89-2.07,1141.12l416.58,323.85c-.72-504.02-1.31-1369.86-1.18-1397.55,1.26-260.83-32.48-656.27,359.59-659.99-.09-.68,335.67,1.5,469.24,404.76-11.72-569.41-412.7-751.04-647.16-751.04Z"/>
    <path fill="#48935d" d="M2661.61,3501.39c147.65-.54,297.7-79.24,380.71-243.55l-379.25-286.49c1.42,407.91,3.75,508.82-1.46,530.04Z"/>
  </svg>
);

const LogoYellow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 4100 4100" className={className}>
    <defs>
      <linearGradient id="Degradado_sin_nombre_194" data-name="Degradado sin nombre 194" x1="3475.55" y1="2745.24" x2="3475.55" y2="2762.93" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#f09428"/>
        <stop offset=".21" stopColor="#f29d2b"/>
        <stop offset=".64" stopColor="#f7ac31"/>
        <stop offset="1" stopColor="#f9b233"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_194-2" data-name="Degradado sin nombre 194" x1="3690.38" y1="812.69" x2="3690.38" y2="2989.98" href="#Degradado_sin_nombre_194"/>
      <linearGradient id="Degradado_sin_nombre_194-3" data-name="Degradado sin nombre 194" x1="2346.38" y1="2873.01" x2="3884.41" y2="2873.01" href="#Degradado_sin_nombre_194"/>
    </defs>
    <path fill="url(#Degradado_sin_nombre_194)" d="M3475.2,2746.69c-.1,5.76.18,11.46.72,17.12,0-1.61,0-3.2,0-4.83-.46-4.84-.68-9.72-.68-14.63-.01.78-.02,1.61-.04,2.34Z"/>
    <path fill="url(#Degradado_sin_nombre_194-2)" d="M3475.09,702.94c-2.39,151.7,2.9,1815.32.23,2034.83.32,7.21.52,14.28.59,21.21,18.55,197.08,408.5,333.94,408.5,333.94-.1,1.56-.21,3.12-.32,4.64.21.07.32.11.32.11,4.99-295.61,20.07-1812.46,21.89-1996.09-106.86-318.84-340.5-385.2-431.22-398.65Z"/>
    <path fill="url(#Degradado_sin_nombre_194-3)" d="M3475.91,2759.34c1.93,218.53-123.65,299.71-303.33,191.06-13.88-8.39-389.29-298.72-826.2-636.96v289.69c442.09,341.25,841.52,646.96,899.92,682.77,58.94,36.15,117.82,74.14,179.11,106.2,59.95,31.36,130.49,44.78,199.92,39.29,82.66-6.54,151.81-61.6,191.35-130.67,34.7-60.61,56.4-122.23,66.24-191.76.57-4.07,1.1-10.02,1.48-16.04,0,0-389.52-136.69-408.5-333.58Z"/>
  </svg>
);

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

const GlassCard = ({ title, description, Icon, color, progress, endStyle, LogoComponent, isMobile }: any) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || progress < 0.95) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const rgb = hexToRgb(color);
  const logoOpacity = Math.max(0, 1 - progress * 2.5); 
  const contentOpacity = Math.max(0, (progress - 0.6) * 2.5);

  const isFullyExpanded = progress >= 0.98;
  const currentBgAlpha = isFullyExpanded && isHovered ? 0.15 : 0.05 * progress;
  const currentBorderAlpha = isFullyExpanded && isHovered ? 0.6 : 0.2 * progress;

  const startSize = isMobile ? '180px' : '240px';
  const startPos = isMobile ? 'calc(50% - 90px)' : 'calc(50% - 120px)';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute overflow-hidden border cursor-pointer"
      style={{
        top: `calc((${startPos}) * (1 - ${progress}) + (${endStyle.top}) * ${progress})`,
        left: `calc((${startPos}) * (1 - ${progress}) + (${endStyle.left}) * ${progress})`,
        width: `calc((${startSize}) * (1 - ${progress}) + (${endStyle.width}) * ${progress})`,
        height: `calc((${startSize}) * (1 - ${progress}) + (${endStyle.height}) * ${progress})`,
        borderRadius: progress > 0.5 ? '24px' : '0px',
        backgroundColor: `rgba(${rgb}, ${currentBgAlpha})`,
        borderColor: `rgba(${rgb}, ${currentBorderAlpha})`,
        boxShadow: isFullyExpanded && isHovered ? `0 20px 50px -10px rgba(${rgb}, 0.3)` : 'none',
        transform: isFullyExpanded && isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease, background-color 0.4s ease',
        zIndex: isFullyExpanded && isHovered ? 50 : 10,
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isFullyExpanded && isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${rgb}, 0.2), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8" style={{ opacity: logoOpacity }}>
        <LogoComponent className="w-full h-full" />
      </div>
      
      <div className={`relative z-10 flex h-full ${isMobile ? 'flex-row items-center gap-3 p-3' : 'flex-col p-4 sm:p-6 md:p-10'}`} style={{ opacity: contentOpacity, pointerEvents: progress > 0.9 ? 'auto' : 'none' }}>
        <div
          className={isMobile ? 'inline-flex w-fit flex-shrink-0 rounded-xl p-2 shadow-lg' : 'mb-3 sm:mb-4 md:mb-6 inline-flex w-fit rounded-2xl p-3 md:p-4 shadow-lg'}
          style={{
            backgroundColor: `rgba(${rgb}, 0.1)`,
            boxShadow: `0 0 0 1px rgba(${rgb}, 0.2), 0 0 20px rgba(${rgb}, 0.15)`
          }}
        >
          <Icon className={isMobile ? 'h-4 w-4' : 'h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8'} strokeWidth={1.5} style={{ color: color }} />
        </div>

        <div className={isMobile ? 'flex-1 min-w-0' : 'contents'}>
          <h3 className={isMobile ? 'text-[15px] font-bold tracking-wide font-montserrat text-white leading-tight' : 'mb-2 md:mb-4 text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-montserrat text-white'} style={{ color: color }}>
            {title}
          </h3>

          <p className={isMobile ? 'text-white/80 leading-snug text-[10px] font-montserrat' : 'text-white/80 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-montserrat mt-auto'}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhoWeAre = () => {
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  const rawProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const [currentProgress, setCurrentProgress] = useState(0);

  const smoothProgress = useSpring(rawProgress, { 
    stiffness: 80, damping: 25, restDelta: 0.001 
  });

  useEffect(() => {
    return smoothProgress.onChange(v => setCurrentProgress(v));
  }, [smoothProgress]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const endStylesDesktop = {
    expertos: { top: '8%', left: '2.5%', width: '46%', height: '50%' },
    especialistas: { top: '8%', left: '50%', width: '46%', height: '50%' },
    analistas: { top: '61%', left: '2.5%', width: '46%', height: '50%' },
    aliados: { top: '61%', left: '50%', width: '46%', height: '50%' }
  };

  const endStylesMobile = {
    expertos: { top: '0%', left: '0%', width: '100%', height: '22%' },
    especialistas: { top: '26%', left: '0%', width: '100%', height: '22%' },
    analistas: { top: '52%', left: '0%', width: '100%', height: '22%' },
    aliados: { top: '78%', left: '0%', width: '100%', height: '22%' }
  };

  const currentStyles = isMobile ? endStylesMobile : endStylesDesktop;

  const cardsData = [
    {
      id: 'expertos',
      title: "Los Expertos",
      description: "Somos Expertos en Estrategias de Marketing, Promoción e Imagen Pública y de Marca. Cualquier tipo de Empresa o Grupo.",
      Icon: TrendingUp,
      color: "#c5362e",
      LogoComponent: LogoRed,
      endStyle: currentStyles.expertos
    },
    {
      id: 'especialistas',
      title: "Los Especialistas",
      description: "Creamos y Generamos grandes ideas para Promover Marcas, Empresas y Personas.",
      Icon: Lightbulb,
      color: "#599ddf",
      LogoComponent: LogoBlue,
      endStyle: currentStyles.especialistas
    },
    {
      id: 'analistas',
      title: "Los Analistas",
      description: "Somos gente joven, entusiasta y dinámica, trabajando de la mano con la experiencia.",
      Icon: LineChart,
      color: "#80b67d",
      LogoComponent: LogoGreen,
      endStyle: currentStyles.analistas
    },
    {
      id: 'aliados',
      title: "Tus Aliados",
      description: "Nos involucramos en cada proyecto como si fuera nuestro, comprometiéndonos con los objetivos y el crecimiento de nuestros clientes.",
      Icon: Users,
      color: "#e6af41",
      LogoComponent: LogoYellow,
      endStyle: currentStyles.aliados
    }
  ];

  const sentence = "¿Quiénes somos?";
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={wrapperRef} className="relative w-full h-[350vh] bg-transparent font-sans pb-20 sm:pb-32 md:pb-40">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 h-[70vh] md:h-[80vh]">
          {cardsData.map((card) => (
            <GlassCard 
              key={card.id} 
              {...card}
              progress={currentProgress}
              isMobile={isMobile}
            />
          ))}

          {/* Indicador de scroll */}
          <div 
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            style={{ opacity: 1 - currentProgress * 2 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll para expandir</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
import { useState, useEffect, useRef } from 'react';
import { PieChart, Search, Lightbulb, PenTool, ClipboardCheck, Rocket } from 'lucide-react';

type AlignType = 'left' | 'center' | 'right';

interface Step {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

interface StepCardProps {
  step: Step;
  isHovered: boolean;
  align?: AlignType;
}

interface TimelineItemProps {
  step: Step;
  index: number;
  isVisible: boolean;
}

const STEPS: Step[] = [
  {
    id: "01",
    title: "Diagnóstico",
    description: "Conocemos y analizamos tu negocio y objetivos para establecer una base sólida.",
    color: "#c5362e",
    icon: <PieChart strokeWidth={1.5} size={28} />,
  },
  {
    id: "02",
    title: "Investigación",
    description: "Profundizamos en tu industria, audiencia y competencia para minimizar riesgos.",
    color: "#80b67d",
    icon: <Search strokeWidth={1.5} size={28} />,
  },
  {
    id: "03",
    title: "Brainstorming",
    description: "Abrimos todas las posibilidades creativas sin filtros iniciales.",
    color: "#599ddf",
    icon: <Lightbulb strokeWidth={1.5} size={28} />,
  },
  {
    id: "04",
    title: "Concepto",
    description: "Desarrollamos las ideas con mayor potencial de conexión.",
    color: "#e6af41",
    icon: <PenTool strokeWidth={1.5} size={28} />,
  },
  {
    id: "05",
    title: "Desarrollo",
    description: "Logotipo y sistema gráfico ejecutados con máxima precisión técnica.",
    color: "#c5362e",
    icon: <ClipboardCheck strokeWidth={1.5} size={28} />,
  },
  {
    id: "06",
    title: "Entrega",
    description: "Te proporcionamos los materiales para destacar desde el primer día.",
    color: "#80b67d",
    icon: <Rocket strokeWidth={1.5} size={28} />,
  },
];

function StepCard({ step, isHovered, align = 'left' }: StepCardProps) {
  return (
    <div
      className="relative flex flex-col justify-between p-4 xl:p-5 rounded-2xl bg-[#0a0a0a] border transition-all duration-500 w-full overflow-hidden min-h-[160px] md:min-h-[180px] xl:min-h-[210px]"
      style={{
        borderColor: isHovered ? `${step.color}50` : '#1f2937',
        boxShadow: isHovered ? `0 15px 35px -10px ${step.color}30` : '0 4px 20px -5px rgba(0,0,0,0.5)',
        transform: isHovered
          ? align === 'center' ? 'scale(1.03)' : align === 'right' ? 'translateX(-8px)' : 'translateX(8px)'
          : 'scale(1)',
        textAlign: align,
        zIndex: isHovered ? 50 : 10,
      }}
    >
      {/* Accent corner glow */}
      <div
        className={`absolute top-0 w-32 h-32 opacity-10 transition-all duration-500 pointer-events-none
          ${align === 'right' ? 'right-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'}`}
        style={{
          background: `radial-gradient(circle at ${align === 'right' ? 'top right' : align === 'center' ? 'top' : 'top left'}, ${step.color}, transparent)`,
          transform: isHovered ? 'scale(1.5)' : 'scale(1)',
        }}
      />

      {/* Large background number (desktop center cards) */}
      {align === 'center' && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-title opacity-[0.03] transition-transform duration-700 pointer-events-none"
          style={{
            color: step.color,
            transform: isHovered
              ? 'translate(-50%, -50%) scale(1.1) rotate(-5deg)'
              : 'translate(-50%, -50%) scale(1)',
          }}
        >
          {step.id}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center h-full">
        <h3
          className="font-title text-base xl:text-lg mb-2 transition-colors duration-300"
          style={{ color: isHovered ? step.color : '#ffffff' }}
        >
          {step.title}
        </h3>
        <p className="font-text text-gray-400 text-xs xl:text-sm leading-relaxed mt-auto">
          {step.description}
        </p>
      </div>
    </div>
  );
}

function MobileTimelineItem({ step, index, isVisible }: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center w-full mb-12 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon node */}
      <div className="absolute left-[28px] md:left-[40px] flex flex-col items-center justify-center z-20">
        <div
          className="absolute -top-6 font-title text-sm md:text-base font-bold transition-all duration-300"
          style={{ color: isHovered ? step.color : '#4b5563' }}
        >
          {step.id}
        </div>
        <div
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center transition-all duration-500 relative overflow-hidden"
          style={{
            borderColor: isHovered ? step.color : '#374151',
            boxShadow: isHovered ? `0 0 20px ${step.color}60` : 'none',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            color: isHovered ? '#fff' : '#9ca3af',
          }}
        >
          {step.icon}
        </div>
        {/* Horizontal connector to card */}
        <div
          className="absolute top-1/2 left-full h-[2px] transition-all duration-500 -z-10"
          style={{
            width: isHovered ? '1.5rem' : '1rem',
            backgroundColor: isHovered ? step.color : '#374151',
            boxShadow: isHovered ? `0 0 10px ${step.color}80` : 'none',
          }}
        />
      </div>

      {/* Card */}
      <div className="w-full pl-[80px] md:pl-[120px]">
        <StepCard step={step} isHovered={isHovered} align="left" />
      </div>
    </div>
  );
}

function DesktopGridItem({ step, index, isVisible }: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isTop = index % 2 === 0;

  return (
    <div
      className={`relative w-full h-[450px] xl:h-[500px] flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Central node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 font-title text-sm xl:text-base font-bold transition-all duration-300"
          style={{ color: isHovered ? step.color : '#4b5563' }}
        >
          {step.id}
        </div>
        <div
          className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center transition-all duration-500 overflow-hidden cursor-pointer"
          style={{
            borderColor: isHovered ? step.color : '#374151',
            boxShadow: isHovered ? `0 0 25px ${step.color}80, inset 0 0 10px ${step.color}40` : 'none',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
            color: isHovered ? '#fff' : '#9ca3af',
          }}
        >
          <div className="relative z-10 scale-90">{step.icon}</div>
        </div>
      </div>

      {/* Card above the line */}
      {isTop && (
        <div className="absolute bottom-1/2 pb-10 xl:pb-12 flex flex-col items-center w-full z-10">
          <div
            className="w-[170px] lg:w-[190px] xl:w-[210px] mb-4 transition-all duration-500 origin-bottom"
            style={{ transform: isHovered ? 'translateY(8px)' : 'translateY(0)' }}
          >
            <StepCard step={step} isHovered={isHovered} align="center" />
          </div>
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-10 xl:h-12 transition-all duration-500"
            style={{
              backgroundColor: isHovered ? step.color : '#374151',
              boxShadow: isHovered ? `0 0 15px ${step.color}90` : 'none',
            }}
          />
        </div>
      )}

      {/* Card below the line */}
      {!isTop && (
        <div className="absolute top-1/2 pt-10 xl:pt-12 flex flex-col items-center w-full z-10">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-10 xl:h-12 transition-all duration-500"
            style={{
              backgroundColor: isHovered ? step.color : '#374151',
              boxShadow: isHovered ? `0 0 15px ${step.color}90` : 'none',
            }}
          />
          <div
            className="w-[170px] lg:w-[190px] xl:w-[210px] mt-4 transition-all duration-500 origin-top"
            style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0)' }}
          >
            <StepCard step={step} isHovered={isHovered} align="center" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function OurProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black min-h-screen py-24 overflow-hidden flex flex-col justify-center"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');

        .font-title { font-family: 'Astonpoliz', 'Montserrat', sans-serif; font-weight: 800; }
        .font-text  { font-family: 'Montserrat', sans-serif; }

        .traveling-line-y {
          position: absolute;
          top: -150px;
          left: 0;
          width: 100%;
          height: 150px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent);
          animation: travelDown 4s ease-in-out infinite;
          opacity: 0.5;
        }

        .traveling-line-x {
          position: absolute;
          top: 0;
          left: -250px;
          height: 100%;
          width: 250px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
          animation: travelRight 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes travelDown {
          0%   { top: -150px; opacity: 0; }
          20%  { opacity: 0.8; }
          80%  { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }

        @keyframes travelRight {
          0%   { left: -250px; opacity: 0; }
          20%  { opacity: 0.8; }
          80%  { opacity: 0.8; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>

      {/* Header */}
      <div
        className={`text-center max-w-3xl mx-auto mb-12 px-6 lg:mb-16 space-y-6 transition-all duration-1000 ease-out z-20 relative ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <h2 className="font-title text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
          Nuestro Proceso <b>Creativo</b>
        </h2>
        <p className="font-text text-gray-400 text-lg md:text-xl leading-relaxed">
          Un proceso estructurado para transformar ideas en marcas que lideran. Sin pasos innecesarios, solo resultados.
        </p>
      </div>

      {/* Mobile timeline */}
      <div className="block lg:hidden relative w-full max-w-2xl mx-auto px-6">
        <div className="absolute left-[52px] md:left-[64px] top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2 overflow-hidden rounded-full">
          <div className="traveling-line-y" />
        </div>
        <div className="relative z-10 pt-8 pb-8">
          {STEPS.map((step, index) => (
            <MobileTimelineItem key={step.id} step={step} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>

      {/* Desktop timeline */}
      <div className="hidden lg:grid grid-cols-6 relative w-full max-w-[1100px] xl:max-w-[1300px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* Horizontal center line */}
        <div className="absolute left-[8.33%] right-[8.33%] top-1/2 -translate-y-1/2 h-[2px] bg-gray-800 overflow-hidden rounded-full z-0">
          <div className="traveling-line-x" />
        </div>

        {STEPS.map((step, index) => (
          <DesktopGridItem key={step.id} step={step} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}
import { LucideIcon, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  icon: any; 
  title: string;
  description: string;
  blurColor?: 'red' | 'blue' | 'green' | 'yellow' | 'none';
  isOpen: boolean;
  onToggle: () => void;
  onLearnMore: () => void;
}

function ServiceCard({ icon, title, description, blurColor = 'none', isOpen, onToggle, onLearnMore }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isOpen) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    cardRef.current.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)`;
  };

  const isImageIcon = typeof icon === 'string';
  const Icon = icon;

  const blurStyles: Record<string, string> = {
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#22c55e',
    yellow: '#eab308',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onToggle}
      className="relative flex flex-col min-h-[160px] sm:min-h-[180px] h-fit overflow-hidden transition-all duration-500 ease-out group/card w-full border border-white/10 hover:border-white/30 cursor-pointer select-none"
      style={{
        backgroundColor: '#121212',
        borderRadius: '32px',
        padding: '24px',
      }}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-35 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${blurStyles[blurColor] || 'white'} 0%, transparent 40%)`
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between gap-4 pointer-events-none">
        <div className="flex flex-col items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center">
            {isImageIcon ? (
              <img src={icon} alt={title} className="w-full h-full object-contain" />
            ) : (
              Icon && <Icon className="text-white" size={32} strokeWidth={1.5} />
            )}
          </div>
          <h3 className="font-montserrat font-semibold text-white text-[16px] leading-tight tracking-tight">
            {title}
          </h3>
        </div>

        <div className="h-px bg-white/10" />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="text-[#CACFD8] text-[14px] leading-relaxed pb-4 font-montserrat font-light">
                {description}
              </p>
              <button
                onClick={(e) => { 
                  e.stopPropagation();
                  onLearnMore(); 
                }}
                className="pointer-events-auto px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-[10px] font-bold uppercase tracking-widest mb-2"
              >
                Conoce más
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-1.5 text-white/50 group-hover/card:text-white transition-colors text-xs font-medium mt-auto">
          <span>{isOpen ? 'Cerrar' : 'Detalles'}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown size={14} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
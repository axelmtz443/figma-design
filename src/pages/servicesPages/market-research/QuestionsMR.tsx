import { useState } from 'react';
import { motion } from 'framer-motion';

interface QuestionItem {
  id: number;
  text: string;
  boldPart: string;
  color: string;
}

export default function ElPoderDeLaInformacion() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const brand = {
    red: '#c5362e',
    blue: '#599ddf',
    green: '#80b67d',
    yellow: '#e6af41',
  };

  const questions: QuestionItem[] = [
    { id: 1, text: "¿Puede mi proyecto de negocio", boldPart: "SER EXITOSO?", color: brand.red },
    { id: 2, text: "¿Qué hacen mis competidores para", boldPart: "GANAR CLIENTES?", color: brand.blue },
    { id: 3, text: "¿Hacia dónde debería", boldPart: "EXPANDIR MI NEGOCIO?", color: brand.green },
    { id: 4, text: "¿Qué puedo hacer para", boldPart: "INCREMENTAR MIS VENTAS?", color: brand.yellow },
    { id: 5, text: "¿Qué debe tener mi proyecto para", boldPart: "GENERAR RESULTADOS?", color: brand.red },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-transparent font-montserrat text-white select-none overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        .font-aston { font-family: 'ASTONPOLIZ', 'Anton', sans-serif; }
      `}} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-aston text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide mb-3 sm:mb-4 lg:mb-5 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            El Poder de la Información
          </h2>
          <div className="w-12 sm:w-16 h-[2px] bg-white/20 mx-auto mb-4 sm:mb-5" />
          <p className="text-white/90 text-sm sm:text-base lg:text-xl max-w-xl mx-auto font-medium leading-relaxed">
            A través de la Investigación de Mercados podrás responder estas preguntas:
          </p>
        </motion.div>

        <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#070708]/40 backdrop-blur-md shadow-2xl">
          {questions.map((q, index) => (
            <motion.div
              key={q.id}
              onMouseEnter={() => setHoveredId(q.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden border-b border-white/[0.06] last:border-b-0 transition-all duration-500 ease-[0.25,1,0.5,1] min-h-[64px] sm:min-h-[80px] md:min-h-[90px]"
              style={{
                height: hoveredId === q.id ? '110px' : undefined,
              }}
            >
              <div className="absolute inset-0 bg-[#08080a] transition-colors duration-500 group-hover:bg-[#0c0c10]" />

              <div 
                className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, ${q.color}18 0%, ${q.color}03 70%, transparent 100%)`,
                  opacity: hoveredId === q.id ? 1 : 0,
                }}
              />

              <div className="absolute inset-0 z-10 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
                
                <div 
                  className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 md:gap-3 lg:gap-4 transition-transform duration-500 ease-out"
                  style={{
                    transform: hoveredId === q.id ? 'translateX(8px) sm:translateX(12px)' : 'translateX(0px)'
                  }}
                >
                  <span className={`text-[13px] sm:text-xs md:text-sm lg:text-base font-light tracking-wide transition-colors duration-300 ${hoveredId === q.id ? 'text-white/90' : 'text-white/50'}`}>
                    {q.text}
                  </span>

                  <span
                    className="text-base sm:text-base md:text-lg lg:text-2xl font-aston tracking-widest font-bold leading-none transition-all duration-500"
                    style={{ 
                      color: hoveredId === q.id ? '#ffffff' : '#e2e8f0',
                      textShadow: hoveredId === q.id ? `0 0 20px ${q.color}40` : 'none'
                    }}
                  >
                    {q.boldPart}
                  </span>
                </div>

              </div>

              <div 
                className="absolute left-0 top-0 bottom-0 w-[3px] sm:w-[4px] z-20 transition-all duration-500 ease-out"
                style={{ 
                  backgroundColor: q.color,
                  boxShadow: hoveredId === q.id ? `4px 0 30px ${q.color}` : 'none',
                  transform: hoveredId === q.id ? 'scaleY(1)' : 'scaleY(0.4)'
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
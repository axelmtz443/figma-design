import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface QuestionItem {
  id: number;
  text: string;
  boldPart: string;
  color: string;
}

export default function ElPoderDeLaInformacion() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Paleta de colores oficial WeProm
  const brand = {
    red: '#c5362e',
    blue: '#599ddf',
    green: '#80b67d',
    yellow: '#e6af41',
  };

  // Set unificado y corregido de preguntas estratégicas
  const questions: QuestionItem[] = [
    { 
      id: 1, 
      text: "¿Puede mi proyecto de negocio", 
      boldPart: "SER EXITOSO?", 
      color: brand.red,
    },
    { 
      id: 2, 
      text: "¿Qué hacen mis competidores para", 
      boldPart: "GANAR CLIENTES?", 
      color: brand.blue,
    },
    { 
      id: 3, 
      text: "¿Hacia dónde debería", 
      boldPart: "EXPANDIR MI NEGOCIO?", 
      color: brand.green,
    },
    { 
      id: 4, 
      text: "¿Qué puedo hacer para", 
      boldPart: "INCREMENTAR MIS VENTAS?", 
      color: brand.yellow,
    },
    { 
      id: 5, 
      text: "¿Qué debe tener mi proyecto para", 
      boldPart: "GENERAR RESULTADOS?", 
      color: brand.red, 
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-transparent font-montserrat text-white select-none overflow-hidden">
      
      {/* Estilos locales seguros para fuentes y utilidades */}
      <style dangerouslySetInnerHTML={{__html: `
        .font-aston { font-family: 'ASTONPOLIZ', 'Anton', sans-serif; }
      `}} />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Encabezado Principal Premium */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <h2 className="font-aston text-3xl sm:text-4xl md:text-5xl tracking-wide mb-5 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            El Poder de la Información
          </h2>
          <div className="w-16 h-[2px] bg-white/20 mx-auto mb-5" />
          <p className="text-white/90 text-base sm:text-xl max-w-xl mx-auto font-medium leading-relaxed">
            A través de la Investigación de Mercados podrás responder estas preguntas:
          </p>
        </motion.div>

        {/* Contenedor de Franjas Interactivas */}
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
              className="relative group cursor-pointer overflow-hidden border-b border-white/[0.06] last:border-b-0 transition-all duration-500 ease-[0.25,1,0.5,1]"
              style={{
                height: hoveredId === q.id ? '130px' : '90px',
              }}
            >
              {/* Fondo base oscuro profundo */}
              <div className="absolute inset-0 bg-[#08080a] transition-colors duration-500 group-hover:bg-[#0c0c10]" />

              {/* Relleno Gradual de Color de Marca (Brillo/Glow interno) */}
              <div 
                className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, ${q.color}18 0%, ${q.color}03 70%, transparent 100%)`,
                  opacity: hoveredId === q.id ? 1 : 0,
                }}
              />

              {/* Contenido de la Franja */}
              <div className="relative z-10 h-full flex items-center justify-between px-6 sm:px-12 md:px-16">
                
                {/* Estructura del Texto Adaptativa (Flex-row en desktop / Flex-col en mobile) */}
                <div 
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 md:gap-4 transition-transform duration-500 ease-out"
                  style={{
                    transform: hoveredId === q.id ? 'translateX(12px)' : 'translateX(0px)'
                  }}
                >
                  {/* Texto base de la pregunta */}
                  <span className={`text-xs sm:text-base md:text-lg font-light tracking-wide transition-colors duration-300 ${hoveredId === q.id ? 'text-white/90' : 'text-white/50'}`}>
                    {q.text}
                  </span>
                  
                  {/* Texto destacado (Astonpoliz / Negrita) */}
                  <span 
                    className="text-sm sm:text-lg md:text-2xl font-aston tracking-widest font-bold leading-relaxec transition-all duration-500"
                    style={{ 
                      color: hoveredId === q.id ? '#white' : '#e2e8f0',
                      textShadow: hoveredId === q.id ? `0 0 20px ${q.color}40` : 'none'
                    }}
                  >
                    {q.boldPart}
                  </span>
                </div>

                {/* Indicador estético derecho flotante (Opcional premium) */}
                <div 
                  className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/30 transition-all duration-500"
                  style={{
                    borderColor: hoveredId === q.id ? `${q.color}50` : 'rgba(255,255,255,0.1)',
                    color: hoveredId === q.id ? q.color : 'rgba(255,255,255,0.3)',
                    transform: hoveredId === q.id ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg)'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>

              </div>

              {/* Barra lateral izquierda de acento de marca */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[4px] z-20 transition-all duration-500 ease-out"
                style={{ 
                  backgroundColor: q.color,
                  boxShadow: hoveredId === q.id ? `4px 0 30px ${q.color}` : 'none',
                  transform: hoveredId === q.id ? 'scaleY(1)' : 'scaleY(0.4)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Branding Footer Sutil */}
        {/* <div className="mt-14 flex items-center justify-center opacity-15 hover:opacity-30 transition-opacity duration-700">
           <span className="text-[9px] sm:text-[10px] tracking-[0.6em] text-white uppercase font-medium">
             WeProm &middot; Market Research Excellence
           </span>
        </div> */}

      </div>
    </section>
  );
}
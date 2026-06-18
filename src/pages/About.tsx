import { useState } from 'react'; // 1. IMPORTANTE: Añade el import de useState
import { motion } from 'framer-motion';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import SectionOne from '../components/About/sectionOne';
import AboutBackedBy from '../components/About/aboutBackedBy';
import TeamSection from '../components/About/team';
import GroupSection from '../components/About/groupSection';
import WorldPresence from '../components/About/worldPresence';

import ScrollReveal from '../components/General/ScrollReveal';

import CompanySection from '../components/Home/CompanySection';


// Los componentes auxiliares se quedan fuera de la función principal

{/*
const PressLogos = () => (
  <ScrollReveal delay={0.2}>
    <div className="w-full bg-black py-10 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase w-full text-center mb-4 block text-white/50">Apariciones en prensa y medios</span>
        <span className="text-xl font-bold">REVISTA BUSINESS</span>
        <span className="text-xl font-serif italic">The Daily Press</span>
        <span className="text-xl font-sans font-black tracking-tighter">MARKETING TODAY</span>
        <span className="text-xl font-mono">Global News</span>
      </div>
    </div>
  </ScrollReveal>
);  
*/}
function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-transparent text-white w-full selection:bg-blue-500/30">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* El Hero suele ir sin ScrollReveal o con uno muy rápido para feedback inmediato */}
        <SectionOne />

        <ScrollReveal>
          <CompanySection />
        </ScrollReveal>
        
        

        <ScrollReveal direction="right">
          <WorldPresence />
        </ScrollReveal>

        <ScrollReveal>
          <GroupSection />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <TeamSection />
        </ScrollReveal>

        <ScrollReveal>
          <AboutBackedBy />
        </ScrollReveal>

        

        {/* SECCIÓN DE SEDES + BOTÓN MODAL */}
        {/* Sección final con el botón de contacto */}
        <section className="w-full bg-transparent py-14 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="down" delay={0.3}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative px-12 py-5 bg-transparent text-white font-montserrat font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 border border-white/10 shadow-2xl"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(45deg,#ff4d4d,#4d79ff,#4dff88,#fffa4d)] bg-[length:200%_200%] animate-[gradient_3s_linear_infinite]" />
                <div className="absolute inset-[2px] bg-white rounded-full z-0 group-hover:bg-black/80 transition-colors duration-500" />
                <span className="relative z-10 tracking-[0.2em] text-black group-hover:text-white transition-colors duration-500 uppercase">
                  Contáctanos ahora
                </span>
              </button>
            </ScrollReveal>
          </div>
        </section>
      </motion.main>
      

      {/* 4. MODAL FUERA DE <main> para evitar problemas de posicionamiento (Z-INDEX) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md transition-all">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-[#111] border border-white/10 p-8 rounded-3xl w-full max-w-lg relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >

            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-white/40 hover:text-white text-2xl">&times;</button>
            <h2 className="font-aston text-3xl text-white mb-2">Hablemos</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <input type="text" placeholder="Nombre" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-white" />
               <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-white" />
               <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-white"></textarea>
               <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98]">ENVIAR MENSAJE</button>
            </form>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default About;
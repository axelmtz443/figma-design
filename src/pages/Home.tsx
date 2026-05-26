import React from "react";
import Navbar from '../components/General/Navbar';
import Hero from '../components/Home/Hero';
import BackedBy from '../components/Home/BackedBy';
import Services from '../services/Services';
import ProjectResults from '../services/ProjectResults';
import Footer from '../components/General/Footer';
import BlogSection from '../components/Home/BlogSection';
import Testimonials from '../components/Home/Testimonial';
import WhoWeAre from '../components/Home/WhoWeAre';
import AboutIntro from '../components/Home/AboutIntro';
import { useNavigate } from 'react-router-dom';

// Importa el nuevo wrapper
import ScrollReveal from '../components/General/ScrollReveal';

// 💡 Definimos el tipo de dato que va a recibir Home para que TypeScript no tire error
interface HomeProps {
  isLoading: boolean;
}

function Home({ isLoading }: HomeProps) {  

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      
      {/* 💡 Volvemos a pasarle el isLoading al Hero ahora que está bien tipado */}
      <Hero isLoading={isLoading} />

      <ScrollReveal>
        <BackedBy />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectResults />
      </ScrollReveal>

      <ScrollReveal>
        <AboutIntro />
      </ScrollReveal>

      <WhoWeAre />
      
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <BlogSection />
      </ScrollReveal>

      <section className="w-full bg-transparent py-14 px-4 border-t border-white/5 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="down" delay={0.3}>
            <button 
              onClick={() => navigate('/contact')} 
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
      
      <Footer />
    </div>
  );
}

export default Home;
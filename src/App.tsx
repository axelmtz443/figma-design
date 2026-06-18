import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; 
import Loader from './components/General/Loader';
import Blog from './pages/Blog'
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import InteractiveBackground from './components/General/InteractiveBackground';

import Branding from './pages/servicesPages/branding/mainBranding';
import Audiovisual from './pages/servicesPages/audiovisual/mainAudiovisual';
import ConsultoriaDeMarketing from './pages/servicesPages/consultoria/mainConsultoria';
import MainMktDigital from './pages/servicesPages/mkt-digital/mainMktDigital';
import MarketResearch from './pages/servicesPages/market-research/mainMR';

import BlogPostPageWrapper from './pages/BlogPostPageWrapper';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Cuando la barra llega al final, marcamos que ya no está "cargando"
    const timerLoading = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    // 2. Tiempo para eliminar el Loader del DOM después de su animación de subida
    const timerShow = setTimeout(() => {
      setShowLoader(false); 
    }, 2800); 

    return () => {
      clearTimeout(timerLoading);
      clearTimeout(timerShow);
    };
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      <InteractiveBackground />

      <Routes>
        <Route path="/" element={<Home isLoading={loading} />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios" element={<Services />} />

        {/* RUTAS DE SERVICIOS */}
        <Route path="/servicios/branding" element={<Branding />} />
        <Route path="/servicios/audiovisual" element={<Audiovisual />} />
        <Route path="/servicios/consultoriademarketing" element={<ConsultoriaDeMarketing />} />
        <Route path="/servicios/marketing-digital" element={<MainMktDigital />} />
        <Route path="/servicios/investigacion-de-mercados" element={<MarketResearch />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPageWrapper />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
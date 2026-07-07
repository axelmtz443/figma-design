import React, { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Loader from './components/General/Loader';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

import InteractiveBackground from './components/General/InteractiveBackground';
import CookieBanner from './components/General/CookieBanner';
import ContactPopup from './components/General/ContactPopup';
import { ContactPopupProvider } from './context/ContactPopupContext';

// Cada página en su propio chunk: una visita solo descarga el código de la
// ruta que realmente ve, en vez de cargar el sitio completo de una sola vez.
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

const Branding = lazy(() => import('./pages/servicesPages/branding/mainBranding'));
const Audiovisual = lazy(() => import('./pages/servicesPages/audiovisual/mainAudiovisual'));
const ConsultoriaDeMarketing = lazy(() => import('./pages/servicesPages/consultoria/mainConsultoria'));
const MainMktDigital = lazy(() => import('./pages/servicesPages/mkt-digital/mainMktDigital'));
const MarketResearch = lazy(() => import('./pages/servicesPages/market-research/mainMR'));

const BlogPostPageWrapper = lazy(() => import('./pages/BlogPostPageWrapper'));
const AvisoDePrivacidad = lazy(() => import('./pages/AvisoDePrivacidad'));
const AclaratoriaLegal = lazy(() => import('./pages/AclaratoriaLegal'));
const Portafolio = lazy(() => import('./pages/Portafolio'));
const PortafolioUen = lazy(() => import('./pages/PortafolioUen'));

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
    <HelmetProvider>
    <ContactPopupProvider>
      {showLoader && <Loader />}
      <InteractiveBackground />
      <ScrollToTop />

      <Suspense fallback={null}>
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

          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/portafolio/:uen" element={<PortafolioUen />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPageWrapper />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aviso-de-privacidad" element={<AvisoDePrivacidad />} />
          <Route path="/aclaratoria-legal" element={<AclaratoriaLegal />} />
        </Routes>
      </Suspense>
      <CookieBanner />
      <ContactPopup />
    </ContactPopupProvider>
    </HelmetProvider>
  );
}

export default App;
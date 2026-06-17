import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ScrollReveal from '../../../components/General/ScrollReveal';

import HeroWeprom from './weprom/HERO';
import BrandsCarouselHero from './weprom/BrandsCarouselHero';
import MetaSection from './weprom/MetaSection';
import GoogleSection from './weprom/GoogleSection';
import InfluencerSection from './weprom/InfluencerSection';
import AudiovisualSection from './weprom/AudiovisualSection';
import ProjectResults from '../../../services/ProjectResults';
import WePromMethodology from './weprom/WePromMethodology';
import ContactMktDigital from './weprom/ContactMktDigital';

const MainMktDigital = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />

      <HeroWeprom />

      {/* Carrusel de marcas sin encabezado — continúa visualmente desde el hero */}
      <BrandsCarouselHero />

      <ScrollReveal>
        <MetaSection />
      </ScrollReveal>

      <ScrollReveal>
        <GoogleSection />
      </ScrollReveal>

      <ScrollReveal>
        <InfluencerSection />
      </ScrollReveal>

      <ScrollReveal>
        <AudiovisualSection />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectResults />
      </ScrollReveal>

      <ScrollReveal>
        <WePromMethodology />
      </ScrollReveal>

      <ScrollReveal>
        <ContactMktDigital />
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default MainMktDigital;

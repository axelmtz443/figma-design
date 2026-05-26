import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ScrollReveal from '../../../components/General/ScrollReveal';

// Componentes internos
import HeroMkt from './HeroMkt';
import SectionTwo from './sectionTwo';
import SectionTres from './sectionTres';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive';
import SectionSix from './sectionSix';
import SectionSeven from './sectionSeven';

import ProjectResults from '../../../services/ProjectResults';


const MainMktDigital = () => {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
      

      <HeroMkt />

      <ScrollReveal>
        <SectionTwo />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectResults />
      </ScrollReveal>

      {/* <ScrollReveal>
        <SectionTres />
      </ScrollReveal> */}

      <ScrollReveal>
        <SectionFour />
      </ScrollReveal>

      <ScrollReveal>
        <SectionFive />
      </ScrollReveal>

      <ScrollReveal>
        <SectionSix />
      </ScrollReveal>

      <ScrollReveal>
        <SectionSeven />
      </ScrollReveal>


      <Footer />
    </div>
  );
};

export default MainMktDigital;
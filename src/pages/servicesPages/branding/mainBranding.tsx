import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ScrollReveal from '../../../components/General/ScrollReveal';
import Hero from './Hero';
import BackedByBranding from './BackedByBranding';
import FirstImpressionCounts from './FirstImpressionCounts';
import OurServices from './OurServices';
import OurProcess from './OurProcess';
import SuccessStories from './SuccessStories';
import WhyChooseUs from './WhyChooseUs';
import ContactConsultoria from './ContactConsultoria';

const Branding = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <Hero />

      <ScrollReveal>
        <BackedByBranding />
      </ScrollReveal>

      <ScrollReveal>
        <FirstImpressionCounts/>
      </ScrollReveal>

      <ScrollReveal>
        <div id="nuestros-servicios" className="scroll-mt-24">
          <OurServices />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <OurProcess />
      </ScrollReveal>

      <ScrollReveal>
        <SuccessStories/>
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <ContactConsultoria />
      </ScrollReveal>

      <Footer />
    </main>
  );
};

export default Branding;

import React from 'react';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import Hero from '../../components/Services/Branding/Hero';
import OurProcess from '../../components/Services/Branding/OurProcess';
import WhyChooseUs from '../../components/Services/Branding/WhyChooseUs';
import ScrollReveal from '../../components/General/ScrollReveal';
import BackedByBranding from '../../components/Services/Branding/BackedByBranding';
import ContactConsultoria from '../../components/Services/Branding/ContactConsultoria';
import OurServices from '../../components/Services/Branding/OurServices';
import SuccessStories from '../../components/Services/Branding/SuccessStories';
import FirstImpressionCounts from '../../components/Services/Branding/FirstImpressionCounts';

const Branding = () => {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      {/* La sección Hero suele ir sin ScrollReveal para carga inmediata o con un delay suave */}
      <Hero />

      <ScrollReveal>
        <BackedByBranding />
      </ScrollReveal>

      <ScrollReveal>
        <FirstImpressionCounts/>
      </ScrollReveal>


      <ScrollReveal>
        <OurServices />
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
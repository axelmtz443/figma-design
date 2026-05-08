import React from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import ScrollReveal from '../../../components/General/ScrollReveal';

// Componentes internos
import HeroMR from './heroMR';
import WhyMR from './whyMR';
import ExperienciaMR from './experienciaMR';
import ContactoMR from './contactMR';
import TestimonialMR from './TestimonialMR';
import ElPoderDeLaInformacion from './QuestionsMR';
import TiposDeEstudios from './Studies';

import DatesSection from './4dates';

import OurClients from './OurClients';

export default function MarketResearch() {
    return (
        <div className="min-h-screen bg-transparent overflow-x-hidden">
            <Navbar />
            
            {/* El Hero suele ir directo para LCP (Largest Contentful Paint) */}
            <HeroMR />

            <ScrollReveal>
                <WhyMR />
            </ScrollReveal>

            <ScrollReveal>
                <ExperienciaMR />
            </ScrollReveal>

            <ScrollReveal>
                <TestimonialMR />
            </ScrollReveal>

            <ScrollReveal>
                <OurClients/>
            </ScrollReveal>

            <ScrollReveal>
                <ElPoderDeLaInformacion />
            </ScrollReveal>

            <ScrollReveal>
                <TiposDeEstudios />
            </ScrollReveal>

            <ScrollReveal>
                <DatesSection />
            </ScrollReveal>

            <ScrollReveal>
                <ContactoMR />
            </ScrollReveal>

            <Footer />
        </div>
    );
}
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../../components/General/Navbar';
import Footer from '../../../components/General/Footer';
import HeroMR from './Hero';
import TwoSectionBrands from './TwoSectionBrands';
import WhyMR from './whyMR';
import ExperienciaMR from './experienciaMR';
import ContactoMR from './contactMR';
import TestimonialMR from './TestimonialMR';
import ElPoderDeLaInformacion from './QuestionsMR';
import TiposDeEstudios from './Studies';
import DatesSection from './4dates';
import CompanySection from '../../../components/Home/CompanySection';
import MercedesBenz from './mercedesBenz';
import OurClients from './OurClients';
import CaseStudiesMR from './mercedes';


function ScrollReveal({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
        >
            {children}
        </div>
    );
}

export default function MarketResearch() {
    return (
        <div className="min-h-screen bg-transparent overflow-x-hidden">
            <Navbar />
            <HeroMR />
            <ScrollReveal><TwoSectionBrands /></ScrollReveal>
            <ScrollReveal><WhyMR /></ScrollReveal>
            <ScrollReveal><ElPoderDeLaInformacion /></ScrollReveal>
            <ScrollReveal><ExperienciaMR /></ScrollReveal>
            <ScrollReveal><TestimonialMR /></ScrollReveal>
            <ScrollReveal><OurClients /></ScrollReveal>
            
            <ScrollReveal><TiposDeEstudios /></ScrollReveal>
            <ScrollReveal><DatesSection /></ScrollReveal>
            <ScrollReveal><CompanySection /></ScrollReveal>
            <ScrollReveal><CaseStudiesMR /></ScrollReveal>
            <ScrollReveal><ContactoMR /></ScrollReveal>
            <Footer />
        </div>
    );
}
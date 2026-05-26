import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importa tu imagen aquí — reemplaza el path según tu estructura
import mercedesImg from '../../../images/mercedesPhoto.png';

interface CaseStudy {
    id: number;
    logo: string;
    brand: string;
    image: string | any;
    accentColor: string;
    objetivos: string;
    resultados: string[];
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        brand: 'Mercedes-Benz',
        image: mercedesImg,
        accentColor: '#c5362e',
        objetivos:
            'Conocer la viabilidad de una alianza estratégica fusionando los puntos de venta de las concesionarias Mercedes-Benz con Chrysler a nivel nacional.',
        resultados: [
            'Se evaluó la Percepción de las Marcas y las Preferencias de los Consumidores.',
            'Se identifican los Nichos de Clientes y sus Hábitos de consumo.',
            'Se validó la Viabilidad Comercial de la Fusión de los Puntos de Venta.',
        ],
    },
    // Puedes añadir más casos aquí siguiendo la misma estructura
];

const CaseStudiesMR = () => {
    const [active, setActive] = useState<number>(0);
    const study = caseStudies[active];

    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <h2 className="font-aston text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight mb-4">
                        Casos de Éxito
                    </h2>
                    <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
                        Proyectos reales con resultados medibles para marcas líderes en sus industrias.
                    </p>
                </motion.div>

                {/* Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={study.id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-[2rem] overflow-hidden"
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}
                    >
                        {/* Accent bar top */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[2px] z-10"
                            style={{
                                background: `linear-gradient(90deg, ${study.accentColor}, transparent 60%)`,
                            }}
                        />

                        <div className="flex flex-col lg:flex-row">

                            {/* Left — Content */}
                            <div className="relative z-10 flex flex-col justify-center gap-7 p-8 sm:p-10 lg:p-12 lg:w-[55%]">

                                {/* Brand header */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                        }}
                                    >
                                        <img
                                            src={study.logo}
                                            alt={study.brand}
                                            className="w-6 h-6 object-contain rounded-2xl"
                                        />
                                    </div>
                                    <span className="font-bold text-lg sm:text-xl tracking-tight">
                                        {study.brand}
                                    </span>
                                </div>

                                {/* Objetivos */}
                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
                                        style={{ color: study.accentColor }}
                                    >
                                        Objetivos:
                                    </p>
                                    <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed">
                                        {study.objetivos}
                                    </p>
                                </div>

                                {/* Resultados */}
                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                                        style={{ color: study.accentColor }}
                                    >
                                        Resultados:
                                    </p>
                                    <ul className="flex flex-col gap-2.5">
                                        {study.resultados.map((r, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                                                className="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                                            >
                                                <span
                                                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                    style={{ background: study.accentColor }}
                                                />
                                                {r}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right — Image */}
                            <div className="relative lg:w-[45%] min-h-[260px] sm:min-h-[320px] lg:min-h-0 overflow-hidden">
                                {/* Gradient overlay left (blend with content) */}
                                <div
                                    className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none hidden lg:block"
                                    style={{
                                        background: 'linear-gradient(to right, rgba(8,8,8,0.95), transparent)',
                                    }}
                                />
                                {/* Gradient overlay bottom (mobile) */}
                                <div
                                    className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none lg:hidden"
                                    style={{
                                        background: 'linear-gradient(to bottom, rgba(8,8,8,0.9), transparent)',
                                    }}
                                />
                                <motion.img
                                    src={study.image}
                                    alt={study.brand}
                                    className="w-full h-full object-cover object-center"
                                    initial={{ scale: 1.06 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ minHeight: '100%' }}
                                />
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots navigator (scales with more cases) */}
                {caseStudies.length > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {caseStudies.map((c, i) => (
                            <button
                                key={c.id}
                                onClick={() => setActive(i)}
                                className="transition-all duration-300"
                                style={{
                                    width: active === i ? '28px' : '8px',
                                    height: '8px',
                                    borderRadius: '999px',
                                    background: active === i ? '#c5362e' : 'rgba(255,255,255,0.2)',
                                }}
                                aria-label={`Case ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default CaseStudiesMR;
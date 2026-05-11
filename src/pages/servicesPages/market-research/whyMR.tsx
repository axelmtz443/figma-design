import { motion, type Variants } from 'framer-motion';
import { Users, BarChart2, ClipboardList } from 'lucide-react';

import section3Bg from '../../../images/marketResearch/section3.png';

const features = [
    {
        icon: Users,
        title: 'Toma de decisiones',
        description:
            'Con la información y los datos tangibles que proporciona la Investigación de Mercados, podrá desarrollar, mejorar o adaptar con éxito su empresa o proyecto de negocio, para satisfacer las necesidades reales de sus clientes.',
        color: '#E05A4E',
    },
    {
        icon: BarChart2,
        title: 'Competitividad',
        description:
            'Al analizar a la competencia y comprender sus estrategias, atributos, valores añadidos e incluso sus debilidades, la investigación de mercados permitirá a su empresa, producto o servicio diferenciarse y ganar mayor participación en el mercado.',
        color: '#3B82F6',
    },
    {
        icon: ClipboardList,
        title: 'Validación del proyecto',
        description:
            'Con bases sólidas basadas en la percepción del mercado y la información del sector, tendrá la certeza del éxito o la viabilidad del proyecto incluso antes de ejecutarlo, o de ser necesario, la investigación de mercado le brindará las herramientas para modificar los objetivos comerciales.',
        color: '#EAB308',
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export default function WhyMR() {
    return (
        <section className="w-full pt-20 pb-10 sm:pt-28 sm:pb-8 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-start">

                    {/* Left column */}
                    <motion.div
                        className="w-full lg:w-[42%]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-aston text-5xl sm:text-6xl md:text-6xl leading-[1.05] tracking-tight mb-8"
                        >
                            ¿Por qué hacer Investigación de Mercados?
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-white/80 text-sm sm:text-base leading-relaxed"
                        >
                            Invertir en investigación de mercado es la forma más inteligente y precisa de tomar decisiones empresariales, ya sea para un nuevo proyecto o si está considerando un cambio o implementación importante, con investigación de mercados tendrá la confianza y la información necesaria para implementar las estrategias adecuadas y alcanzar sus objetivos.
                        </motion.p>
                    </motion.div>

                    {/* Right column — Feature cards */}
                    <motion.div
                        className="w-full lg:w-[58%] flex flex-col gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => {
                            const IconComp = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="relative pl-10"
                                >
                                    {/* Card con borde gradiente */}
                                    <div
                                        className="relative rounded-2xl p-[1.5px] transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, ${feature.color} 0%, transparent 40%, transparent 60%, ${feature.color}40 100%)`,
                                        }}
                                    >
                                        <div className="rounded-2xl bg-neutral-950 px-8 py-6 sm:py-7">
                                            <h3 className="font-bold text-xl sm:text-2xl mb-3 text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-white/50 text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Ícono flotante sobre el borde izquierdo */}
                                    <div
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center z-10"
                                        style={{
                                            background: '#0a0a0a',
                                            border: `1.5px solid ${feature.color}`,
                                        }}
                                    >
                                        <IconComp size={22} color={feature.color} strokeWidth={1.5} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
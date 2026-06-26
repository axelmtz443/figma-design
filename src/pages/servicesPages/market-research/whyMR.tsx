import { motion, type Variants } from 'framer-motion';
import { Users, BarChart2, ClipboardList } from 'lucide-react';

import section3Bg from '../../../images/marketResearch/section3.png';

const features = [
    {
        icon: Users,
        title: 'Toma de decisiones',
        description: 'Con la información y los datos tangibles que proporciona la Investigación de Mercados, podrá desarrollar, mejorar o adaptar con éxito su empresa o proyecto de negocio, para satisfacer las necesidades reales de sus clientes.',
        color: '#E05A4E',
    },
    {
        icon: BarChart2,
        title: 'Competitividad',
        description: 'Al analizar a la competencia y comprender sus estrategias, atributos, valores añadidos e incluso sus debilidades, la investigación de mercados permitirá a su empresa, producto o servicio diferenciarse y ganar mayor participación en el mercado.',
        color: '#3B82F6',
    },
    {
        icon: ClipboardList,
        title: 'Validación del proyecto',
        description: 'Con bases sólidas basadas en la percepción del mercado y la información del sector, tendrá la certeza del éxito o la viabilidad del proyecto incluso antes de ejecutarlo, o de ser necesario, la investigación de mercado le brindará las herramientas para modificar los objetivos comerciales.',
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
        <section className="w-full pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-10 lg:pb-8 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-start">

                    <motion.div
                        className="w-full lg:w-[42%]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-aston text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-4 sm:mb-6 lg:mb-8"
                        >
                            ¿Por qué hacer Investigación de Mercados?
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-bold"
                        >
                            Decide con datos. No con suposiciones.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="text-white text-sm sm:text-base leading-relaxed pt-6 sm:pt-8 lg:pt-10"
                        >
                            Cada decisión de negocio que se toma sin información tiene un costo. La investigación de mercados convierte la incertidumbre en <b>claridad para que actúes con fundamentos y no con corazonadas.</b>
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-[58%] flex flex-col gap-4 sm:gap-5 lg:gap-6"
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
                                    className="relative pl-8 sm:pl-10"
                                >
                                    <div
                                        className="relative rounded-2xl p-[1.5px] transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, ${feature.color} 0%, transparent 40%, transparent 60%, ${feature.color}40 100%)`,
                                        }}
                                    >
                                        <div className="rounded-2xl bg-neutral-950 px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-7">
                                            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center z-10"
                                        style={{
                                            background: '#0a0a0a',
                                            border: `1.5px solid ${feature.color}`,
                                        }}
                                    >
                                        <IconComp size={16} className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]" color={feature.color} strokeWidth={1.5} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-10 sm:mt-12 lg:mt-16">
                <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#88221d] text-white rounded-full font-bold text-[11px] sm:text-[13px] uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex justify-center">
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#c5362e] transition-colors duration-300">
                        Solicitar Cotización                        
                    </span>
                </button>
            </div>

        </section>
    );
}
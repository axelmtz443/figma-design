import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

const studies = [
    {
        id: 'cualitativos',
        title: 'Estudios cualitativos',
        description:
            'Nos permiten entender a profundidad a las personas: qué piensan, qué sienten, qué les gusta, qué les molesta y por qué toman ciertas decisiones, a través de este tipo de estudios, obtendremos insights y comprensión.',
        items: [
            'Focus groups',
            'Entrevistas a profundidad',
            'Mystery shopper',
            'Neuromarketing',
        ],
        accentColor: '#E05A4E',
    },
    {
        id: 'cuantitativos',
        title: 'Estudios Cuantitativos',
        description:
            'Su principal objetivo es tomar decisiones con datos duros, utilizando estadísticas, gráficos y resultados comparables en el tiempo. Son ideales cuando necesitas respuestas claras como: ¿cuántos?, ¿con qué frecuencia?, ¿qué porcentaje?, ¿cuál es la tendencia?',
        items: [
            'Encuestas online',
            'Paneles de consumidores',
            'Estudios de mercado',
            'Análisis estadístico',
        ],
        accentColor: '#1096D6',
    },
];

const GRADIENT = 'linear-gradient(135deg, #ba3f35, #5fa1cf, #7eb387, #e5ad43)';

export default function TiposDeEstudios() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) =>
        setOpenId(prev => (prev === id ? null : id));

    return (
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white">
            <div className="max-w-5xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
                    {studies.map((study) => {
                        const isOpen = openId === study.id;

                        return (
                            <div key={study.id} className="flex flex-col">

                                {/* Wrapper con borde degradado que envuelve TODO */}
                                <div
                                    style={{
                                        padding: '1px',
                                        borderRadius: '1rem',
                                        background: isOpen ? GRADIENT : 'rgba(255,255,255,0.08)',
                                    }}
                                >
                                    {/* Inner container oscuro */}
                                    <div
                                        className="rounded-[calc(1rem-1px)] overflow-hidden"
                                        style={{ backgroundColor: '#111112' }}
                                    >

                                        {/* Card content */}
                                        <div className="p-7 sm:p-8">
                                            <h3 className="font-bold text-xl sm:text-2xl mb-4 text-white">
                                                {study.title}
                                            </h3>

                                            <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed mb-6">
                                                {study.description}
                                            </p>

                                            <button
                                                onClick={() => toggle(study.id)}
                                                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                                                aria-label={isOpen ? 'Cerrar' : 'Ver más'}
                                            >
                                                {isOpen
                                                    ? <ChevronDown size={16} className="text-white/70" />
                                                    : <ChevronRight size={16} className="text-white/70" />
                                                }
                                            </button>
                                        </div>

                                        {/* Drawer — dentro del mismo contenedor */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key={`drawer-${study.id}`}
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    {/* Separador sutil */}
                                                    <div className="h-px mx-7 bg-white/10" />

                                                    <ul className="px-7 sm:px-8 py-5 flex flex-col gap-3">
                                                        {study.items.map((item, i) => (
                                                            <motion.li
                                                                key={i}
                                                                initial={{ opacity: 0, x: -8 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: i * 0.07, duration: 0.3 }}
                                                                className="flex items-center gap-3 text-white/70 text-sm"
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white/40" />
                                                                {item}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <button className="text-white/70 text-sm sm:text-base hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/30 hover:decoration-white/60">
                        Obtenga una consulta gratuita
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
import { motion, type Variants } from 'framer-motion';
import section3Bg from '../../../images/marketResearch/section3.png';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

export default function ExperienciaMR() {
    return (
        <section className="w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent font-montserrat text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="relative rounded-[2rem] overflow-hidden border border-white/5 group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                >
                    {/* Contenedor de Imagen de Fondo con Efecto de Profundidad */}
                    <div className="absolute inset-0 z-0">
                        <motion.img 
                            src={section3Bg} 
                            alt="Fondo Experiencia Global" 
                            className="w-full h-full object-cover opacity-90 mix-blend-lighten"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        {/* Overlay Gradiente Radial: Ilumina el centro (bombilla) y oscurece los bordes para legibilidad */}
                        <div 
                            className="absolute inset-0" 
                            style={{
                                background: `radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.95) 100%)`
                            }} 
                        />
                    </div>
                    
                    {/* Capa de Brillo Dinámico al Hover */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Contenido Principal */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 p-8 sm:p-16 lg:p-20 items-center">

                        {/* Columna Izquierda: Título y Contexto */}
                        <div className="flex flex-col">
                            <motion.h2
                                variants={fadeUp}
                                className="font-aston text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-8"
                            >
                                Agencia de Investigación de Mercados con Experiencia Global:
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="text-white/70 text-base sm:text-lg leading-relaxed max-w-md"
                            >
                                En <span className="text-white font-semibold">WeProm</span> contamos con más de 35 años de experiencia
                                realizando proyectos de investigación de mercados para
                                diferentes industrias y sectores.
                            </motion.p>
                        </div>

                        {/* Columna Derecha: Acción y Detalle */}
                        <div className="flex flex-col gap-8">
                            <motion.div variants={fadeUp}>
                                <motion.button 
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm font-bold tracking-widest uppercase hover:border-white/40 transition-all duration-300"
                                >
                                    Habla con uno de nuestros expertos
                                </motion.button>
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                className="text-white/60 text-sm sm:text-base leading-relaxed"
                            >
                                Desde la validación de una idea de negocio hasta el análisis del comportamiento del consumidor en otros países, nos encargamos del proyecto de principio a fin, descubriendo oportunidades en México, Estados Unidos, Centroamérica y Europa.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
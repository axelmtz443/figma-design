import { motion } from 'framer-motion';
import mercedesImg from '../../../images/marketResearch/mercedesCar.png';
import mercedesLogo from '../../../images/marketResearch/mercedezBenzLogo.png';

const MercedesBenz = () => {
    const listVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.3 + i * 0.1, duration: 0.5 }
        })
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-transparent text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto rounded-[28px] sm:rounded-[32px] lg:rounded-[40px] relative group p-[1.5px] overflow-hidden shadow-2xl"
                style={{
                    background: "linear-gradient(135deg, #e6332a 0%, #009fe3 100%)"
                }}
            >
                <div className="bg-[#0a0a0a] rounded-[27px] sm:rounded-[31px] lg:rounded-[39px] overflow-hidden relative z-10">
                    <div className="absolute -top-24 -right-24 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-blue-500/10 blur-[100px] lg:blur-[120px] rounded-full pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Contenido de Texto */}
                        <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3 sm:gap-4 pb-2 sm:pb-3"
                            >
                                <img 
                                    src={mercedesLogo} 
                                    alt="Mercedes-Benz Success Case" 
                                    className="w-40 sm:w-52 md:w-64 h-auto object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]"
                                />
                            </motion.div>

                            <div className="space-y-2 !mt-1 sm:!mt-2">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-100">Objetivos:</h4>
                                <p className="text-gray-300 font-light leading-relaxed max-w-md text-sm sm:text-base">
                                    Conocer la viabilidad de una alianza estratégica fusionando los puntos de venta de las concesionarias Mercedes-Benz con Chrysler a nivel nacional.
                                </p>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-100">Resultados:</h4>
                                <ul className="space-y-4 sm:space-y-6">
                                    {[
                                        "Se evaluó la Percepción de las Marcas y las Preferencias de los Consumidores.",
                                        "Se identifican los Nichos de Clientes y sus Hábitos de consumo.",
                                        "Se validó la Viabilidad Comercial de la Fusión de los Puntos de Venta."
                                    ].map((item, index) => (
                                        <motion.li 
                                            key={index}
                                            custom={index}
                                            variants={listVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="flex gap-3 sm:gap-4 items-start"
                                        >
                                            <span className="text-blue-500 font-bold text-sm sm:text-base">{index + 1}.</span>
                                            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-snug">
                                                {item}
                                            </p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Imagen del Carro */}
                        <div className="w-full md:w-1/2 h-full relative">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "circOut" }}
                                className="relative z-10 p-3 sm:p-4 md:p-0 h-full flex items-center"
                            >
                                <img 
                                    src={mercedesImg} 
                                    alt="Mercedes-Benz Success Case" 
                                    className="w-full h-auto object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] md:rounded-none md:rounded-l-[40px] shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent hidden md:block" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default MercedesBenz;
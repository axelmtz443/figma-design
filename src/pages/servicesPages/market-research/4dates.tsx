import React from 'react';
import { motion } from 'framer-motion';

// Importación de imágenes
import cardRed from '../../../images/marketResearch/card-red.png';
import cardBlue from '../../../images/marketResearch/card-blue.png';
import cardGreen from '../../../images/marketResearch/card-green.png';
import cardYellow from '../../../images/marketResearch/card-yellow.png';

const stats = [
    {
        id: 1,
        
        image: cardRed,
        borderColor: "hover:border-red-500"
    },
    {
        id: 2,
        
        image: cardBlue,
        borderColor: "hover:border-blue-500"
    },
    {
        id: 3,
        
        image: cardGreen,
        borderColor: "hover:border-green-500"
    },
    {
        id: 4,
        
        image: cardYellow,
        borderColor: "hover:border-yellow-500"
    }
];

const DatesSection = () => {
    return (
        <section className="py-20 bg-transparent text-white px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-normal text-center mb-16 tracking-tight font-aston"
                >
                    Datos que debes conocer
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative h-[400px] rounded-3xl overflow-hidden border border-transparent transition-all duration-300 ${stat.borderColor} group`}
                        >
                            {/* Background Image con efecto Zoom al hacer hover */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${stat.image})` }}
                            />
                            
                            {/* Overlay degradado para legibilidad */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                            
                            {/* Contenido del texto */}
                            
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-16"
                >
                    <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95">
                        Habla con uno de nuestros expertos
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default DatesSection;
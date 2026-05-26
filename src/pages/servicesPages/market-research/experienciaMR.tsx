import { motion } from 'framer-motion';

// Importación del fondo (la imagen del foco/bombilla)
import fondoBombilla from '../../../images/section3.png';

const ExperienciaMR = () => {
  return (
    <section className="relative w-full py-6 bg-transparent overflow-hidden flex justify-center items-center">
      <div className="container mx-auto px-6 flex justify-center">

        {/* Tarjeta principal: la imagen dicta las dimensiones */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative w-full max-w-7xl"
        >
          {/* Imagen de fondo: define el tamaño real de la tarjeta, sin recortes */}
          <img
            src={fondoBombilla}
            alt="Fondo Experiencia"
            className="w-full h-auto object-contain select-none block rounded-[2rem]"
          />


          {/* Contenido encima de la imagen - posicionado absolute para no alterar dimensiones */}
          <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">

            {/* Columna Izquierda: Título + Descripción corta */}
            <div className="flex flex-col justify-center max-w-xs md:max-w-sm">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-snug mb-5 !font-aston"
                style={{ fontFamily: 'var(--font-aston), sans-serif' }}
              >
                Agencia de Investigación de Mercados con Experiencia Global:
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-zinc-300 text-sm md:text-base font-light leading-relaxed !font-montserrat"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                En WeProm contamos con más de 35 años de experiencia realizando proyectos de investigación de mercados para
                diferentes industrias y sectores, descubriendo y analizando oportunidades de negocio en México, Estados
                Unidos, Centroamérica y Europa.
              </motion.p>
            </div>

            {/* Columna Derecha: Botón CTA + Descripción larga */}
            <div className="flex flex-col justify-end gap-8 max-w-xs md:max-w-sm lg:max-w-md">

              {/* Botón */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <button
                  className="bg-zinc-800/70 hover:bg-zinc-700/80 border border-white/20 text-white text-sm md:text-base font-montserrat px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 whitespace-nowrap flex justify-end"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  Habla con uno de nuestros expertos
                </button>
              </motion.div>

              {/* Descripción larga */}
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-zinc-300 text-sm md:text-base font-light leading-relaxed !font-montserrat"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Desde la validación de una idea de negocio, la identificación de la ubicación ideal para su
                expansión, hasta el análisis del comportamiento del consumidor en otros países, nos encargamos del
                proyecto de principio a fin, apoyándolo durante todo el proceso.
              </motion.p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienciaMR;
import { motion } from 'framer-motion';
import grupoLogo from '../../images/About/LOGOGWP.png';
import XERYUS from '../../images/About/groupSection/XERYUS_Blanco.png';
import SmarKeting from '../../images/About/groupSection/SMARTKETING_BCO.png';
import WePromBlanco from '../../images/About/groupSection/LOGOBLANCO.png';
import Cypron from '../../images/About/groupSection/CYPRON_BCO.png';

function GroupSection() {
    const marcas = [
        { id: 1, src: XERYUS, alt: 'Xeryus' },
        { id: 2, src: SmarKeting, alt: 'Smar+keting' },
        { id: 3, src: WePromBlanco, alt: 'WeProm' },
        { id: 4, src: Cypron, alt: 'Cypron' },
    ];

    return (
        <section className="w-full overflow-x-hidden bg-transparent py-10 sm:py-16 md:py-20 px-3 sm:px-8">
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-6 sm:mb-8 text-center"
                >
                    <h2 className="font-aston text-[20px] sm:text-[34px] lg:text-[50px] text-white leading-[1.15] sm:leading-[1.1] tracking-tight mb-4 sm:mb-8 max-w-[95%] sm:max-w-full">
                        WeProm Marketing es la unidad especializada en Marketing Estratégico en <span className="text-white border-b border-white/30">Grupo WeProm</span>.
                    </h2>
                    <img 
                        src={grupoLogo} 
                        alt="Grupo WeProm" 
                        className="h-16 sm:h-28 lg:h-40 w-auto mb-4 sm:mb-6 object-contain" 
                    />
                    <p className="font-montserrat text-white/60 tracking-[0.2em] uppercase text-[10px] sm:text-sm">Unidad Especializada</p>
                </motion.div>

                {/* Sección de Marcas - Responsive con wrap */}
                <div className="w-full mb-10 sm:mb-16 md:mb-24 py-6 sm:py-10 border-y border-white/5">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 md:gap-16">
                        {marcas.map((marca) => (
                            <div key={marca.id} className="flex items-center justify-center max-w-[70px] sm:max-w-none">
                                <img 
                                    src={marca.src} 
                                    alt={marca.alt} 
                                    className="h-6 sm:h-10 md:h-12 w-auto object-contain" 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nuestro Propósito */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-8 md:gap-12"
                >
                    {/* Título izquierda */}
                    <div className="flex-shrink-0 text-center sm:text-left">
                        <h2 className="font-aston text-[32px] sm:text-[50px] lg:text-[72px] text-white leading-[1.0] tracking-tight">
                            Nuestro<br />Propósito
                        </h2>
                    </div>

                    {/* Barra vertical (desktop) */}
                    <div
                        className="hidden sm:block w-[4px] rounded-full flex-shrink-0 self-stretch"
                        style={{ background: 'linear-gradient(to bottom, #facc15, #4ade80, #60a5fa, #ef4444)' }}
                    />

                    {/* Barra horizontal (mobile) */}
                    <div
                        className="flex sm:hidden w-full h-[4px] rounded-full"
                        style={{ background: 'linear-gradient(to right, #facc15, #4ade80, #60a5fa, #ef4444)' }}
                    />

                    {/* Párrafo */}
                    <div className="flex items-center">
                        <p className="font-montserrat text-white/70 text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-xl text-center sm:text-left">
                            Existimos para impulsar el crecimiento de cualquier marca y de las personas detrás de ella, porque sabemos que un negocio que prospera hace prosperar a su gente y al mundo.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default GroupSection;
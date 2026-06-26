import { motion } from 'framer-motion';
import grupoLogo from '../../images/About/LOGOGWP.png';
import XERYUS from '../../images/About/groupSection/XERYUS_Blanco.png';
import SmarKeting from '../../images/About/groupSection/SMARTKETING_BCO.png';
import WePromBlanco from '../../images/About/groupSection/LOGOBLANCO.png';
import Cypron from '../../images/About/groupSection/CYPRON_BCO.png';

function GroupSection() {
    return (
        <section className="w-full bg-transparent py-18 sm:py-20 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto pl-0 sm:pl-16 lg:pl-24">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-8 text-center"
                >
                    <h2 className="font-aston text-[30px] sm:text-[38px] lg:text-[50px] text-white leading-[1.05] tracking-tight mb-8 max-w-[90%]">
                        WeProm Marketing es la unidad especializada en Marketing Estratégico en <span className="text-white border-b border-white/30">Grupo WeProm</span>.
                    </h2>
                    <img src={grupoLogo} alt="Grupo WeProm" className="h-24 sm:h-32 lg:h-40 w-auto mb-6 object-contain" />
                    <p className="font-montserrat text-white/60 tracking-[0.2em] uppercase text-xs sm:text-sm">Unidad Especializada</p>
                </motion.div>

                {/* Sección de Marcas Estática */}
                <div className="w-full mb-24 py-10 border-y border-white/5">
                    <div className="grid grid-cols-2 sm:flex sm:flex-nowrap justify-center items-center gap-y-8 gap-x-4 sm:gap-16">
                        <div className="flex items-center justify-center w-full sm:w-[220px]">
                            <img src={XERYUS} alt="Xeryus" className="h-14 sm:h-12 w-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-full sm:w-[220px]">
                            <img src={SmarKeting} alt="Smar+keting" className="h-14 sm:h-12 w-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-full sm:w-[260px]">
                            <img src={WePromBlanco} alt="WeProm" className="h-14 sm:h-12 w-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center w-full sm:w-[220px]">
                            <img src={Cypron} alt="Cypron" className="h-14 sm:h-12 w-auto object-contain" />
                        </div>
                    </div>
                </div>

                {/* Nuestro Propósito — layout horizontal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8 sm:gap-12"
                >
                    {/* Título izquierda */}
                    <div className="flex-shrink-0 text-center sm:text-left">
                        <h2 className="font-aston text-[40px] sm:text-[56px] lg:text-[72px] text-white leading-[1.0] tracking-tight">
                            Nuestro<br />Propósito
                        </h2>
                    </div>

                    {/* Barra de colores vertical (desktop) */}
                    <div
                        className="hidden sm:block w-[4px] rounded-full flex-shrink-0 self-stretch"
                        style={{ background: 'linear-gradient(to bottom, #facc15, #4ade80, #60a5fa, #ef4444)' }}
                    />

                    {/* Barra de colores horizontal (mobile) */}
                    <div
                        className="flex sm:hidden w-full h-[4px] rounded-full"
                        style={{ background: 'linear-gradient(to right, #facc15, #4ade80, #60a5fa, #ef4444)' }}
                    />

                    {/* Párrafo derecha */}
                    <div className="flex items-center">
                        <p className="font-montserrat text-white/70 text-[16px] sm:text-[20px] lg:text-[22px] leading-relaxed max-w-xl">
                            Existimos para impulsar el crecimiento de cualquier marca y de las personas detrás de ella, porque sabemos que un negocio que prospera hace prosperar a su gente y al mundo.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default GroupSection;
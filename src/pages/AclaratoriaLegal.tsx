import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

const sections = [
  {
    num: '1',
    title: 'Naturaleza y propósito de este aviso',
    text: 'El presente aviso legal aplica a todos los materiales —digitales, impresos, visuales o audiovisuales— mediante los cuales Grupo WeProm, WeProm Marketing y/o Corporativo Grupo VM exhiben logotipos, marcas, denominaciones comerciales, referencias de proyectos, o imágenes institucionales pertenecientes a terceros.\n\nDichas marcas y referencias se utilizan exclusivamente para comunicar la trayectoria y experiencia profesional del Grupo y de sus directivos y/o asociados en el sector de la mercadotecnia, la publicidad, el desarrollo de negocios y la comunicación estratégica. Su uso no implica patrocinio, aval, asociación comercial, ni relación de ninguna otra naturaleza con las empresas titulares de dichas marcas.',
  },
  {
    num: '2',
    title: 'Condiciones que validan este uso',
    text: 'El Grupo declara que el uso de las marcas referenciadas cumple todas las siguientes condiciones:\n\ni. Exclusividad curricular. Las marcas se exhiben únicamente como referencia profesional, participaciones, asesorías, proyectos o relaciones comerciales en las que el Grupo, sus directivos, fundadores y/o aliados estratégicos estuvieron involucrados como prestadores de servicios, proveedores, consultores, asociados o colaboradores.\n\nii. Ausencia de fin de lucro. No se comercializan productos ni servicios bajo las marcas ajenas referenciadas, ni se obtiene remuneración directa por su exhibición.\n\niii. Ausencia de dolo o mala fe. No se pretende inducir al público a creer que existe una relación comercial actual, patrocinio, aval o endorsement por parte de ninguna de las marcas referenciadas.\n\niv. Uso no distorsionante. Las marcas se presentan tal y como son reconocidas en el mercado, sin modificación ni alteración que pudiera desvirtuar su imagen o reputación.\n\nv. Proporcionalidad. La referencia a cada marca guarda proporción con el nivel real de involucramiento del Grupo, sin tergiversar la naturaleza de la relación mantenida.',
  },
  {
    num: '3',
    title: 'Limitación de responsabilidad y aclaración de vínculos',
    text: 'Las relaciones descritas corresponden a encargos y participaciones que en su momento pudieron estar sujetas a acuerdos de confidencialidad; la mera referencia curricular a la existencia de dicha relación no constituye una violación a dichos acuerdos, ya que no revela información técnica, operativa, datos específicos, ni alguna estratégica de marketing comercial protegida.',
  },
  {
    num: '4',
    title: 'Procedimiento ante aclaraciones',
    text: 'Cualquier empresa o persona titular de derechos sobre marcas, logotipos o imágenes aquí referenciados que considere que su uso excede los términos del presente aviso, podrá dirigir su solicitud por escrito a:\n\njuridico.corporativo@grupoweprom.com',
  },
];

export default function AclaratoriaLegal() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-36 pb-24">
        <div className="mb-12">
          <div className="w-12 h-[3px] bg-[#e6af41] mb-5" />
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide leading-tight mb-4" style={{ fontFamily: "'Astonpoliz', sans-serif" }}>
            Aclaratoria sobre<br />uso de marcas
          </h1>
          <p className="text-white/60 text-base leading-relaxed mt-4 max-w-2xl">
            Uso Referencial de Marcas, Portafolio, Logotipos e Imagen Comercial de Terceros —<br />
            <span className="text-white/40">Grupo WeProm / WeProm Marketing / Corporativo Grupo VM.</span>
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.num} className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e6af41]/15 border border-[#e6af41]/30 flex items-center justify-center">
                <span className="text-[#e6af41] text-xs font-bold">{s.num}</span>
              </div>
              <div>
                <h2 className="text-white font-semibold text-base mb-3">{s.title}</h2>
                <p className="text-white/70 text-[15px] leading-relaxed whitespace-pre-line">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-white/30 text-sm border-t border-white/10 pt-8">
          Este aviso forma parte integral de todos los materiales corporativos, de presentación y de posicionamiento digital de Grupo WeProm, WeProm Marketing y Corporativo Grupo VM (Grupo Ventura Michel). Guadalajara, Jalisco, México.
        </p>
      </main>
      <Footer />
    </div>
  );
}

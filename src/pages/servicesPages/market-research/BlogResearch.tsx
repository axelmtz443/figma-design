import BlogCard from '../../../components/Home/BlogCard';
import { useState } from 'react';



const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    title: 'Cómo la integración multicadena está dando forma al futuro de la web3',
    date: 'December 7, 2024',
    category: 'Technology',
    glowColor: 'blue' as const,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    title: 'Cómo la integración multicadena está dando forma al futuro de la web3',
    date: 'December 7, 2024',
    category: 'Marketing',
    glowColor: 'green' as const,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
    title: 'Cómo la integración multicadena está dando forma al futuro de la web3',
    date: 'December 7, 2024',
    category: 'Business',
    glowColor: 'purple' as const,
  },
];

function BlogSection() {

  const [isOn, setIsOn] = useState(true);

  return (
    <section className={`w-full pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ${isOn ? 'bg-transparent' : 'bg-[#050505]'}`}>
      <div className="max-w-[1400px] mx-auto">

        
        
        <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
          <div className="text-left flex-1">

            

            <h2 
              className={`font-aston mb-3 sm:mb-4 transition-colors duration-500 leading-tight text-[36px] sm:text-[44px] lg:text-[56px] ${isOn ? 'text-white' : 'text-white/20'}`}
              style={{ fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              Conoce más sobre Investigación de Mercados
            </h2>
            
            <p 
              className={`font-montserrat max-w-3xl transition-colors duration-500 text-[20px] sm:text-[22px] lg:text-[23px] ${isOn ? 'text-soft-gray' : 'text-white/10'}`}
              style={{ lineHeight: '28px', letterSpacing: '0.01em' }}
            >
              Entérate de XYZ de investigación
            </p>
          </div>

          {/* Botón — alineado a la izquierda en móvil */}
          <div className="flex-shrink-0 self-start sm:self-center">
            <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent border border-white/30 text-white font-montserrat font-medium text-[14px] sm:text-[16px] transition-all duration-300 hover:border-white/60 hover:bg-white/5 flex items-center gap-2 whitespace-nowrap">
              <span>Ver Blog</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid de Cards — 1 col móvil, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              category={post.category}
              glowColor={post.glowColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogSection;
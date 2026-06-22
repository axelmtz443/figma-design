import { useState, FormEvent } from 'react';
import logoImage from '../../images/ISOTIPE.png';

function CallToAction() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className={`w-full py-4 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px] transition-colors duration-700`}>

      <p 
        className={`font-montserrat text-white/70 text-[14px] sm:text-[16px] md:text-[18px] text-center mb-6 sm:mb-8 antialiased max-w-[600px] transition-all duration-500`}
        style={{ lineHeight: '150%', letterSpacing: '0.01em' }}
      >
        ¿Quieres aprender más sobre los temas más relevantes en Marketing y Publicidad?
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-stretch sm:items-center relative z-20 w-full max-w-[500px] sm:max-w-none sm:w-auto px-2 sm:px-0">
        
        <div className="relative p-[1.5px] rounded-full group w-full sm:w-[350px] transition-all duration-300 focus-within:scale-[1.05] overflow-hidden">
          
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,rgba(255,255,255,0.8)_180deg,transparent_210deg)] group-hover:animate-rotate-slow group-focus-within:animate-rotate-slow opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute inset-0 bg-border-grad rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce correo electrónico"
            className="relative w-full px-6 py-3 bg-[#0a0a0a] rounded-full text-white font-montserrat text-sm placeholder-white/30 outline-none block z-10"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-white text-black hover:bg-gray-200 px-10 py-3 rounded-full font-montserrat text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg"
        >
          Suscribirme
        </button>
      </form>

    </section>
  );
}

export default CallToAction;
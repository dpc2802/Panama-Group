import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background (Placeholder) */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 bg-neutral-800">
        {/* PLACEHOLDER: Reemplazar con el video real */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Contenido Central */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        {/* Logo Grande en el Centro */}
        <div className="mb-6 relative w-[280px] h-[100px] md:w-[500px] md:h-[180px]">
          <Image 
            src="/images/logo-white.png" 
            alt="Panama Group GC" 
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light mt-4 font-sans">
          One Company for All Your Property Needs
        </p>
        
        {/* Botón Outline */}
        <a href="#contact" className="border-2 border-white text-white px-8 py-3 text-sm md:text-base uppercase tracking-widest font-heading hover:bg-white hover:text-primary transition-colors">
          Request a Quote
        </a>
      </div>

      {/* Indicador de Scroll Down */}
      <div className="absolute bottom-8 z-20 flex flex-col items-center">
        <span className="text-white text-xs uppercase tracking-[0.2em] mb-2 opacity-80">Scroll</span>
        <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
}

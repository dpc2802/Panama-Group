"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="hero" className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-900">
      {/* Video Background Optimized */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        poster="/images/gallery/project-1-cover.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src="/hero-video.mov" type="video/mp4" />
      </video>
      
      {/* Cinematic Vignette Overlay instead of basic black */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{ 
          background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%), linear-gradient(to bottom, rgba(15, 23, 42, 0.2) 0%, transparent 40%, rgba(15, 23, 42, 0.95) 100%)' 
        }}
      />

      {/* Contenido Central (Staggered Fade Up) */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Apple-like custom ease
          className="mb-8 relative w-[280px] h-[100px] md:w-[500px] md:h-[180px]"
        >
          <Image 
            src="/images/logo-white.png" 
            alt="Panama Group GC" 
            fill
            sizes="(max-width: 768px) 280px, 500px"
            className="object-contain"
            priority // Critical for LCP
          />
        </motion.div>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light font-sans tracking-tight"
          style={{ fontOpticalSizing: "auto" }}
        >
          One Company for All Your Property Needs
        </motion.p>
        
        {/* Botón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="#contact" 
            className="relative overflow-hidden group inline-flex items-center justify-center border border-white/30 bg-white/5 backdrop-blur-md text-white px-10 py-4 text-xs md:text-sm uppercase tracking-[0.2em] font-heading transition-all duration-500 hover:bg-white hover:text-primary hover:border-white shadow-2xl"
          >
            <span className="relative z-10 font-bold">Request a Quote</span>
          </a>
        </motion.div>
      </div>

      {/* Indicador de Scroll Premium */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-12 z-20 flex flex-col items-center pointer-events-none"
      >
        <span className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 opacity-50 font-bold">Scroll</span>
        
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: [0.65, 0, 0.35, 1] 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

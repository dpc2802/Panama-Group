"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex items-center justify-between text-white">
        
        {/* Mobile Logo (Visible solo en móvil a la izquierda) */}
        <div className="lg:hidden flex-shrink-0">
          <Image 
            src="/images/logo-white.png" 
            alt="Panama Group GC" 
            width={130} 
            height={40} 
            className="object-contain"
            priority
          />
        </div>

        {/* Mobile Menu Button (Se muestra solo en móvil a la derecha) */}
        <button 
          className="lg:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={32} strokeWidth={1.5} />
        </button>

        {/* Desktop - Links Izquierdos */}
        <nav className="hidden lg:flex flex-1 justify-end items-center gap-8 pr-12 text-sm uppercase tracking-widest font-heading">
          <a href="#about" className="hover:opacity-75 transition-opacity">About</a>
          <a href="#services" className="hover:opacity-75 transition-opacity flex items-center gap-1">
            Services <ChevronDown size={16} strokeWidth={3} />
          </a>
        </nav>

        {/* Desktop - Center Logo */}
        <div className="hidden lg:block flex-shrink-0">
          <Image 
            src="/images/logo-white.png" 
            alt="Panama Group GC" 
            width={150} 
            height={50} 
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop - Links Derechos y Acciones */}
        <div className="hidden lg:flex flex-1 items-center pl-12 justify-between">
          <nav className="flex items-center gap-8 text-sm uppercase tracking-widest font-heading">
            <a href="#work" className="hover:opacity-75 transition-opacity">Work</a>
            <a href="#contact" className="hover:opacity-75 transition-opacity">Contact</a>
          </nav>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#contact" className="bg-white text-black px-6 py-3 text-sm font-heading uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-sm">
              Request a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-primary flex flex-col text-white lg:hidden overflow-y-auto"
          >
            
            {/* Menu Header */}
            <div className="px-6 py-6 flex items-center justify-between">
              <div className="flex-shrink-0">
                <Image 
                  src="/images/logo-white.png" 
                  alt="Panama Group GC" 
                  width={100} 
                  height={30} 
                  className="object-contain"
                />
              </div>
              <button 
                className="p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>
            
            {/* Menu Links */}
            <nav className="flex flex-col mt-4 px-6 text-xl font-heading uppercase tracking-widest">
              <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="py-5 border-b border-white/10 hover:text-accent transition-colors">
                Home
              </a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="py-5 border-b border-white/10 hover:text-accent transition-colors">
                About
              </a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="py-5 border-b border-white/10 hover:text-accent transition-colors flex justify-between items-center">
                Services <ChevronDown size={20} strokeWidth={2} />
              </a>
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="py-5 border-b border-white/10 hover:text-accent transition-colors">
                Work
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-5 border-b border-white/10 hover:text-accent transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Link */}
            <div className="mt-8 px-6 text-center">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-heading uppercase tracking-widest hover:text-accent transition-colors">
                Request a Quote
              </a>
            </div>

            {/* Bottom Contact & Social */}
            <div className="mt-auto px-6 pb-10 pt-12 flex flex-col gap-6">
              <div className="flex flex-col gap-2 text-sm text-gray-300 font-medium">
                <a href="tel:+" className="hover:text-white transition-colors">[PHONE PENDING]</a>
                <a href="mailto:contact@panamagroupgc.com" className="hover:text-white transition-colors">contact@panamagroupgc.com</a>
              </div>

              <div className="flex items-center justify-center gap-6 mt-4">
                <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const sections = [
  { id: "hero", label: "Start" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Us" },
  { id: "work", label: "Projects" },
  { id: "testimonials", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use middle of screen as detection point
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Hide on the hero section (first 50vh approx)
      if (window.scrollY < window.innerHeight * 0.5) {
        setActiveSection("hero");
        setIsVisible(false);
        return;
      } else {
        setIsVisible(true);
      }

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-3 md:gap-4"
        >
          {/* Connecting line background */}
          <div className="absolute top-2 bottom-2 w-px bg-gray-300/50 -z-10" />

          {sections.map((section, index) => {
            // Skip the "hero" dot entirely in the bar since it's hidden there anyway
            if (section.id === "hero") return null;

            const isActive = activeSection === section.id;
            
            return (
              <div key={section.id} className="relative group flex items-center justify-center w-5 h-5 md:w-6 md:h-6">
                
                {/* Hover/Active Label Tooltip (Hidden on mobile to save space) */}
                <div className={`
                  hidden md:block absolute right-8 px-3 py-1.5 rounded bg-primary text-white text-xs font-bold tracking-widest uppercase
                  pointer-events-none whitespace-nowrap shadow-xl transition-all duration-300 origin-right
                  ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}
                `}>
                  {section.label}
                  {/* Little triangle arrow */}
                  <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-primary" />
                </div>
                
                {/* The Dot */}
                <button
                  onClick={() => scrollTo(section.id)}
                  className="relative flex items-center justify-center w-full h-full focus:outline-none"
                  aria-label={`Scroll to ${section.label}`}
                >
                  {/* Outer ring for active */}
                  {isActive && (
                    <motion.div
                      layoutId="active-scroll-ring"
                      className="absolute inset-0 rounded-full border-2 border-accent bg-white/20 backdrop-blur-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Inner dot */}
                  <div 
                    className={`rounded-full transition-all duration-300 ${
                      isActive ? "bg-accent w-1.5 h-1.5 md:w-2 md:h-2" : "bg-gray-400 w-1.5 h-1.5 md:w-2 md:h-2 group-hover:bg-primary group-hover:scale-150"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

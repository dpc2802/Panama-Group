"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

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

  useEffect(() => {
    const handleScroll = () => {
      // Use middle of screen as detection point
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Special case for top
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
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
    // Initial check
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
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center gap-4">
      {/* Connecting line background */}
      <div className="absolute top-2 bottom-2 w-px bg-gray-300/50 -z-10" />

      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        
        return (
          <div key={section.id} className="relative group flex items-center justify-center w-6 h-6">
            
            {/* Hover/Active Label Tooltip */}
            <div className={`
              absolute right-8 px-3 py-1.5 rounded bg-primary text-white text-xs font-bold tracking-widest uppercase
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
                  className="absolute inset-0 rounded-full border-2 border-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Inner dot */}
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive ? "bg-accent scale-100" : "bg-gray-400 scale-100 group-hover:bg-primary group-hover:scale-150"
                }`}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

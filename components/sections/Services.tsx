"use client";

import { useState } from "react";
import { services, type ServiceItem } from "@/lib/services";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function Services() {
  const [activeTab, setActiveTab] = useState<"residential" | "landlords">("residential");
  const [showAll, setShowAll] = useState(false);

  const handleTabChange = (tab: "residential" | "landlords") => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            What We Do
          </span>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-primary uppercase">
            Our Services
          </h2>
        </div>

        {/* Dynamic Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full inline-flex shadow-sm border border-border relative">
            <button
              onClick={() => handleTabChange("residential")}
              className={`relative z-10 px-6 py-3 rounded-full text-sm md:text-base font-bold transition-colors ${
                activeTab === "residential" ? "text-white" : "text-gray-500 hover:text-primary"
              }`}
            >
              Residential & Commercial
            </button>
            <button
              onClick={() => handleTabChange("landlords")}
              className={`relative z-10 px-6 py-3 rounded-full text-sm md:text-base font-bold transition-colors ${
                activeTab === "landlords" ? "text-white" : "text-gray-500 hover:text-primary"
              }`}
            >
              Landlords & Managers
            </button>
            
            {/* Animated Tab Background */}
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-accent rounded-full transition-transform duration-300 ease-out ${
                activeTab === "residential" ? "translate-x-0" : "translate-x-full left-1"
              }`}
            ></div>
          </div>
        </div>

        {/* Swipeable Carousel Container */}
        <div className="relative">
          
          {/* Fading Edges for Mobile */}
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 md:hidden pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 hide-scrollbar"
            >
              {(activeTab === "residential" ? services.residentialAndCommercial : services.landlordsAndManagers)
                .slice(0, showAll ? undefined : 6)
                .map((service, index) => (
                  <ServiceCard key={index} service={service} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Swipe Indicator for mobile */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-4 text-muted text-sm font-medium">
            <ChevronLeft size={16} /> Swipe to see more <ChevronRight size={16} />
          </div>

          {/* Desktop "View More" Button */}
          {!showAll && (
            <div className="hidden md:flex justify-center mt-12">
              <button 
                onClick={() => setShowAll(true)}
                className="bg-primary text-white px-8 py-4 text-sm font-heading font-bold uppercase tracking-widest hover:bg-accent transition-colors shadow-lg"
              >
                View More Services
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="flex flex-col bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group min-w-[85vw] md:min-w-0 snap-center">
      {/* Image Area */}
      <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
        {service.image ? (
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm bg-gray-200">
            [Image Pending]
          </div>
        )}
        {/* Dark subtle overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 z-10 pointer-events-none flex items-center justify-center">
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h4 className="text-xl font-heading font-bold uppercase text-primary mb-3 line-clamp-2">
          {service.title}
        </h4>
        <p className="text-muted font-sans text-sm md:text-base mb-6 flex-grow line-clamp-3">
          {service.description || `Professional ${service.title.toLowerCase()} services tailored to your property needs, ensuring high-quality results and lasting durability.`}
        </p>
        
        {/* Learn More Link */}
        <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-wide group-hover:gap-3 transition-all mt-auto w-fit">
          Learn More <ArrowRight size={16} strokeWidth={3} />
        </a>
      </div>
    </div>
  );
}

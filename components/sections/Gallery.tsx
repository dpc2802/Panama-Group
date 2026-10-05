"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Project = {
  id: number;
  title: string;
  category: string;
  coverImage: string;
  galleryImages: string[];
  description?: string;
};

export function Gallery() {
  // We structure each project to have a cover image for the grid, and an array of images for the modal
  const projects: Project[] = [
    { id: 1, title: "Transformation 1", category: "Video Tour", coverImage: "/images/gallery/project-1.mp4", galleryImages: ["/images/gallery/project-1.mp4"] },
    { id: 2, title: "Transformation 2", category: "Video Tour", coverImage: "/images/gallery/project-2.mp4", galleryImages: ["/images/gallery/project-2.mp4"] },
    { id: 3, title: "Transformation 3", category: "Video Tour", coverImage: "/images/gallery/project-3.mp4", galleryImages: ["/images/gallery/project-3.mp4"] },
    { id: 4, title: "Transformation 4", category: "Video Tour", coverImage: "/images/gallery/project-4.mp4", galleryImages: ["/images/gallery/project-4.mp4"] },
    { id: 5, title: "Transformation 5", category: "Video Tour", coverImage: "/images/gallery/project-5.mp4", galleryImages: ["/images/gallery/project-5.mp4"] },
    { id: 6, title: "Transformation 6", category: "Video Tour", coverImage: "/images/gallery/project-6.mp4", galleryImages: ["/images/gallery/project-6.mp4"] },
    { id: 7, title: "Transformation 7", category: "Video Tour", coverImage: "/images/gallery/project-7.mp4", galleryImages: ["/images/gallery/project-7.mp4"] },
    { id: 8, title: "Transformation 8", category: "Video Tour", coverImage: "/images/gallery/project-8.mp4", galleryImages: ["/images/gallery/project-8.mp4"] },
    { id: 9, title: "Transformation 9", category: "Video Tour", coverImage: "/images/gallery/project-9.mp4", galleryImages: ["/images/gallery/project-9.mp4"] },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.galleryImages.length) % selectedProject.galleryImages.length);
    }
  };

  const handleVideoHover = (e: React.MouseEvent<HTMLVideoElement>, play: boolean) => {
    const video = e.currentTarget;
    if (play) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <section id="work" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary uppercase">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        {/* Gallery Grid (Cover Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openLightbox(project)}
              className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-200 border border-border"
            >
              {/* Fallback text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <span className="font-heading font-bold text-2xl opacity-50 text-center px-4">{project.title}</span>
              </div>

              {/* Cover Video */}
              <video 
                src={`${project.coverImage}#t=0.001`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => handleVideoHover(e, true)}
                onMouseLeave={(e) => handleVideoHover(e, false)}
              />

              {/* Permanent Play Icon Indicator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-black/40 backdrop-blur-sm p-4 rounded-full text-white shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} fill="currentColor" strokeWidth={1} className="ml-1" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white p-3 rounded-full text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
                <span className="text-white font-bold uppercase tracking-widest mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  Play Video
                </span>
              </div>

              {/* Mobile "Tap to View" Badge */}
              <div className="md:hidden absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 z-20 shadow-lg pointer-events-none">
                <Maximize2 size={12} strokeWidth={3} className="text-accent" />
                <span>Tap to view</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && projects.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="border-2 border-primary text-primary px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View More Projects
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-[60] bg-black/50 p-2 rounded-full"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Content Container */}
            <div 
              className="relative w-full h-[75vh] md:h-[85vh] max-w-5xl flex items-center justify-center mt-[-5vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <video 
                  src={selectedProject.galleryImages[currentImageIndex]}
                  controls
                  className="w-full h-full object-contain"
                  autoPlay
                  playsInline
                />
              </motion.div>
            </div>

            {/* Project Info Banner (Descriptions removed as requested) */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
              <div className="max-w-7xl mx-auto flex flex-col items-start">
                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                  {selectedProject.category}
                </span>
                <h3 className="text-white text-3xl md:text-4xl font-heading font-black uppercase drop-shadow-lg">
                  {selectedProject.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

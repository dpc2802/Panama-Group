"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
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
    { 
      id: 1, 
      title: "Custom Deck Construction", 
      category: "Carpentry & Exterior",
      coverImage: "/images/gallery/project-1-cover.jpg", 
      description: "Every great project starts with a solid structure. At Panama Group GC, we build it right from day one.",
      galleryImages: [
        "/images/gallery/project-1-1.jpg", 
        "/images/gallery/project-1-2.jpg",
        "/images/gallery/project-1-cover.jpg"
      ] 
    },
    { 
      id: 2, 
      title: "Deck Framing & Rebuild", 
      category: "Carpentry & Exterior",
      coverImage: "/images/gallery/project-2-8.jpg", 
      description: "From the ground up. 🏗️ This deck was completely rebuilt to create a strong, safe, and modern outdoor space. Quality materials. Solid structure. Clean finish.",
      galleryImages: [
        "/images/gallery/project-2-1.jpg", 
        "/images/gallery/project-2-2.jpg",
        "/images/gallery/project-2-3.jpg",
        "/images/gallery/project-2-4.jpg",
        "/images/gallery/project-2-5.jpg",
        "/images/gallery/project-2-6.jpg",
        "/images/gallery/project-2-7.jpg",
        "/images/gallery/project-2-8.jpg"
      ] 
    },
    { 
      id: 3, 
      title: "Basement Stairwell Remodel", 
      category: "Interior Remodeling",
      coverImage: "/images/gallery/project-3-5.jpg", 
      description: "Turning outdated spaces into modern living. Every project is built with precision, quality, and attention to detail. If you’re ready to renovate your home, Panama Group GC is here to make it happen.",
      galleryImages: [
        "/images/gallery/project-3-5.jpg",
        "/images/gallery/project-3-1.jpg",
        "/images/gallery/project-3-2.jpg",
        "/images/gallery/project-3-3.jpg",
        "/images/gallery/project-3-4.jpg",
        "/images/gallery/project-3-6.jpg"
      ] 
    },
    { 
      id: 4, 
      title: "Color Change Transformation", 
      category: "Video Tour",
      coverImage: "/images/gallery/project-4.mp4", 
      description: "Are you looking for a color change that completely transforms your space? Sometimes, it all starts with a simple decision… to change. We take care of turning that into a result you can truly feel. Contact us and transform your space.",
      galleryImages: ["/images/gallery/project-4.mp4"] 
    },
    { 
      id: 5, 
      title: "Complete Transformation", 
      category: "Video Tour",
      coverImage: "/images/gallery/project-5.mp4", 
      description: "15 years without maintenance… and this is the transformation. Finish matters. Details matter. DM us for your next project.",
      galleryImages: ["/images/gallery/project-5.mp4"] 
    },
    { 
      id: 6, 
      title: "Garage Door Transformation", 
      category: "Video Tour",
      coverImage: "/images/gallery/project-6.mp4", 
      description: "Garage door transformation. Prep. Detail. Finish. We don’t just paint… we transform.",
      galleryImages: ["/images/gallery/project-6.mp4"] 
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // Prevent background scrolling
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
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openLightbox(project)}
              className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-200 border border-border"
            >
              {/* Fallback text while image is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <span className="font-heading font-bold text-2xl opacity-50 text-center px-4">{project.title}</span>
                <span className="text-xs uppercase tracking-widest mt-2">Waiting for media...</span>
              </div>

              {/* Cover Image or Video */}
              {project.coverImage.endsWith('.mp4') ? (
                <video 
                  src={project.coverImage}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <Image 
                  src={project.coverImage} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white p-3 rounded-full text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 size={24} strokeWidth={2.5} />
                </div>
                <span className="text-white font-bold uppercase tracking-widest mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.coverImage.endsWith('.mp4') ? 'Play Video' : 'View Gallery'}
                </span>
                <span className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  {project.galleryImages.length} {project.galleryImages.length === 1 && project.coverImage.endsWith('.mp4') ? 'video' : 'images'}
                </span>
              </div>

              {/* Mobile "Tap to View" Badge (Hidden on Desktop) */}
              <div className="md:hidden absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 z-20 shadow-lg pointer-events-none">
                <Maximize2 size={12} strokeWidth={3} className="text-accent" />
                <span>Tap to view</span>
              </div>
            </div>
          ))}
        </div>

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
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-50 bg-black/50 p-2 rounded-full"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Content Container */}
            <div 
              className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image or Video */}
              <motion.div 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                {selectedProject.galleryImages[currentImageIndex].endsWith('.mp4') ? (
                  <video 
                    src={selectedProject.galleryImages[currentImageIndex]}
                    controls
                    className="w-full h-full object-contain"
                    autoPlay
                    playsInline
                  />
                ) : (
                  <Image 
                    src={selectedProject.galleryImages[currentImageIndex]}
                    alt={`${selectedProject.title} media ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                )}
              </motion.div>

              {/* Navigation Arrows (Only show if > 1 image) */}
              {selectedProject.galleryImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition-colors backdrop-blur-md"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition-colors backdrop-blur-md"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-bold tracking-widest backdrop-blur-md">
                    {currentImageIndex + 1} / {selectedProject.galleryImages.length}
                  </div>
                </>
              )}
            </div>

            {/* Project Info Banner */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
              <div className="max-w-7xl mx-auto flex flex-col items-start">
                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                  {selectedProject.category}
                </span>
                <h3 className="text-white text-3xl md:text-4xl font-heading font-black uppercase mb-3 drop-shadow-lg">
                  {selectedProject.title}
                </h3>
                {selectedProject.description && (
                  <p className="text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed drop-shadow-md">
                    {selectedProject.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

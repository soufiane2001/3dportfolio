"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Play, ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "Full-featured ecommerce platform with cash on delivery",
    image: "https://www.soufianeboutatssdev.com/static/media/1.457e1f4f60a3020387ce.PNG",

    demoUrl: "https://bdmstore.store/ecom/index.php",
    repoUrl: "https://github.com/yourusername/portfolio",
    tech: ["PHP", "CSS", "MySQL"],
  },
  {
    id: 2,
    title: "Reby Art Portfolio",
    description: "Elegant portfolio for a French painter",
    image: "https://www.soufianeboutatssdev.com/static/media/ChatGPT%20Image%205%20sept.%202025,%2012_44_53.46fa327e456ac6aae500.png",
    demoUrl: "https://rebyart.vercel.app/",
    repoUrl: "https://github.com/soufiane2001/rebyart",
    tech: ["React", "JavaScript"],
  },
  {
    id: 3,
    title: "HighUp Counselling",
    description: "Professional psychology services website",
    image: "https://www.soufianeboutatssdev.com/static/media/1762903031465.0eaf4043ab58828ccb73.jpg",
    demoUrl: "https://www.highupcounselling.ca/",
    tech: ["WordPress"],
  },
  {
    id: 4,
    title: "Cash Management App",
    description: "Mobile app for expense tracking",
    image: "https://www.soufianeboutatssdev.com/static/media/pr7.7bd31365952b72ee7971.JPG",
    videoUrl: "https://www.youtube.com/embed/F3Pjh49qdzE?si=0fTnYNxOnF-oEWd8",
    repoUrl: "https://github.com/soufiane2001/cashappv4",
    tech: ["React Native", "Firebase"],
  },
  {
    id: 5,
    title: "Patient Management",
    description: "Healthcare management system",
    image: "https://www.soufianeboutatssdev.com/static/media/120248.3e5d1fd628a8084aa9c7.png",
    videoUrl: "https://www.youtube.com/embed/FiacG53K6fs?si=3VGAVs-gx6k6hi1_",
    tech: ["Java"],
  },
  {
    id: 6,
    title: "Horea Formation",
    description: "Training center website",
    image: "https://www.soufianeboutatssdev.com/static/media/horea.3cf389a7f0b8c722a282.PNG",
    demoUrl: "https://www.horea-formation.com/",
    tech: ["Next.js"],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="portfolio" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff6b00]/5 rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="relative flex items-center justify-center min-h-[600px]">
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-8 z-40 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff6b00]/20 hover:border-[#ff6b00]/50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-8 z-40 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff6b00]/20 hover:border-[#ff6b00]/50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full max-w-5xl flex items-center justify-center">
            {projects.map((project, index) => {
              const diff = (index - currentIndex + projects.length) % projects.length;
              let position = "hidden";
              if (diff === 0) position = "center";
              else if (diff === 1) position = "right";
              else if (diff === projects.length - 1) position = "left";

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{
                    x: position === "center" ? 0 : position === "right" ? "50%" : "-50%",
                    scale: position === "center" ? 1 : 0.8,
                    opacity: position === "center" ? 1 : position === "hidden" ? 0 : 0.3,
                    zIndex: position === "center" ? 30 : 10,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute w-full max-w-lg ${
                    position === "hidden" ? "pointer-events-none" : ""
                  }`}
                >
                  <div className="glass-card overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                   
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff6b00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/50 mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.videoUrl && (
                          <button
                            onClick={() => setVideoModal(project.videoUrl!)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#ff6b00] text-white text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all"
                          >
                            <Play size={14} fill="white" /> Video
                          </button>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all"
                          >
                            <ExternalLink size={14} /> Demo
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all"
                          >
                            <Github size={14} /> Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-[#ff6b00]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModal(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-[#ff6b00] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                src={videoModal}
                title="Project Video"
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Projects;
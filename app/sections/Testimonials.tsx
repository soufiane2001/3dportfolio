"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "I had the pleasure of working with Soufiane on my website project, and I couldn't be more satisfied with the results. His professionalism, creativity, and technical expertise are outstanding!",
    name: "Karim Washington",
    role: "Animator of Programmes",
    email: "karim1980wash@gmail.com",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/25fe0452-9320-4752-80dd-44fdc2737b22-soufianeboutatssdev-com/assets/images/images_10.png",
  },
  {
    id: 2,
    text: "Soufiane did an amazing job building our software. He understood our needs perfectly, delivered on time, and the final product works flawlessly. Highly recommended!",
    name: "Hind El hassouni",
    role: "CEO Agence",
    email: "elhassounihind39@gmail.com",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/25fe0452-9320-4752-80dd-44fdc2737b22-soufianeboutatssdev-com/assets/icons/hinda-removebg-preview_5f69e9cd6477863d8007-3.png",
  },
  {
    id: 3,
    text: "Working with Soufiane on the Reby Art website has been a fantastic experience! He took our artistic vision and brought it to life with stunning design and functionality.",
    name: "Michel Reby",
    role: "Painter",
    email: "michelreby@gmail.com",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/25fe0452-9320-4752-80dd-44fdc2737b22-soufianeboutatssdev-com/assets/images/images_10.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/5 rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title text-white">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff6b00]/20 hover:border-[#ff6b00]/50 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff6b00]/20 hover:border-[#ff6b00]/50 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-[#ff6b00]/30 mx-auto mb-6" />

              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                &ldquo;{testimonialsData[currentIndex].text}&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#ff6b00]/30 mb-4">
                  <img
                    src={testimonialsData[currentIndex].avatar}
                    alt={testimonialsData[currentIndex].name}
                   
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {testimonialsData[currentIndex].name}
                </h4>
                <p className="text-[#ff6b00] text-sm font-medium">
                  {testimonialsData[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-[#ff6b00]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Testimonials;
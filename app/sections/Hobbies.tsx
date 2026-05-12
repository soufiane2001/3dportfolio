"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Play, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const destinations = [
  {
    country: "France",
    flag: "🇫🇷",
    city: "Paris",
    color: "#002395",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",
  },
  {
    country: "Poland",
    flag: "🇵🇱",
    city: "Kraków",
    color: "#DC143C",
    image: "https://images.unsplash.com/photo-1524821978239-5a23a0afd0b4?w=600&q=80",
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    city: "Istanbul",
    color: "#E30A17",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80",
  },
];

const goalkeepingVideos = [
  { id: 1, videoUrl: "" },
  { id: 2, videoUrl: "" },
  { id: 3, videoUrl: "" },
];

const Hobbies = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [videoModal, setVideoModal] = useState<string | null>(null);

  return (
    <section id="hobbies" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle">{t.hobbies.tag}</p>
          <h2 className="section-title text-white">
            {t.hobbies.title} <span className="text-gradient">{t.hobbies.titleGradient}</span>
          </h2>
        </motion.div>

        {/* Travelling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#ff6b00]" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t.hobbies.travelTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.country}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden h-64 cursor-default"
              >
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Country overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl">{dest.flag}</span>
                    <h4 className="text-xl font-black text-white">{dest.country}</h4>
                  </div>
                  <div className="flex items-center gap-1 text-white/60 text-sm">
                    <MapPin size={12} />
                    <span>{dest.city}</span>
                  </div>
                </div>

                {/* Color accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: dest.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Goalkeeping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center">
              <span className="text-xl">🧤</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{t.hobbies.goalkeepingTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goalkeepingVideos.map((vid, i) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden h-56 glass-card flex items-center justify-center cursor-pointer"
                onClick={() => vid.videoUrl && setVideoModal(vid.videoUrl)}
              >
                {/* Gradient background placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 via-black to-[#ff6b00]/10" />

                {vid.videoUrl ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-[#ff6b00] flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.5)]"
                  >
                    <Play size={24} fill="white" className="text-white ml-1" />
                  </motion.div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center gap-3 text-white/30">
                    <div className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center">
                      <Play size={24} className="ml-1" />
                    </div>
                    <span className="text-xs uppercase tracking-widest">{t.hobbies.videoComingSoon}</span>
                  </div>
                )}

                {/* Video number badge */}
                <div className="absolute top-4 left-4 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold">
                  #{vid.id}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video modal */}
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
                title="Goalkeeping video"
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

export default Hobbies;

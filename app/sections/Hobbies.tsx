"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Play } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const destinations = [
  {
    country: "France",
    flag: "🇫🇷",
    city: "Paris",
    color: "#002395",
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778620626/WhatsApp_Image_2026-05-13_at_12.16.24_AM_i8bxy9.jpg",
  },
  {
    country: "Poland",
    flag: "🇵🇱",
    city: "Warsaw",
    color: "#DC143C",
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778620626/WhatsApp_Image_2026-05-13_at_12.16.24_AM_1_hew2qz.jpg",
  },
  {
    country: "Sweden",
    flag: "🇸🇪",
    city: "Stockholm",
    color: "#006AA7",
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778620626/WhatsApp_Image_2026-05-13_at_12.16.25_AM_1_jt0aze.jpg",
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    city: "Istanbul",
    color: "#E30A17",
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778620626/WhatsApp_Image_2026-05-13_at_12.16.25_AM_gizzai.jpg",
  },
];

const goalkeepingVideos = [
  { id: 1, videoUrl: "https://res.cloudinary.com/dzkx1z6lo/video/upload/v1778620266/AQMbb_51XyDTmvvxaS2aYge2GBA9TPEbZINjIo_xk9pzaa9U-j7SgnMHzVhjVXiN3CdRHHXBeiVLRUgEpswX8cugb7vbE5md_usyi8g.mp4" },
];

const Hobbies = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="flex justify-center">
            {goalkeepingVideos.map((vid, i) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="relative rounded-2xl overflow-hidden glass-card w-full max-w-xs"
                style={{ aspectRatio: "9/16" }}
              >
                {vid.videoUrl ? (
                  <video
                    src={vid.videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    loop
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 via-black to-[#ff6b00]/10" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/30">
                      <div className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center">
                        <Play size={22} className="ml-1" />
                      </div>
                      <span className="text-xs uppercase tracking-widest">{t.hobbies.videoComingSoon}</span>
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 text-xs font-bold">
                      #{vid.id}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hobbies;

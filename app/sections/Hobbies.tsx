"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Play } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const destinationsMeta = [
  { flag: "🇫🇷", color: "#002395", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778620626/WhatsApp_Image_2026-05-13_at_12.16.24_AM_i8bxy9.jpg" },
  { flag: "🇵🇱", color: "#DC143C", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778620626/WhatsApp_Image_2026-05-13_at_12.16.24_AM_1_hew2qz.jpg" },
  { flag: "🇸🇪", color: "#006AA7", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778620626/WhatsApp_Image_2026-05-13_at_12.16.25_AM_1_jt0aze.jpg" },
  { flag: "🇹🇷", color: "#E30A17", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778620626/WhatsApp_Image_2026-05-13_at_12.16.25_AM_gizzai.jpg" },
];

const goalkeepingVideos = [
  { id: 1, videoUrl: "https://res.cloudinary.com/dzkx1z6lo/video/upload/v1778620266/AQMbb_51XyDTmvvxaS2aYge2GBA9TPEbZINjIo_xk9pzaa9U-j7SgnMHzVhjVXiN3CdRHHXBeiVLRUgEpswX8cugb7vbE5md_usyi8g.mp4" },
];

export default function Hobbies() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return <section id="hobbies" className="okc-section"><div className="container" ref={ref}>
    <div className="okc-section-intro"><p className="section-subtitle">{t.hobbies.tag}</p><h2 className="section-heading">{t.hobbies.title} <span>{t.hobbies.titleGradient}</span></h2></div>
    <div className="mb-16"><h3 className="mb-8 text-2xl font-normal">{t.hobbies.travelTitle}</h3><div className="okc-travel-grid">{t.hobbies.destinations.map((dest, i) => {
      const meta = destinationsMeta[i];
      return <motion.div key={dest.country} className="okc-travel-card" initial={false} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: i * .1 }}>
        <Image src={meta.image} alt={dest.country} fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5"><div className="mb-1 flex items-center gap-2"><span>{meta.flag}</span><h4 className="text-lg font-normal">{dest.country}</h4></div><p className="flex items-center gap-1 text-sm text-white/70"><MapPin size={12} />{dest.city}</p></div>
      </motion.div>;
    })}</div></div>
    <div className="grid items-start gap-10 md:grid-cols-[1fr_20rem]"><h3 className="text-2xl font-normal">🧤 {t.hobbies.goalkeepingTitle}</h3><div>{goalkeepingVideos.map(vid => <div key={vid.id} className="relative aspect-[9/16] w-full max-w-xs overflow-hidden rounded-3xl">
      {vid.videoUrl ? <video src={vid.videoUrl} className="h-full w-full object-cover" controls preload="none" playsInline loop /> : <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/5 text-white/50"><Play size={22} /><span>{t.hobbies.videoComingSoon}</span><span>#{vid.id}</span></div>}
    </div>)}</div></div>
  </div></section>;
}

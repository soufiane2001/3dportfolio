"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const avatars = [
  "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1774100204/Capture_d_%C3%A9cran_2026-03-21_153506_jwe7b6.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/25fe0452-9320-4752-80dd-44fdc2737b22-soufianeboutatssdev-com/assets/icons/hinda-removebg-preview_5f69e9cd6477863d8007-3.png",
  "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1774100279/Capture_d_%C3%A9cran_2026-03-21_153739_i6zdr8.png",
  "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1774102249/7554263D-7EF4-4902-9373-49CDC1218EC8_1__edited_eajjbn.avif",
];

const emails = [
  "karim1980wash@gmail.com",
  "elhassounihind39@gmail.com",
  "michelreby@gmail.com",
  "degreff@hotmail.com",
];

export default function Testimonials() {
  const { t, locale } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });
  const reduceMotion = useReducedMotion();
  const items = t.testimonials.items;
  const next = useCallback(() => { setCurrentIndex(prev => (prev + 1) % items.length); }, [items.length]);
  const prev = () => { setCurrentIndex(prev => (prev - 1 + items.length) % items.length); };
  useEffect(() => { const interval = setInterval(next, 6000); return () => clearInterval(interval); }, [next]);
  const current = items[currentIndex];

  return <section id="testimonials" className="okc-section"><div className="container" ref={ref}>
    <div className="okc-section-intro"><p className="section-subtitle">{t.testimonials.tag}</p><h2 className="section-heading">{t.testimonials.title} <span>{t.testimonials.titleGradient}</span></h2></div>
    <div className="okc-testimonial-stage">
      <AnimatePresence mode="wait" initial={false}><motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .3 }}>
        <blockquote className="okc-testimonial-quote">&ldquo;{current.text}&rdquo;</blockquote>
        <div className="okc-testimonial-person"><div className="okc-testimonial-avatar"><Image src={avatars[currentIndex]} alt={current.name} fill sizes="56px" className="object-cover" /></div><div><h3>{current.name}</h3><p>{current.role}</p><p>{emails[currentIndex]}</p></div></div>
      </motion.div></AnimatePresence>
      <div className="okc-testimonial-controls"><div className="flex gap-1">{items.map((_, i) => <button key={i} type="button" onClick={() => setCurrentIndex(i)} aria-label={`${t.testimonials.tag} ${i + 1}`} aria-current={i === currentIndex ? "true" : undefined} className="flex h-11 w-8 items-center justify-center"><span className={`h-1.5 w-1.5 rounded-full ${i === currentIndex ? "bg-primary" : "bg-white/30"}`} /></button>)}</div><div className="okc-arrow-buttons"><button type="button" onClick={prev} aria-label={locale === "en" ? "Previous testimonial" : locale === "ar" ? "الرأي السابق" : "Avis précédent"}><ChevronLeft size={18} /></button><button type="button" onClick={next} aria-label={locale === "en" ? "Next testimonial" : locale === "ar" ? "الرأي التالي" : "Avis suivant"}><ChevronRight size={18} /></button></div></div>
    </div>
  </div></section>;
}

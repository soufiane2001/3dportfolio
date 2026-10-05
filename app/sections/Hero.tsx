"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { pageCopy } from "../i18n/page-copy";
import { watchDecorativeScene } from "../lib/decorative-scene";

const heroCopy = {
  fr: { title: "Développeur Web Freelance", market: "France, Canada & International", name: "Soufiane Boutatss — développement web sur mesure", quote: "Demander un devis", work: "Voir mes réalisations" },
  en: { title: "Freelance Web Developer", market: "France, Canada & Worldwide", name: "Soufiane Boutatss — custom web development", quote: "Request a quote", work: "Explore my work" },
  ar: { title: "مطور مواقع مستقل", market: "المغرب، فرنسا، كندا والعالم", name: "سفيان بوطاطس — تطوير مواقع حسب الطلب", quote: "اطلب عرض سعر", work: "شاهد أعمالي" },
};

const Scene3D = dynamic(() => import("../components/Scene3D"), { ssr: false });

const Hero = () => {
  const { t, locale } = useLanguage();
  const copy = heroCopy[locale];
  const [show3D, setShow3D] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) return watchDecorativeScene(heroRef.current, setShow3D);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero relative flex items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,107,0,0.16),transparent_35%),radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.12),transparent_30%)]"
      />
      {show3D && <Scene3D />}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-[1]" />

      <div className="hero-layout container relative z-10">
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-w-0 flex-1 text-center lg:text-start"
        >
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-subtitle !text-center lg:!text-start !text-[#ff8a3d] mb-5"
          >
            {t.hero.tag}
          </motion.p>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className={`hero-title text-white ${locale === "ar" ? "!leading-[1.3] !tracking-normal" : ""}`}
          >
            {copy.title}
          </motion.h1>
          <p className="hero-market text-gradient">{copy.market}</p>
          <p className="mt-5 text-base font-medium text-white/70">
            {copy.name}
          </p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 mb-7"
          >
            <p className="body-copy max-w-[58ch] mx-auto lg:mx-0">
                {pageCopy[locale].intro}
            </p>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-7"
          >
            <a
              href="#contact"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">{copy.quote}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8533] to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#portfolio"
              className="btn-secondary"
            >
              {copy.work}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              {
                href: "https://github.com/soufiane2001",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://web.facebook.com/soufianski2001",
                icon: Facebook,
                label: "Facebook",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#ff6b00] hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b00]/30 via-[#a855f7]/30 to-[#3b82f6]/30 rounded-full blur-[60px] animate-pulse" />
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px]">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#ff6b00]/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-[#ff6b00]/40">
             <Image
                  src="https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png"
                  alt="Soufiane Boutatss - Web & Mobile Developer"
                  fill
                  priority
                  sizes="(min-width: 1024px) 296px, (min-width: 640px) 216px, 176px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-[#ff6b00] transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-[0.2em]">{t.hero.scroll}</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

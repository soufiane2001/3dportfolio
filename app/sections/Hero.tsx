"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Scene3D = dynamic(() => import("../components/Scene3D"), { ssr: false });

const Hero = () => {
  const { t } = useLanguage();
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    if (!media.matches) return;

    const enable3D = () => setShow3D(true);
    const requestIdle = window.requestIdleCallback;
    const idleId =
      typeof requestIdle === "function"
        ? requestIdle(enable3D, { timeout: 2000 })
        : window.setTimeout(enable3D, 1200);

    return () => {
      if (typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,107,0,0.16),transparent_35%),radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.12),transparent_30%)]"
      />
      {show3D && <Scene3D />}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-[1]" />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#ff6b00] text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4"
          >
            {t.hero.tag}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6"
          >
            Création de Sites Web
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8533] to-[#a855f7]">
              à Casablanca
            </span>
          </motion.h1>
          <p className="-mt-2 mb-5 text-sm font-bold uppercase tracking-[.22em] text-white/55">
            Soufiane Boutatss — Développeur Web Freelance
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="text-white/80 text-sm md:text-base font-medium">
                Sites vitrines, e-commerce, applications web et mobile optimisés pour votre activité
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
          >
            <a
              href="https://wa.me/212689213015"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#ff6b00] text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.5)]"
            >
              <span className="relative z-10">Demander un devis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8533] to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Voir mes réalisations
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-8 justify-center lg:justify-start mb-10"
          >
            {[
              { value: "30+", label: t.hero.stats.projects },
              { value: "34+", label: t.hero.stats.clients },
              { value: "6+", label: t.hero.stats.years },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b00]/30 via-[#a855f7]/30 to-[#3b82f6]/30 rounded-full blur-[60px] animate-pulse" />
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#ff6b00]/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-[#ff6b00]/40">
             <Image
                  src="https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png"
                  alt="Soufiane Boutatss - Web & Mobile Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 200px, 300px"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
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

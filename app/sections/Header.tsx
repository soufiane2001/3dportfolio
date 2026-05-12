"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Locale } from "../i18n/translations";

const LANGS: { code: Locale; label: string; flag: string }[] = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ar", label: "AR", flag: "🇲🇦" },
];

const Header = () => {
  const { t, locale, setLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["portfolio", "about", "skills", "experiences", "testimonials"];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t.nav.about,        href: "#about",        id: "about" },
    { name: t.nav.skills,       href: "#skills",       id: "skills" },
    { name: t.nav.work,         href: "#portfolio",    id: "portfolio" },
    { name: t.nav.experience,   href: "#experiences",  id: "experiences" },
    { name: t.nav.testimonials, href: "#testimonials", id: "testimonials" },
  ];

  const currentLang = LANGS.find((l) => l.code === locale)!;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <motion.a href="#home" className="relative z-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-white">S</span>
                <span className="text-[#ff6b00]">.</span>
              </span>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
              {navLinks.map((link, i) => {
                const isActive = isScrolled && activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    onMouseEnter={() => setHovered(link.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {hovered === link.id && (
                      <motion.span
                        layoutId="nav-hover-bg"
                        className="absolute inset-0 rounded-full bg-white/8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#ff6b00] transition-all duration-300 ${
                      isActive || hovered === link.id ? "w-4/5" : "w-0"
                    }`} />
                  </motion.a>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/30 text-sm font-medium transition-all duration-300"
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.label}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full mt-2 right-0 bg-black/90 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-xl"
                    >
                      {LANGS.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                          className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm transition-colors ${
                            locale === lang.code
                              ? "text-[#ff6b00] bg-[#ff6b00]/10"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-[#ff6b00] text-white text-sm font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300"
              >
                {t.nav.contact}
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs"
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.label}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full mt-2 right-0 bg-black/95 border border-white/10 rounded-xl overflow-hidden shadow-xl z-[300]"
                    >
                      {LANGS.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                          className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm transition-colors ${
                            locale === lang.code ? "text-[#ff6b00] bg-[#ff6b00]/10" : "text-white/70 hover:text-white"
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                className="relative z-[250] w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] md:hidden bg-black"
          >
            <motion.nav
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-3xl font-bold text-white hover:text-[#ff6b00] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4 px-10 py-4 bg-[#ff6b00] text-white text-xl font-bold rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

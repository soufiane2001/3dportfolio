"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageLinks from "../components/LanguageLinks";
import BrandMark from "../components/BrandMark";

export default function Header() {
  const { t, locale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [autreOpen, setAutreOpen] = useState(false);
  const autreRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ["portfolio", "about", "services", "skills", "experiences", "testimonials", "hobbies"].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActiveSection(id); }, { threshold: 0.3 });
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(observer => observer.disconnect());
  }, []);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isMobileMenuOpen]);
  useEffect(() => {
    const outside = (event: MouseEvent) => { if (autreRef.current && !autreRef.current.contains(event.target as Node)) setAutreOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setAutreOpen(false); setIsMobileMenuOpen(false); } };
    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("mousedown", outside); document.removeEventListener("keydown", escape); };
  }, []);

  const navLinks = [
    { name: t.nav.about, href: "#about", id: "about" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.skills, href: "#skills", id: "skills" },
    { name: t.nav.work, href: "#portfolio", id: "portfolio" },
    { name: t.nav.experience, href: "#experiences", id: "experiences" },
    { name: t.nav.testimonials, href: "#testimonials", id: "testimonials" },
  ];
  const autreLinks = [{ name: t.nav.hobbies, href: "#hobbies", id: "hobbies" }, { name: "Blog", href: "/blog", id: "blog" }];
  const desktopLinks = [navLinks[3], navLinks[1], navLinks[4], navLinks[0]];
  const dropdownLinks = [navLinks[2], navLinks[5], ...autreLinks];

  return <>
    <header className={`okc-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container okc-header-inner">
        <a href="#home" aria-label="Soufiane Boutatss"><BrandMark /></a>
        <nav className="okc-header-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : locale === "en" ? "Main navigation" : "Navigation principale"}>
          {desktopLinks.map(link => <a key={link.id} href={link.href} className="okc-header-link" aria-current={isScrolled && activeSection === link.id ? "location" : undefined}>{link.name}</a>)}
          <div className="okc-dropdown" ref={autreRef}>
            <button type="button" className="okc-header-link inline-flex items-center gap-1" onClick={() => setAutreOpen(!autreOpen)} aria-expanded={autreOpen} aria-controls="secondary-navigation">{t.nav.autre}<ChevronDown size={12} /></button>
            {autreOpen && <div className="okc-dropdown-panel" id="secondary-navigation">{dropdownLinks.map(link => <a key={link.id} href={link.href} onClick={() => setAutreOpen(false)}>{link.name}</a>)}</div>}
          </div>
        </nav>
        <div className="okc-header-actions">
          <LanguageLinks locale={locale} />
          <a href="#contact" className="okc-circle-link">{t.nav.contact}</a>
          <button type="button" className="okc-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">{isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
    </header>
    <AnimatePresence>{isMobileMenuOpen && <motion.div className="okc-mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .2 }}>
      <nav id="mobile-navigation">
        {navLinks.map(link => <a key={link.id} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>)}
        <div className="okc-mobile-secondary"><span>{t.nav.autre}</span>{autreLinks.map(link => <a key={link.id} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>)}</div>
        <a href="#contact" className="btn-primary mt-6 self-start" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.contact}</a>
      </nav>
    </motion.div>}</AnimatePresence>
  </>;
}

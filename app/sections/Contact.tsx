"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Mail, MessageSquare, Send, Github, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import AdBanner from "../components/AdBanner";

const WHATSAPP_NUMBER = "212689213015";

const Contact = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = `Hi Soufiane! I'm ${name}${email ? ` (${email})` : ""}.\n\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/soufiane2001", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/", label: "LinkedIn" },
    { icon: Facebook, href: "https://web.facebook.com/soufianski2001", label: "Facebook" },
  ];

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden" aria-label="Contact Soufiane Boutatss">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{t.contact.tag}</p>
          <h2 className="section-title text-white">
            {t.contact.title} <span className="text-gradient">{t.contact.titleGradient}</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mt-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.contact.ready}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#ff6b00]" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Email</p>
                  <address className="not-italic">
                    <a href="mailto:sboutatss@gmail.com" className="text-white font-medium hover:text-[#ff6b00] transition-colors">sboutatss@gmail.com</a>
                  </address>
                </div>
              </div>
            </div>

            <div>
              <p className="text-white/40 text-sm mb-4">{t.contact.follow}</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#ff6b00] hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <User size={16} />
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b00]/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <Mail size={16} />
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b00]/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <MessageSquare size={16} />
                  {t.contact.message}
                </label>
                <textarea
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b00]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                onClick={handleSend}
                className="w-full py-4 bg-gradient-to-r from-[#ff6b00] to-[#ff8533] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300"
              >
                <Send size={18} />
                {t.contact.send}
              </button>
            </div>
          </motion.div>
        </div>

        <AdBanner />
      </div>
    </section>
  );
};

export default Contact;
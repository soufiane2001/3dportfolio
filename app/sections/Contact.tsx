"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Github, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import AdBanner from "../components/AdBanner";

const WHATSAPP_NUMBER = "212689213015";

const Contact = ({ asPage = false }: { asPage?: boolean }) => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (event?: React.FormEvent) => {
    event?.preventDefault();
    const text = `Hi Soufiane! I'm ${name}${email ? ` (${email})` : ""}.\n\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/soufiane2001", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/", label: "LinkedIn" },
    { icon: Facebook, href: "https://web.facebook.com/soufianski2001", label: "Facebook" },
  ];

  return <section id="contact" className="okc-section okc-contact" aria-label="Contact Soufiane Boutatss">
    <div className="container" ref={ref}>
      <motion.div initial={false} animate={inView ? { opacity: 1, y: 0 } : {}} className="okc-contact-heading">
        <p className="section-subtitle">{t.contact.tag}</p>
        {asPage ? <h1 className="page-heading">{t.contact.title} <span>{t.contact.titleGradient}</span></h1> : <h2 className="section-heading">{t.contact.title} <span>{t.contact.titleGradient}</span></h2>}
        <p className="body-copy">{t.contact.subtitle}</p>
      </motion.div>
      <div className="okc-contact-layout">
        <div className="okc-contact-info">
          <h3>{t.contact.ready}</h3><p className="body-copy">{t.contact.description}</p>
          <div className="okc-contact-email"><p className="text-sm text-white/50">Email</p><address className="not-italic"><a href="mailto:sboutatss@gmail.com">sboutatss@gmail.com</a></address></div>
          <div className="mt-8"><p className="text-sm text-white/50">{t.contact.follow}</p><div className="okc-socials">{socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}><social.icon size={20} /></a>)}</div></div>
        </div>
        <form className="okc-contact-form" onSubmit={handleSend} data-conversion="generate_lead">
          <div className="okc-contact-field"><label htmlFor="contact-name">{t.contact.name}</label><input id="contact-name" name="name" type="text" autoComplete="name" required placeholder={t.contact.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div className="okc-contact-field"><label htmlFor="contact-email">{t.contact.email}</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder={t.contact.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="okc-contact-field"><label htmlFor="contact-message">{t.contact.message}</label><textarea id="contact-message" name="message" rows={5} required placeholder={t.contact.messagePlaceholder} value={message} onChange={(e) => setMessage(e.target.value)} /></div>
          <button type="submit" className="btn-primary"><span className="inline-flex items-center gap-2"><Send size={16} />{t.contact.send}</span></button>
        </form>
      </div>
      <AdBanner />
    </div>
  </section>;
};

export default Contact;

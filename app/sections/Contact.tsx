"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Github, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import AdBanner from "../components/AdBanner";
import { EMAIL, whatsappUrl } from "../lib/site";

const Contact = ({ asPage = false }: { asPage?: boolean }) => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const InfoHeading = asPage ? "h2" : "h3";

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `${t.contact.greeting}\n${name.trim()} (${email.trim()})\n\n${message.trim()}`;
    window.location.assign(whatsappUrl(text));
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
          <InfoHeading>{t.contact.ready}</InfoHeading><p className="body-copy">{t.contact.description}</p>
          <div className="okc-contact-email"><p className="text-sm text-white/50">{t.contact.email}</p><address className="not-italic"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></address></div>
          <div className="mt-8"><p className="text-sm text-white/50">{t.contact.follow}</p><div className="okc-socials">{socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}><social.icon size={20} /></a>)}</div></div>
        </div>
        <form className="okc-contact-form" method="post" onSubmit={handleSend} data-conversion="whatsapp_form_submit" aria-describedby="contact-delivery-note">
          <div className="okc-contact-field"><label htmlFor="contact-name">{t.contact.name}</label><input id="contact-name" type="text" autoComplete="name" required pattern={".*\\S.*"} placeholder={t.contact.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div className="okc-contact-field"><label htmlFor="contact-email">{t.contact.email}</label><input id="contact-email" type="email" autoComplete="email" required placeholder={t.contact.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="okc-contact-field"><label htmlFor="contact-message">{t.contact.message}</label><textarea id="contact-message" rows={5} required placeholder={t.contact.messagePlaceholder} value={message} onChange={(e) => {
            const text = e.target.value;
            e.target.setCustomValidity(text && !text.trim() ? t.contact.messagePlaceholder : "");
            setMessage(text);
          }} /></div>
          <div>
            <button type="submit" className="btn-primary"><span className="inline-flex items-center gap-2"><Send size={16} />{t.contact.send}</span></button>
            <p id="contact-delivery-note" className="mt-3 text-sm text-white/65">{t.contact.deliveryNote}</p>
          </div>
        </form>
      </div>
      <AdBanner />
    </div>
  </section>;
};

export default Contact;

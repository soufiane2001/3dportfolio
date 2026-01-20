"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Mail, MessageSquare, Send, Github, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const socialLinks = [
    { icon: Github, href: "https://github.com/soufiane2001", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/", label: "LinkedIn" },
    { icon: Facebook, href: "https://web.facebook.com/soufianski2001", label: "Facebook" },
  ];

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
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
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title text-white">
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mt-4">
            Have a project in mind? Let&apos;s create something amazing together.
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
                Ready to start your project?
              </h3>
              <p className="text-white/60 leading-relaxed">
                Feel free to send me a message for your projects, questions, or
                collaborations. I&apos;m always excited to work on new and challenging
                projects!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#ff6b00]" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Email</p>
                  <p className="text-white font-medium">sboutatss@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-white/40 text-sm mb-4">Follow me</p>
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
            <form className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <User size={16} />
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b00]/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <Mail size={16} />
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b00]/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <MessageSquare size={16} />
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6b00]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#ff6b00] to-[#ff8533] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";

interface Skill {
  name: string;
  iconUrl: string;
  percentage: number;
  color: string;
  invert?: boolean;
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillsData: Skill[] = [
  { name: "React",          iconUrl: `${DEVICON}/react/react-original.svg`,                 percentage: 80, color: "#61DAFB" },
  { name: "React Native",   iconUrl: `${DEVICON}/react/react-original.svg`,                 percentage: 70, color: "#61DAFB" },
  { name: "Expo",           iconUrl: `${DEVICON}/expo/expo-original.svg`,                   percentage: 70, color: "#e2e8f0", invert: true },
  { name: "Laravel",        iconUrl: `${DEVICON}/laravel/laravel-original.svg`,             percentage: 70, color: "#FF2D20" },
  { name: "MySQL",          iconUrl: `${DEVICON}/mysql/mysql-original.svg`,                 percentage: 70, color: "#4479A1" },
  { name: "TypeScript",     iconUrl: `${DEVICON}/typescript/typescript-original.svg`,       percentage: 70, color: "#3178C6" },
  { name: "Android Studio", iconUrl: `${DEVICON}/androidstudio/androidstudio-original.svg`, percentage: 50, color: "#3DDC84" },
  { name: "PHP",            iconUrl: `${DEVICON}/php/php-original.svg`,                     percentage: 70, color: "#777BB4" },
  { name: "Angular",        iconUrl: `${DEVICON}/angularjs/angularjs-original.svg`,         percentage: 40, color: "#DD0031" },
  { name: "WordPress",      iconUrl: `${DEVICON}/wordpress/wordpress-plain.svg`,            percentage: 50, color: "#21759B" },
  { name: "Next.js",        iconUrl: `${DEVICON}/nextjs/nextjs-original.svg`,               percentage: 70, color: "#e2e8f0", invert: true },
  { name: "Firebase",       iconUrl: `${DEVICON}/firebase/firebase-plain.svg`,              percentage: 60, color: "#FFCA28" },
  { name: "Java",           iconUrl: `${DEVICON}/java/java-original.svg`,                   percentage: 40, color: "#007396" },
  { name: "Bootstrap",      iconUrl: `${DEVICON}/bootstrap/bootstrap-original.svg`,         percentage: 90, color: "#7952B3" },
  { name: "Tailwind CSS",   iconUrl: `${DEVICON}/tailwindcss/tailwindcss-plain.svg`,        percentage: 70, color: "#06B6D4" },
  { name: "Git",            iconUrl: `${DEVICON}/git/git-original.svg`,                     percentage: 75, color: "#F05032" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group glass-card glass-card-hover p-6"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          <img
            src={skill.iconUrl}
            alt={skill.name}
            width={28}
            height={28}
            className={`object-contain${skill.invert ? " invert" : ""}`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{skill.name}</h3>
          <p className="text-white/40 text-sm">{skill.percentage}% Proficiency</p>
        </div>
      </div>

      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden" aria-label="Compétences et technologies de Soufiane Boutatss">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{t.skills.tag}</p>
          <h2 className="section-title text-white">
            {t.skills.title} <span className="text-gradient">{t.skills.titleGradient}</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Skills;

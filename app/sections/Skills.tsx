"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";
import AdBanner from "../components/AdBanner";

interface Skill {
  name: string;
  iconUrl: string;
  percentage: number;
  color: string;
  invert?: boolean;
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

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
  { name: "Tailwind CSS",   iconUrl: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,     percentage: 70, color: "#06B6D4" },
  { name: "Git",            iconUrl: `${DEVICON}/git/git-original.svg`,                     percentage: 75, color: "#F05032" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return <motion.div ref={ref} initial={false} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: index * .025 }} className="okc-skill">
    <div className="okc-skill-heading"><div className="okc-skill-icon"><Image src={skill.iconUrl} alt={skill.name} width={28} height={28} unoptimized className={`object-contain${skill.invert ? " invert" : ""}`} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} /></div><div><h3>{skill.name}</h3><p>{skill.percentage}% Proficiency</p></div></div>
    <div className="skill-bar"><motion.div initial={{ width: 0 }} animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }} transition={{ duration: 1, delay: index * .025 + .3 }} className="skill-bar-fill" style={{ background: skill.color }} /></div>
  </motion.div>;
};

export default function Skills() {
  const { t } = useLanguage();
  return <section id="skills" className="okc-section" aria-label="Compétences et technologies de Soufiane Boutatss"><div className="container">
    <div className="okc-section-intro"><p className="section-subtitle">{t.skills.tag}</p><div><h2 className="section-heading">{t.skills.title} <span>{t.skills.titleGradient}</span></h2><p className="body-copy">{t.skills.subtitle}</p></div></div>
    <div className="okc-skills-grid">{skillsData.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}</div>
    <AdBanner />
  </div></section>;
}

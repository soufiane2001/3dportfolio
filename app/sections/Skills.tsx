"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Atom,
  Smartphone,
  Layers,
  Database,
  Code2,
  Terminal,
  Box,
  Globe,
  Flame,
  Wind,
  Cpu,
  Layout,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  percentage: number;
  color: string;
}

const skillsData: Skill[] = [
  { name: "React", icon: Atom, percentage: 80, color: "#61DAFB" },
  { name: "React Native", icon: Smartphone, percentage: 70, color: "#61DAFB" },
  { name: "Expo CLI", icon: Layers, percentage: 70, color: "#ffffff" },
  { name: "Laravel", icon: Flame, percentage: 70, color: "#FF2D20" },
  { name: "MySQL", icon: Database, percentage: 70, color: "#4479A1" },
  { name: "TypeScript", icon: Terminal, percentage: 70, color: "#3178C6" },
  { name: "Android Studio", icon: Cpu, percentage: 50, color: "#3DDC84" },
  { name: "PHP", icon: Code2, percentage: 70, color: "#777BB4" },
  { name: "Angular", icon: Layout, percentage: 40, color: "#DD0031" },
  { name: "WordPress", icon: Globe, percentage: 50, color: "#21759B" },
  { name: "Next.js", icon: Box, percentage: 70, color: "#ffffff" },
  { name: "Firebase", icon: Flame, percentage: 60, color: "#FFCA28" },
  { name: "Java", icon: Terminal, percentage: 40, color: "#007396" },
  { name: "Bootstrap", icon: LayoutGrid, percentage: 90, color: "#7952B3" },
  { name: "Tailwind", icon: Wind, percentage: 70, color: "#06B6D4" },
  { name: "Services", icon: Globe, percentage: 50, color: "#ff6b00" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <skill.icon size={24} style={{ color: skill.color }} />
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
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
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
          <p className="section-subtitle">Expertise</p>
          <h2 className="section-title text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            A comprehensive toolkit of modern technologies I use to build
            exceptional digital experiences
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
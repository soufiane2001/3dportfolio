"use client";

import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";
import AdBanner from "../components/AdBanner";

interface Skill {
  name: string;
  iconUrl: string;
  percentage: number;
  color: string;
  invert?: boolean;
}

const DEVICON = "/technologies";

const skillsData: Skill[] = [
  { name: "React",          iconUrl: `${DEVICON}/react-original.svg`,                 percentage: 80, color: "#61DAFB" },
  { name: "React Native",   iconUrl: `${DEVICON}/react-original.svg`,                 percentage: 70, color: "#61DAFB" },
  { name: "Expo",           iconUrl: `${DEVICON}/expo-original.svg`,                   percentage: 70, color: "#e2e8f0", invert: true },
  { name: "Laravel",        iconUrl: `${DEVICON}/laravel-original.svg`,             percentage: 70, color: "#FF2D20" },
  { name: "MySQL",          iconUrl: `${DEVICON}/mysql-original.svg`,                 percentage: 70, color: "#4479A1" },
  { name: "TypeScript",     iconUrl: `${DEVICON}/typescript-original.svg`,       percentage: 70, color: "#3178C6" },
  { name: "Android Studio", iconUrl: `${DEVICON}/androidstudio-original.svg`, percentage: 50, color: "#3DDC84" },
  { name: "PHP",            iconUrl: `${DEVICON}/php-original.svg`,                     percentage: 70, color: "#777BB4" },
  { name: "Angular",        iconUrl: `${DEVICON}/angularjs-original.svg`,         percentage: 40, color: "#DD0031" },
  { name: "WordPress",      iconUrl: `${DEVICON}/wordpress-plain.svg`,            percentage: 50, color: "#21759B" },
  { name: "Next.js",        iconUrl: `${DEVICON}/nextjs-original.svg`,               percentage: 70, color: "#e2e8f0", invert: true },
  { name: "Firebase",       iconUrl: `${DEVICON}/firebase-plain.svg`,              percentage: 60, color: "#FFCA28" },
  { name: "Java",           iconUrl: `${DEVICON}/java-original.svg`,                   percentage: 40, color: "#007396" },
  { name: "Bootstrap",      iconUrl: `${DEVICON}/bootstrap-original.svg`,         percentage: 90, color: "#7952B3" },
  { name: "Tailwind CSS",   iconUrl: `${DEVICON}/tailwindcss-original.svg`,     percentage: 70, color: "#06B6D4" },
  { name: "Git",            iconUrl: `${DEVICON}/git-original.svg`,                     percentage: 75, color: "#F05032" },
];

const groups = [
  { key: "web", names: ["React", "Next.js", "TypeScript", "Angular", "Bootstrap", "Tailwind CSS"] },
  { key: "mobile", names: ["React Native", "Expo", "Android Studio", "Firebase", "Java"] },
  { key: "backend", names: ["Laravel", "PHP", "MySQL", "WordPress", "Git"] },
];

export default function Skills() {
  const { t, locale } = useLanguage();
  const labels = { fr: ["Web & interfaces", "Mobile & applications", "Back-end & outils"], en: ["Web & interfaces", "Mobile & applications", "Back-end & tools"], ar: ["الويب والواجهات", "الهواتف والتطبيقات", "الخوادم والأدوات"] }[locale];
  const proficiency = locale === "fr" ? "Maîtrise" : locale === "ar" ? "إتقان" : "Proficiency";
  return <section id="skills" className="okc-section mix-skills-section" aria-label={t.skills.title + " " + t.skills.titleGradient}><div className="container">
    <header className="mix-editorial-intro"><h2>{t.skills.title} {t.skills.titleGradient}</h2><p>{t.skills.subtitle}</p></header>
    <div className="mix-skill-tables">{groups.map((group,index) => <div key={group.key} className="mix-skill-table"><h3>{labels[index]}</h3><table><thead><tr><th scope="col">{locale === "fr" ? "Technologie" : locale === "ar" ? "التقنية" : "Technology"}</th><th scope="col">{proficiency}</th></tr></thead><tbody>{group.names.map(name => {
      const skill = skillsData.find(item => item.name===name)!;
      return <tr key={name}><th scope="row"><Image src={skill.iconUrl} alt="" width={26} height={26} unoptimized className={skill.invert ? "invert" : ""}/><span>{name}</span></th><td>{skill.percentage}<span>%</span></td></tr>;
    })}</tbody></table></div>)}</div><AdBanner />
  </div></section>;
}

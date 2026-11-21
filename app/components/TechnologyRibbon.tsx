import Image from "next/image";
import type { Locale } from "../i18n/translations";

const technologies = [
  ["React", "react/react-original.svg"],
  ["Next.js", "nextjs/nextjs-original.svg"],
  ["Laravel", "laravel/laravel-original.svg"],
  ["PHP", "php/php-original.svg"],
  ["MySQL", "mysql/mysql-original.svg"],
  ["TypeScript", "typescript/typescript-original.svg"],
];

export default function TechnologyRibbon({ locale = "fr" }: { locale?: Locale }) {
  return <div className="mix-technology-ribbon"><div className="container">
    <p>{locale === "fr" ? "Web. Mobile. Sur mesure." : locale === "ar" ? "مواقع. تطبيقات. حسب الطلب." : "Web. Mobile. Custom built."}</p>
    <nav aria-label={locale === "fr" ? "Technologies utilisées" : locale === "ar" ? "التقنيات المستخدمة" : "Technology stack"}>
      {technologies.map(([name, file]) => <a key={name} href={`/${locale}#skills`}><Image src={`/technologies/${file.split("/").pop()}`} width={28} height={28} alt="" unoptimized /><span>{name}</span></a>)}
    </nav>
    <a className="mix-ribbon-cv" href="/cv.pdf">{locale === "ar" ? "السيرة الذاتية" : "Curriculum vitæ"}</a>
  </div></div>;
}

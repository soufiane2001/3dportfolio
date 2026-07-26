import dynamic from "next/dynamic";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import { LanguageProvider } from "./i18n/LanguageContext";
import LocalServices from "./components/LocalServices";
import SiteFooter from "./components/SiteFooter";

const About = dynamic(() => import("./sections/About"));
const Services = dynamic(() => import("./sections/Services"));
const Skills = dynamic(() => import("./sections/Skills"));
const Projects = dynamic(() => import("./sections/Projects"));
const Experience = dynamic(() => import("./sections/Experience"));
const Testimonials = dynamic(() => import("./sections/Testimonials"));
const Hobbies = dynamic(() => import("./sections/Hobbies"));
const Contact = dynamic(() => import("./sections/Contact"));

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-black">
        <Header />
        <Hero />
        <LocalServices />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Hobbies />
        <Contact />
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}

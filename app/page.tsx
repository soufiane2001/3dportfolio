import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Hobbies from "./sections/Hobbies";
import Contact from "./sections/Contact";
import Loader from "./components/Loader";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <Loader />
      <div className="flex min-h-screen flex-col bg-black">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Hobbies />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

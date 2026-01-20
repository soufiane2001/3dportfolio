import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header/>
     
      <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Experience/>
   <Testimonials/>
   <Contact/>
    </div>
  );
}

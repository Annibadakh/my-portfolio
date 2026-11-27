import { useEffect } from "react";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import CaseStudies from "../sections/CaseStudies";
import Skills from "../sections/Skills";
import Achievements from "../sections/Achievements";
import Contact from "../sections/Contact";

export default function Home() {
  useEffect(() => {
    document.title = "Aniket Badakh · Software Engineer";
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <CaseStudies />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}

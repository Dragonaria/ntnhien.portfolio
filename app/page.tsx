import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { SKILLS } from "./constants";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills skills={SKILLS}/>
      <Contact/>
    </main>
  );
}

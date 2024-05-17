import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { SKILLS } from "./constants";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills skills={SKILLS}/>
    </main>
  );
}

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Stack } from "@/components/site/Stack";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { OpenSource } from "@/components/site/OpenSource";
import { Publications } from "@/components/site/Publications";
import { Contact } from "@/components/site/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <OpenSource />
      <Publications />
      <Contact />
    </main>
  );
};

export default Index;


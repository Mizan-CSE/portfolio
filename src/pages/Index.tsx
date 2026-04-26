import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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
import { scrollToSection } from "@/lib/scroll-to-section";
import { getSectionIdFromPath } from "@/lib/section-routes";

const Index = () => {
  const location = useLocation();
  const isInitialRoute = useRef(true);

  useEffect(() => {
    const sectionId = getSectionIdFromPath(location.pathname);

    if (!sectionId) {
      return;
    }

    const state = location.state as { scrollBehavior?: ScrollBehavior } | null;
    const behavior = state?.scrollBehavior ?? (isInitialRoute.current ? "auto" : "smooth");

    const frame = window.requestAnimationFrame(() => {
      scrollToSection(sectionId, { behavior });
      isInitialRoute.current = false;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.state]);

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

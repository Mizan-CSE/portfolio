import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { getSectionIdFromPath, getSectionPath, sectionRoutes, type SectionId } from "@/lib/section-routes";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isInitialRoute = useRef(true);

  useEffect(() => {
    const sectionId = getSectionIdFromPath(location.pathname);

    if (!sectionId) {
      return;
    }

    const state = location.state as { scrollBehavior?: ScrollBehavior; skipScrollSync?: boolean } | null;

    if (state?.skipScrollSync) {
      isInitialRoute.current = false;
      return;
    }

    const behavior = state?.scrollBehavior ?? (isInitialRoute.current ? "auto" : "smooth");

    const frame = window.requestAnimationFrame(() => {
      scrollToSection(sectionId, { behavior });
      isInitialRoute.current = false;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.state]);

  useEffect(() => {
    const sectionIds = sectionRoutes.map((route) => route.id);

    const getActiveSection = (): SectionId => {
      const viewportAnchor = 140;
      let activeSection: SectionId = "top";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) {
          continue;
        }

        if (element.getBoundingClientRect().top <= viewportAnchor) {
          activeSection = id;
        } else {
          break;
        }
      }

      return activeSection;
    };

    let ticking = false;

    const syncPathWithScroll = () => {
      ticking = false;

      const activeSection = getActiveSection();
      const activePath = getSectionPath(activeSection);

      if (location.pathname === activePath) {
        return;
      }

      navigate(activePath, { replace: true, state: { skipScrollSync: true } });
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(syncPathWithScroll);
    };

    syncPathWithScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, navigate]);

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

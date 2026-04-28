import portrait from "@/assets/portrait.jpg";
import { useSectionNavigation } from "@/hooks/use-section-navigation";
import { getSectionHref } from "@/lib/section-routes";
import { Bug, ShieldCheck, Activity, Terminal } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { MouseEvent } from "react";
import { MagneticButton } from "./MagneticButton";

export const Hero = () => {
  const cvUrl = `${import.meta.env.BASE_URL}Md_Mijanur_Rahman_SQA_Engineer_CV.pdf`;
  const navigateToSection = useSectionNavigation();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18 });
  const smy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(smx, (v) => v * 8);
  const rotateX = useTransform(smy, (v) => v * -8);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-neon/15 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[300px] w-[500px] rounded-full bg-cyan/10 blur-[120px] drift" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-8 inline-flex items-center gap-3 rounded-full surface px-3 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            <span className="font-mono text-text-dim">
              <span className="text-neon">*</span> SQA Engineer · Dhaka, BD · Open to work
            </span>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={1} className="mb-6 font-mono text-sm text-text-dim">
            <span className="text-neon">$</span> whoami<span className="caret text-neon">_</span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display text-[clamp(2.4rem,8vw,6rem)] font-semibold leading-[0.95] tracking-tight text-text text-balance"
          >
            I break software{" "}
            <span className="font-serif italic font-normal text-neon">before</span>{" "}
            your users do.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-text-dim"
          >
            I'm <span className="text-text font-medium">Md Mijanur Rahman</span> - an SQA Engineer with{" "}
            <span className="text-text">3.5+ years</span> testing fintech web, mobile and API platforms.
            I write automation in <span className="text-neon">Selenium</span>,{" "}
            <span className="text-neon">Cucumber</span>, and{" "}
            <span className="text-neon">JMeter</span> - and I ship quality with intent.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <MagneticButton
              href={getSectionHref("projects")}
              onClick={(event) => {
                event.preventDefault();
                navigateToSection("projects");
              }}
              className="group inline-flex items-center gap-3 rounded-md bg-neon px-5 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-background shine transition-shadow hover:shadow-[0_0_30px_hsl(var(--neon)/0.6)] sm:px-6"
            >
              <Terminal className="h-4 w-4" />
              View my work
              <span className="transition-transform group-hover:translate-x-1">{">"}</span>
            </MagneticButton>
            <MagneticButton
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Resume"
              className="group inline-flex items-center rounded-md border hairline-bright px-5 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-text hover:border-neon/60 hover:text-neon sm:px-6"
            >
              Resume
            </MagneticButton>
            <a
              href={getSectionHref("contact")}
              onClick={(event) => {
                event.preventDefault();
                navigateToSection("contact");
              }}
              className="inline-flex items-center gap-2 rounded-md px-2 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-text-dim underline-grow"
            >
              Hire me {" >"}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-14 grid grid-cols-3 gap-4 border-t hairline pt-6"
          >
            {[
              { k: "3.5+", v: "Years exp." },
              { k: "2,000+", v: "Test cases" },
              { k: "35%", v: "Defects down" },
            ].map((s) => (
              <motion.div
                key={s.v}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="font-display text-2xl font-semibold text-text sm:text-3xl md:text-4xl">{s.k}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-text-dim sm:text-[11px]">{s.v}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-5"
        >
          <motion.div
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative will-change-transform"
          >
            <motion.div
              className="absolute -left-3 -top-3 z-10 hidden items-center gap-2 rounded-md surface px-3 py-1.5 font-mono text-[11px] text-neon md:inline-flex float-y"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              status: <span className="text-text">verified</span>
            </motion.div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-xl glow-card scanline">
              <img
                src={portrait}
                alt="Md Mijanur Rahman, SQA Engineer"
                width={1024}
                height={1280}
                className="h-full w-full object-cover object-top opacity-95 transition-transform duration-700 hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div
                className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--neon)/0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon)/0.4) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-md bg-background/70 px-3 py-2 backdrop-blur-md ring-1 ring-line">
                <div className="flex items-center gap-2 font-mono text-[11px] text-text">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon pulse-dot" />
                  TEST_RUN: PASSED
                </div>
                <div className="font-mono text-[10px] text-text-dim">v2026.04</div>
              </div>
            </div>

            <div className="absolute -right-3 top-12 hidden flex-col gap-2 md:flex">
              <span className="rounded-md surface px-2.5 py-1 font-mono text-[10px] text-cyan float-y" style={{ animationDelay: "1s" }}>* Star Player '24</span>
              <span className="rounded-md surface px-2.5 py-1 font-mono text-[10px] text-magenta float-y" style={{ animationDelay: "2s" }}>IEEE · 3rd Best Paper</span>
            </div>
            <div className="absolute -bottom-3 -right-3 hidden items-center gap-2 rounded-md surface px-3 py-1.5 font-mono text-[11px] text-amber md:inline-flex float-y" style={{ animationDelay: "1.5s" }}>
              <Bug className="h-3.5 w-3.5" />
              bugs.found: <span className="text-text">1.2k+</span>
            </div>
            <div className="absolute -left-3 bottom-16 hidden items-center gap-2 rounded-md surface px-3 py-1.5 font-mono text-[11px] text-neon md:inline-flex float-y" style={{ animationDelay: "0.5s" }}>
              <Activity className="h-3.5 w-3.5" />
              uptime: <span className="text-text">99.9%</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

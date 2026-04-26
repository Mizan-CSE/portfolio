import { Github, Star, GitFork, ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const repos = [
  {
    name: "SauceLabs",
    desc: "Demo e-commerce app for mobile automation — Appium + Java framework exploring real-device test flows.",
    lang: "Java",
    langColor: "bg-amber",
    tags: ["Appium", "Mobile", "Java", "TestNG"],
    href: "https://github.com/Mizan-CSE/SauceLabs",
    updated: "Aug 2025",
  },
  {
    name: "Monarch_Mart",
    desc: "End-to-end web automation suite for an e-commerce platform — page objects, data-driven tests and HTML reporting.",
    lang: "HTML",
    langColor: "bg-magenta",
    tags: ["Selenium", "POM", "Cucumber"],
    href: "https://github.com/Mizan-CSE/Monarch_Mart",
    updated: "Oct 2023",
  },
  {
    name: "JenkinsTest",
    desc: "Continuous integration sandbox — Jenkins pipelines wiring Selenium suites to scheduled regression runs.",
    lang: "Java",
    langColor: "bg-amber",
    tags: ["Jenkins", "CI/CD", "Selenium"],
    href: "https://github.com/Mizan-CSE/JenkinsTest",
    updated: "Jun 2023",
  },
  {
    name: "Ajker_Deal-Load_Testing",
    desc: "JMeter performance scripts simulating concurrent user load against a deal-of-the-day storefront.",
    lang: "HTML",
    langColor: "bg-magenta",
    tags: ["JMeter", "Performance", "Load"],
    href: "https://github.com/Mizan-CSE/Ajker_Deal-Load_Testing",
    updated: "Mar 2022",
  },
  {
    name: "API_Testing-Postman",
    desc: "Postman collections + Newman runners covering REST endpoints, auth flows and assertion chains.",
    lang: "HTML",
    langColor: "bg-magenta",
    tags: ["Postman", "Newman", "REST"],
    href: "https://github.com/Mizan-CSE/API_Testing-Postman",
    updated: "Mar 2022",
  },
  {
    name: "Shohoz",
    desc: "Manual + automated regression artifacts for a travel booking platform — test cases, defects and traceability.",
    lang: "Test Suite",
    langColor: "bg-cyan",
    tags: ["Manual QA", "Regression"],
    href: "https://github.com/Mizan-CSE/Shohoz",
    updated: "Mar 2022",
  },
];

export const OpenSource = () => {
  return (
    <section id="opensource" className="relative overflow-hidden border-t hairline py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute -top-32 right-1/4 h-[300px] w-[500px] rounded-full bg-cyan/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 grid grid-cols-12 items-end gap-4">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">
              // 05 — open source
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-5xl">
              Test code, public on{" "}
              <span className="font-serif italic font-normal text-neon">GitHub.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-dim">
              Frameworks, scripts and labs I've built while learning and shipping. Browse the source — pull requests welcome.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a
              href="https://github.com/Mizan-CSE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border hairline-bright px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-text transition-all hover:border-neon/60 hover:text-neon"
            >
              <Github className="h-4 w-4" />
              @Mizan-CSE
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, idx) => (
            <motion.a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glow-card group relative flex flex-col rounded-xl p-5 shine"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md surface transition-transform duration-500 group-hover:rotate-[-6deg]">
                    <Code2 className="h-4 w-4 text-neon" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-dim">
                      repository
                    </p>
                    <h3 className="font-display text-base font-semibold text-text group-hover:text-neon transition-colors">
                      {r.name}
                    </h3>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon" />
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-dim">{r.desc}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border hairline bg-background px-2 py-0.5 font-mono text-[10px] text-text-dim transition-colors group-hover:border-neon/40 group-hover:text-text"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t hairline pt-3 font-mono text-[10px] text-text-dim">
                <span className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full ${r.langColor}`} />
                  {r.lang}
                </span>
                <span>updated {r.updated}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

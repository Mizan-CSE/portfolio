import { CheckCircle2, ExternalLink, Building2, GraduationCap as GradCapIcon } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    period: "Sept 2022 — Present",
    role: "QA Engineer",
    company: "DataSoft System Bangladesh Limited",
    companyUrl: "https://datasoft-bd.com/",
    companyLogo: "https://www.google.com/s2/favicons?sz=128&domain=datasoft-bd.com",
    location: "Dhaka, BD",
    type: "Full-time",
    bullets: [
      "Designed & maintained test automation frameworks with Selenium WebDriver, Java, Cucumber BDD, JUnit/TestNG and POM — lifting regression coverage by 45% across web and mobile.",
      "Executed functional, regression, integration, smoke, sanity, cross-browser and mobile testing aligned to STLC and defect lifecycle management.",
      "Ran API validation (Postman/Newman), SQL backend checks, JMeter load tests, and Burp Suite security audits.",
      "Reduced production defects by 35% and earned Star Player award in 2024.",
      "Leveraged AI tools (ChatGPT, Claude, GitHub Copilot) for test case generation, synthetic data, and defect analysis.",
      "Mentored junior QAs and drove automation adoption within the QA team.",
    ],
    tech: ["Selenium", "Cucumber", "JMeter", "Postman", "Jenkins", "Java", "Python", "SQL"],
  },
];

const education = [
  {
    period: "Jan 2018 — Feb 2022",
    title: "BSc in Computer Science & Engineering",
    org: "Green University of Bangladesh",
    url: "https://green.edu.bd/",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=green.edu.bd",
  },
  {
    period: "Jun — Aug 2022",
    title: "Hands-on SQA & Cyber Security Course",
    org: "IT Training BD",
    url: "https://ittrainingbd.com/",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=ittrainingbd.com",
  },
  {
    period: "April 2022",
    title: "Java & SQL Certification — Top 10% scorer",
    org: "TestDome",
    url: "https://www.testdome.com/",
    logo: "https://www.google.com/s2/favicons?sz=128&domain=testdome.com",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">
          // 03 — experience
        </p>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-5xl">
          Where I've been{" "}
          <span className="font-serif italic font-normal text-neon">shipping quality.</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-line to-transparent md:left-6" />

        {milestones.map((m, idx) => (
          <motion.article
            key={m.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-10 md:pl-16"
          >
            <span className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-neon shadow-[0_0_18px_hsl(var(--neon))] md:left-[18px]" />

            <div className="glow-card rounded-xl p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-neon/10 px-2 py-0.5 font-mono text-[11px] text-neon">
                  {m.type}
                </span>
                <span className="font-mono text-xs text-text-dim">{m.period}</span>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <a
                  href={m.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md surface transition-colors hover:border-neon/60"
                  aria-label={`Visit ${m.company}`}
                >
                  <img
                    src={m.companyLogo}
                    alt={`${m.company} logo`}
                    width={32}
                    height={32}
                    className="h-7 w-7 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.parentElement as HTMLElement).innerHTML =
                        '<span class="font-mono text-xs text-neon">DS</span>';
                    }}
                  />
                </a>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-semibold text-text md:text-3xl">
                    {m.role}
                  </h3>
                  <p className="mt-1 text-sm text-text-dim">
                    <a
                      href={m.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-text underline-grow hover:text-neon"
                    >
                      <Building2 className="h-3.5 w-3.5" />
                      {m.company}
                      <ExternalLink className="h-3 w-3" />
                    </a>{" "}
                    · <span className="text-text">{m.location}</span>
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {m.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    className="flex gap-3 text-sm leading-relaxed text-text-dim"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {m.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border hairline bg-background px-2.5 py-1 font-mono text-[11px] text-text-dim transition-colors hover:border-neon/60 hover:text-neon"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Education */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-dim">
          // education & certifications
        </p>
        <ul className="mt-6 divide-y divide-line border-y hairline">
          {education.map((e) => (
            <li
              key={e.title}
              className="grid grid-cols-12 items-center gap-4 py-5 transition-colors hover:bg-surface/40"
            >
              <span className="col-span-12 font-mono text-xs text-text-dim md:col-span-3">
                {e.period}
              </span>
              <div className="col-span-12 flex items-center gap-4 md:col-span-9">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md surface transition-colors hover:border-neon/60"
                  aria-label={`Visit ${e.org}`}
                >
                  <img
                    src={e.logo}
                    alt={`${e.org} logo`}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                    onError={(ev) => {
                      const el = ev.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                      (el.parentElement as HTMLElement).innerHTML =
                        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(152 76% 56%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
                    }}
                  />
                </a>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base font-medium text-text md:text-lg">
                    {e.title}
                  </p>
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-text-dim hover:text-neon"
                  >
                    <GradCapIcon className="h-3.5 w-3.5" />
                    {e.org}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

import { Building2, Cog, FlaskConical, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    no: "01",
    year: "2022 — Present",
    title: "Microfin360 Next",
    kind: "Enterprise Fintech",
    icon: Building2,
    accent: "text-neon",
    desc: "End-to-end functional, regression & integration testing for a microfinance platform serving 350+ MFIs. Built scalable Selenium + Cucumber regression suites; validated APIs, SQL transactions, and critical financial workflows.",
    metrics: [
      { k: "350+", v: "MFIs" },
      { k: "45%", v: "Coverage ↑" },
      { k: "35%", v: "Defects ↓" },
    ],
    stack: ["Selenium", "Cucumber", "Java", "Postman", "JMeter", "SQL"],
  },
  {
    no: "02",
    year: "Self-initiated",
    title: "DataShift",
    kind: "Migration Automation",
    icon: Cog,
    accent: "text-cyan",
    desc: "Self-initiated data migration automation system — Spring Boot backend, HTML/CSS/JS frontend, Selenium automation, and Python scripts for preprocessing & validation. Compressed branch onboarding from 80h to 7h (90%+ reduction) with improved accuracy.",
    metrics: [
      { k: "90%+", v: "Time saved" },
      { k: "80→7h", v: "Per branch" },
      { k: "0", v: "Data loss" },
    ],
    stack: ["Spring Boot", "Java", "Selenium", "Python", "HTML/CSS/JS"],
  },
  {
    no: "03",
    year: "2021",
    title: "Real-Time Anomaly Detection",
    kind: "Research · Deep Learning",
    icon: FlaskConical,
    accent: "text-magenta",
    desc: "Co-authored research on real-time anomaly detection from surveillance cameras using deep neural networks. Awarded 3rd Best Paper at the IEEE International Conference on Sustainable Technologies for Industry 4.0.",
    metrics: [
      { k: "3rd", v: "Best paper" },
      { k: "IEEE", v: "Published" },
      { k: "DNN", v: "Architecture" },
    ],
    stack: ["Deep Learning", "Computer Vision", "Python", "Research"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 grid grid-cols-12 items-end gap-4">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">
              // 04 — projects
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-5xl">
              Things I've shipped, tested,{" "}
              <span className="font-serif italic font-normal text-neon">and stand behind.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="glow-card group relative flex flex-col rounded-xl p-6 shine"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md surface transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                    <Icon className={`h-5 w-5 ${p.accent}`} />
                  </div>
                  <span className="font-mono text-xs text-text-dim">{p.no} / 03</span>
                </div>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-dim">
                  {p.kind}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-text">
                  {p.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-text-dim">{p.desc}</p>

                <ul className="mt-6 grid grid-cols-3 gap-2 border-y hairline py-4">
                  {p.metrics.map((m) => (
                    <li key={m.v}>
                      <p className={`font-display text-xl font-semibold ${p.accent}`}>{m.k}</p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-dim">
                        {m.v}
                      </p>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border hairline bg-background px-2 py-0.5 font-mono text-[10px] text-text-dim transition-colors hover:border-neon/50 hover:text-neon"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-text-dim">{p.year}</span>
                  <ArrowUpRight className="h-4 w-4 text-text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

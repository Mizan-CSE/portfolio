import {
  TestTube2,
  Bot,
  Network,
  Gauge,
  ShieldAlert,
  GitBranch,
  Code2,
  Workflow,
} from "lucide-react";

const groups = [
  {
    icon: TestTube2,
    title: "Manual Testing",
    color: "text-neon",
    items: ["Functional", "Regression", "Integration", "Exploratory", "UAT", "Cross-browser", "Mobile", "Smoke / Sanity"],
  },
  {
    icon: Bot,
    title: "Automation",
    color: "text-cyan",
    items: ["Selenium WebDriver", "Cucumber (BDD)", "Appium", "TestNG", "JUnit", "POM Pattern", "Playwright (learning)"],
  },
  {
    icon: Network,
    title: "API Testing",
    color: "text-magenta",
    items: ["Postman", "Newman", "REST APIs", "JSON / XML", "Auth Flows", "Contract Testing"],
  },
  {
    icon: Gauge,
    title: "Performance",
    color: "text-amber",
    items: ["Apache JMeter", "Load Testing", "Stress Testing", "Spike Testing", "Reporting"],
  },
  {
    icon: ShieldAlert,
    title: "Security",
    color: "text-destructive",
    items: ["Burp Suite", "OWASP Top 10", "Auth Testing", "Input Validation", "DevTools Audit"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Tools",
    color: "text-neon",
    items: ["Jenkins", "Git / GitHub", "Jira", "Redmine", "Maven", "Allure Reports"],
  },
  {
    icon: Code2,
    title: "Programming",
    color: "text-cyan",
    items: ["Java", "Python", "SQL", "HTML / CSS", "JavaScript (basics)"],
  },
  {
    icon: Workflow,
    title: "AI & Methodology",
    color: "text-magenta",
    items: ["Agile / Scrum", "ChatGPT / Claude", "GitHub Copilot", "AI-assisted test design", "Test strategy", "Release validation"],
  },
];

import { motion } from "framer-motion";

export const Stack = () => {
  return (
    <section id="stack" className="relative bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 grid grid-cols-12 items-end gap-4">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">
              // 02 — stack
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-5xl">
              The toolkit I reach for{" "}
              <span className="font-serif italic font-normal text-neon">every day.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <p className="font-mono text-sm text-text-dim">
              <span className="text-neon">{">"}</span> 8 disciplines · 40+ tools · battle-tested
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border hairline bg-line sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(({ icon: Icon, title, color, items }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative bg-background p-6 transition-colors hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <Icon className={`h-5 w-5 ${color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} />
                <span className="font-mono text-[10px] text-text-dim">{String(items.length).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-text">{title}</h3>
              <ul className="mt-4 space-y-1.5">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-text-dim transition-colors hover:text-text">
                    <span className={`h-1 w-1 rounded-full bg-current ${color} opacity-70`} />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-neon transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

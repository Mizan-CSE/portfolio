const items = [
  "Selenium WebDriver",
  "Cucumber BDD",
  "Apache JMeter",
  "Postman / Newman",
  "Appium",
  "TestNG",
  "JUnit",
  "Playwright",
  "Burp Suite",
  "Jenkins CI",
  "Java",
  "Python",
  "SQL",
  "REST APIs",
  "GitHub Copilot",
  "Agile / Scrum",
];

export const Marquee = () => {
  const loop = [...items, ...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y hairline bg-surface/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap [animation-play-state:running] group-hover:[animation-play-state:paused]">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm text-text-dim">
            <span className="cursor-default transition-all hover:text-neon hover:tracking-wider">{it}</span>
            <span className="text-neon/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

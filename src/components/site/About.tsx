import { MapPin, Briefcase, Award, GraduationCap } from "lucide-react";

const meta = [
  { icon: MapPin, label: "Based in", value: "Dhaka, BD" },
  { icon: Briefcase, label: "Role", value: "QA Engineer" },
  { icon: Award, label: "Recognition", value: "Star Player '24" },
  { icon: GraduationCap, label: "Education", value: "BSc CSE, GUB" },
];

export const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">
            // 01 — about
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-5xl">
            Quality isn't a phase.
            <br />
            <span className="font-serif italic font-normal text-neon">It's a discipline.</span>
          </h2>

          <p className="mt-8 text-base leading-relaxed text-text-dim">
            I'm a QA Engineer who treats testing as engineering. Over the last 4 years
            I've shipped quality across enterprise fintech — designing test strategies,
            building automation frameworks that scale, and finding the edge cases everyone missed.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-dim">
            I move fluently between manual exploratory testing, BDD automation, API
            validation, performance load tests, and security audits — and I lean on
            modern AI tooling to accelerate test design, data generation, and defect analysis.
          </p>
        </div>

        <div className="md:col-span-7">
          {/* Terminal card */}
          <div className="glow-card relative overflow-hidden rounded-xl">
            <div className="flex items-center justify-between border-b hairline px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
              </div>
              <span className="font-mono text-[11px] text-text-dim">~/mijanur/profile.json</span>
              <span className="font-mono text-[11px] text-neon">● live</span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-text-dim">
              {`{
  "`}<span className="text-cyan">name</span>{`": "`}<span className="text-text">Md Mijanur Rahman</span>{`",
  "`}<span className="text-cyan">role</span>{`": "`}<span className="text-text">QA Engineer</span>{`",
  "`}<span className="text-cyan">experience_years</span>{`": `}<span className="text-amber">4</span>{`,
  "`}<span className="text-cyan">domains</span>{`": [`}<span className="text-magenta">"fintech"</span>{`, `}<span className="text-magenta">"microfinance"</span>{`, `}<span className="text-magenta">"enterprise"</span>{`],
  "`}<span className="text-cyan">testing</span>{`": {
    "`}<span className="text-cyan">manual</span>{`":     [`}<span className="text-magenta">"functional"</span>{`, `}<span className="text-magenta">"regression"</span>{`, `}<span className="text-magenta">"UAT"</span>{`, `}<span className="text-magenta">"exploratory"</span>{`],
    "`}<span className="text-cyan">automation</span>{`": [`}<span className="text-magenta">"selenium"</span>{`, `}<span className="text-magenta">"cucumber"</span>{`, `}<span className="text-magenta">"appium"</span>{`, `}<span className="text-magenta">"testng"</span>{`],
    "`}<span className="text-cyan">api</span>{`":        [`}<span className="text-magenta">"postman"</span>{`, `}<span className="text-magenta">"newman"</span>{`, `}<span className="text-magenta">"rest_assured"</span>{`],
    "`}<span className="text-cyan">performance</span>{`":[`}<span className="text-magenta">"jmeter"</span>{`],
    "`}<span className="text-cyan">security</span>{`":   [`}<span className="text-magenta">"burp_suite"</span>{`, `}<span className="text-magenta">"owasp_basics"</span>{`]
  },
  "`}<span className="text-cyan">status</span>{`": "`}<span className="text-neon">available_for_hire</span>{`"
}`}
            </pre>
          </div>

          {/* Meta grid */}
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {meta.map(({ icon: Icon, label, value }) => (
              <div key={label} className="surface rounded-lg p-4">
                <Icon className="h-4 w-4 text-neon" />
                <dt className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text-dim">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-text">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

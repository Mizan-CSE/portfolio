import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/md-mijanur-rahman",
    href: "https://www.linkedin.com/in/md-mijanur-rahman-85138816a/",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "@Mizan-CSE",
    href: "https://github.com/Mizan-CSE",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "mizan.csegub@gmail.com",
    href: "mailto:mizan.csegub@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    handle: "+880 1531-743091",
    href: "tel:+8801531743091",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t hairline">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-neon/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">
          // 07 — contact
        </p>

        <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-text text-balance">
          Have a product worth{" "}
          <span className="font-serif italic font-normal text-neon">testing properly?</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <a
              href="mailto:mizan.csegub@gmail.com"
              className="group inline-flex items-center gap-3 font-display text-2xl font-medium text-text underline decoration-neon decoration-2 underline-offset-[10px] hover:text-neon md:text-3xl break-all"
            >
              mizan.csegub@gmail.com
              <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="mt-8 max-w-md text-base leading-relaxed text-text-dim">
              Open to SQA roles, automation engagements, and collaborations on fintech or
              enterprise products. I read every message and reply within a few days.
            </p>

            <ul className="mt-10 space-y-2 text-sm">
              <li className="flex items-center gap-3 text-text-dim">
                <Phone className="h-4 w-4 text-neon" />
                <span className="text-text">+880 1531-743091</span>
              </li>
              <li className="flex items-center gap-3 text-text-dim">
                <MapPin className="h-4 w-4 text-neon" />
                Mirpur, Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          <ul className="md:col-span-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, handle, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-card group flex items-center justify-between gap-4 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md surface">
                      <Icon className="h-4 w-4 text-neon" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-dim">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-text">{handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="relative border-t hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim md:flex-row md:items-center md:px-10">
          <span>© 2026 Md Mijanur Rahman</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon pulse-dot" />
            All systems operational · v2026.04
          </span>
        </div>
      </footer>
    </section>
  );
};

import { FileText, ExternalLink, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

const publications = [
  {
    title:
      "Detection of Online Fake News Using Optimized Ensemble Deep Learning Models",
    venue: "IEEE Xplore · ICCIT 2021",
    role: "Co-author",
    award: "3rd Best Paper Award",
    year: "2022",
    abstract:
      "Proposed an optimized ensemble deep-learning approach combining LSTM, GRU and CNN for detecting fake news with improved precision/recall over baseline models.",
    href: "https://ieeexplore.ieee.org/document/9732584",
    tags: ["Deep Learning", "NLP", "Ensemble Models", "IEEE"],
  },
];

export const Publications = () => {
  return (
    <section
      id="publications"
      className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">
          // 06 — publications
        </p>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-5xl">
          Research, peer{" "}
          <span className="font-serif italic font-normal text-neon">
            reviewed.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-dim">
          Published research at IEEE on machine learning systems — bringing the
          same rigor I apply to test engineering.
        </p>
      </div>

      <ul className="space-y-6">
        {publications.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="glow-card group block rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-neon/10 px-2 py-0.5 font-mono text-[11px] text-neon">
                  <BookOpen className="h-3 w-3" />
                  IEEE
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber/10 px-2 py-0.5 font-mono text-[11px] text-amber">
                  <Award className="h-3 w-3" />
                  {p.award}
                </span>
                <span className="font-mono text-xs text-text-dim">
                  {p.venue} · {p.year}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-text md:text-2xl group-hover:text-neon transition-colors">
                {p.title}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-dim">
                {p.abstract}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border hairline bg-background px-2.5 py-1 font-mono text-[11px] text-text-dim"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-neon">
                  <FileText className="h-3.5 w-3.5" />
                  Read on IEEE
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

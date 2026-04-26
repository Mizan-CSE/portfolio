import { useEffect, useState } from "react";
import { useSectionNavigation } from "@/hooks/use-section-navigation";
import { Logo } from "./Logo";

const links = [
  { id: "about", label: "About", n: "01" },
  { id: "stack", label: "Stack", n: "02" },
  { id: "experience", label: "Experience", n: "03" },
  { id: "projects", label: "Projects", n: "04" },
  { id: "opensource", label: "GitHub", n: "05" },
  { id: "publications", label: "Papers", n: "06" },
  { id: "contact", label: "Contact", n: "07" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigateToSection = useSectionNavigation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b hairline" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Logo />

        <ul className="hidden gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => navigateToSection(link.id)}
                className="group relative inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-text-dim transition-colors hover:text-text"
              >
                <span className="font-mono text-[10px] text-neon/70">{link.n}</span>
                <span>{link.label}</span>
                <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-neon transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => navigateToSection("contact")}
          className="hidden items-center gap-2 rounded-md border border-neon/40 bg-neon/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-neon transition-all hover:bg-neon hover:text-background hover:shadow-[0_0_24px_hsl(var(--neon)/0.6)] md:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon pulse-dot" />
          Available
        </button>

        <button
          onClick={() => setOpen((value) => !value)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md surface"
          aria-label="Toggle menu"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute inset-x-0 top-0 h-px bg-text transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 bottom-0 h-px bg-text transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t hairline bg-background/95 backdrop-blur-xl">
          <ul className="mx-auto max-w-6xl px-6 py-4">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    navigateToSection(link.id);
                  }}
                  className="flex items-center gap-3 py-3 text-text"
                >
                  <span className="font-mono text-xs text-neon/70">{link.n}</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

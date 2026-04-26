import { scrollToSection } from "@/lib/scroll-to-section";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <button
      type="button"
      onClick={() => scrollToSection("top")}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Mijanur Rahman home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md surface">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-neon" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6 L4 18 L8 18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 6 L20 18 L16 18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 13 L11.2 15.2 L15 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-neon shadow-[0_0_10px_hsl(var(--neon))]" />
      </span>
      <span className="font-display text-[15px] font-semibold tracking-tight text-text">
        mijanur<span className="text-neon">.</span>qa
      </span>
    </button>
  );
};

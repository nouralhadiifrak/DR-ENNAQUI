type LogoProps = { tagline: string; className?: string };

/** Placeholder monogram until the client sends her logo: "KE" inside a double
 *  arch that echoes the portrait frame. */
export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M7 44V22a17 17 0 0 1 34 0v22" strokeWidth="1.1" />
      <path d="M11 44V22.5a13 13 0 0 1 26 0V44" strokeWidth="0.6" opacity="0.5" />
      <path d="M19 18v20" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 28.5 25.5 18M21.5 25l5 13" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M30 18v20M30 18h5M30 28h4M30 38h5" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tagline, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <Emblem className="size-8 shrink-0 text-accent sm:size-10" />
      <span className="flex flex-col leading-none">
        {/* Two short lines on phones to leave room for the header controls. */}
        <span className="font-display text-[0.95rem] font-semibold leading-[1.05] tracking-wide sm:text-[1.15rem] sm:leading-none" dir="ltr">
          <span className="block sm:inline">Dr Khadija </span>
          <span className="block sm:inline">Ennaqi</span>
        </span>
        <span className="mt-1 hidden text-[0.62rem] font-medium uppercase tracking-[0.22em] opacity-70 sm:block">
          {tagline}
        </span>
      </span>
    </span>
  );
}

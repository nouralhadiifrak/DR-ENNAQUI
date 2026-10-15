type LogoProps = { tagline: string; className?: string };

/** The client's logo (line drawing of an expecting mother). It's drawn through
 *  a CSS mask filled with currentColor, so it follows the theme like an icon. */
export function Emblem({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`logo-mark inline-block aspect-[365/600] bg-current [mask:url(/logo-mark.png)_center/contain_no-repeat] ${className}`}
    />
  );
}

export function Logo({ tagline, className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <Emblem className="h-11 shrink-0 text-accent sm:h-12" />
      <span className="flex flex-col leading-none">
        {/* Two short lines on phones to leave room for the header controls. */}
        <span className="font-display text-[0.95rem] font-semibold leading-[1.05] tracking-wide sm:text-[1.15rem] sm:leading-none" dir="ltr">
          <span className="block sm:inline">Dr Khadija </span>
          <span className="block sm:inline">Ennaqui</span>
        </span>
        <span className="mt-1 hidden text-[0.62rem] font-medium uppercase tracking-[0.22em] opacity-70 sm:block">
          {tagline}
        </span>
      </span>
    </span>
  );
}

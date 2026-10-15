import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { PinSpinIcon } from "./AnimatedIcons";
import { CalendarIcon } from "./Icons";
import { Photo } from "./Photo";
import { BrandButton } from "./BrandButton";
import { CurtainReveal } from "./fx/CurtainReveal";

type Props = { dict: Dictionary["hero"]; portrait: string; portraitPosition?: string };

// Phones: title + subtitle, then the portrait (buttons are hidden, the sticky
// bottom bar covers Call / Book). From lg the portrait gets its own column.
export function Hero({ dict, portrait, portraitPosition = "50% 50%" }: Props) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-bg text-ink">
      {/* Soft palette glows, tinted for each theme */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_65%,transparent)]">
        <div className="absolute -top-40 end-[-10%] size-[42rem] rounded-full bg-peach/50 blur-[120px] dark:bg-rose/15" />
        <div className="absolute bottom-[-25%] start-[-15%] size-[34rem] rounded-full bg-mint/45 blur-[110px] dark:bg-mint/[0.07]" />
        <div className="absolute top-1/3 start-1/3 size-[22rem] rounded-full bg-lime/60 blur-[100px] dark:bg-lime/[0.04]" />
        <svg
          className="absolute end-[-12rem] top-1/2 hidden size-[56rem] -translate-y-1/2 text-ink/[0.06] lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.15"
        >
          <circle cx="50" cy="50" r="49" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="31" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-24 sm:px-6 lg:min-h-[100svh] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-x-16 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="text-center lg:text-start">
          <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-kicker text-gold lg:justify-start">
            <span className="hidden h-px w-10 bg-gold/50 lg:block" aria-hidden="true" />
            {dict.eyebrow}
          </p>
          <CurtainReveal
            tag="h1"
            text={dict.title}
            className="tracking-title mt-6 pb-2 font-display text-[2.4rem] font-semibold uppercase leading-[1.05] text-balance sm:text-6xl lg:text-[4.4rem]"
          />
          <CurtainReveal
            tag="p"
            text={dict.subtitle}
            delay={0.35}
            className="mx-auto mt-6 max-w-xl text-sm uppercase leading-relaxed tracking-[0.12em] text-muted sm:text-base lg:mx-0"
          />

          <div className="mt-10 hidden flex-row justify-center gap-3 sm:flex lg:justify-start">
            <BrandButton variant="outline" href={site.mapsUrl} newTab icon={<PinSpinIcon />}>
              {dict.ctaVisit}
            </BrandButton>
            <BrandButton href="#booking" icon={<CalendarIcon />}>
              {dict.ctaBook}
            </BrandButton>
          </div>

          <ul className="mt-12 hidden flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.12em] text-muted lg:flex">
            {dict.badges.map((b) => (
              <li key={b} className="flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 backdrop-blur">
                <span className="size-1.5 rounded-full bg-rose" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm lg:max-w-md">
          <div aria-hidden="true" className="absolute -inset-3 rounded-t-full border border-rose/60" />
          <div aria-hidden="true" className="absolute -inset-6 rounded-t-full border border-peach/40" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-surface-2 shadow-2xl shadow-plum/20 dark:shadow-black/40">
            <Photo
              src={portrait}
              alt={dict.portraitAlt}
              fill
              preload
              sizes="(min-width: 1024px) 28rem, 18rem"
              className="object-cover"
              style={{ objectPosition: portraitPosition }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

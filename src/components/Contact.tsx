import type { Dictionary } from "@/i18n/dictionaries";
import { OPENING_HOURS } from "@/lib/schedule";
import { fullAddress, site } from "@/lib/site";
import { PhoneRingIcon, PinSpinIcon } from "./AnimatedIcons";
import { ArrowIcon, ClockIcon, InstagramIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./ui";

const fmt = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
const weekOrder = [1, 2, 3, 4, 5, 6, 0];

/** Monday–Friday first, then each remaining day on its own line. */
function hourGroups() {
  const groups: { from: number; to: number; hours?: [number, number] }[] = [];
  for (const d of weekOrder) {
    const h = OPENING_HOURS[d];
    const last = groups.at(-1);
    // Weekdays merge when identical; Saturday and Sunday always get their own row.
    if (last && d >= 2 && d <= 5 && last.hours?.[0] === h?.[0] && last.hours?.[1] === h?.[1]) last.to = d;
    else groups.push({ from: d, to: d, hours: h });
  }
  return groups;
}

const link =
  "font-semibold text-accent underline decoration-accent/50 decoration-1 underline-offset-4 transition hover:decoration-accent";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const block = "flex gap-4 py-5 first:pt-0 last:pb-0";
  const icon = "mt-0.5 shrink-0 text-xl text-accent";
  const label = "font-display text-lg font-semibold leading-none";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={dict.kicker} title={dict.title} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="divide-y divide-line rounded-3xl border border-line bg-surface p-6 shadow-sm shadow-plum/5 sm:p-7">
            <div className={block}>
              <PinSpinIcon className={icon} />
              <div className="flex-1">
                <p className={label}>{dict.address}</p>
                <address className="mt-2 text-sm not-italic leading-relaxed text-muted" dir="ltr" lang="fr">
                  {fullAddress}
                </address>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={`mt-2 inline-flex items-center gap-1.5 text-sm ${link}`}>
                  {dict.directions} <ArrowIcon className="rtl:-scale-x-100" />
                </a>
              </div>
            </div>

            <div className={block}>
              <ClockIcon className={icon} />
              <div className="flex-1">
                <p className={label}>{dict.hours}</p>
                <dl className="mt-2 space-y-1 text-sm">
                  {hourGroups().map((g) => (
                    <div key={g.from} className="flex justify-between gap-4">
                      <dt className="font-medium">
                        {g.from === g.to ? dict.days[g.from] : `${dict.days[g.from]} – ${dict.days[g.to]}`}
                      </dt>
                      <dd className={g.hours ? "tabular-nums text-muted" : "text-muted/70"} dir="ltr">
                        {g.hours ? `${fmt(g.hours[0])} – ${fmt(g.hours[1])}` : dict.closed}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className={block}>
              <PhoneRingIcon className={icon} />
              <div className="flex-1">
                <p className={label}>{dict.phones}</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {(["office", "mobile"] as const).map((k) => (
                    <li key={k} className="flex items-center justify-between gap-4">
                      <span className="text-muted">{dict[k]}</span>
                      <a href={`tel:${site.phones[k].tel}`} dir="ltr" className={`tabular-nums ${link}`}>
                        {site.phones[k].display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={block}>
              <InstagramIcon className={icon} />
              <div className="flex-1">
                <p className={label}>{dict.social}</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-muted">
                      <WhatsAppIcon className="text-[#25D366]" /> {dict.whatsapp}
                    </span>
                    <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" dir="ltr" className={`tabular-nums ${link}`}>
                      {site.phones.mobile.display}
                    </a>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-muted">
                      <InstagramIcon className="text-[#d6297a] dark:text-[#ff7eb6]" /> {dict.instagram}
                    </span>
                    <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" dir="ltr" className={`min-w-0 break-all ${link}`}>
                      {site.instagram.handle}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fixed heights: a percentage height inside an auto-height box collapses on
              phones, and a lazy iframe with no height never loads. */}
          <div className="relative h-72 overflow-hidden rounded-3xl border border-line bg-surface-2 sm:h-80 lg:h-auto lg:min-h-[22rem]">
            <iframe
              title={dict.mapTitle}
              src={site.mapsEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 dark:opacity-90 dark:[filter:invert(0.9)_hue-rotate(180deg)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

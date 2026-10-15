import { cacheLife } from "next/cache";
import type { Dictionary } from "@/i18n/dictionaries";
import { fullAddress, site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer({ dict, nav }: { dict: Dictionary["footer"]; nav: Dictionary["nav"] }) {
  const links = [
    ["#about", nav.about],
    ["#services", nav.services],
    ["#cabinet", nav.cabinet],
    ["#booking", nav.booking],
    ["#contact", nav.contact],
  ] as const;
  const year = await currentYear();
  const social = "grid size-10 place-items-center rounded-full border border-blush/20 text-lg transition hover:bg-blush/10";

  return (
    <footer className="bg-plum-deep pb-28 pt-16 text-blush lg:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <Logo tagline={dict.tagline} className="[&_.logo-mark]:text-rose" />
          <p className="mt-6 text-sm leading-relaxed text-blush/60" dir="ltr" lang="fr">
            {fullAddress}
          </p>
          <div className="mt-5 flex gap-3">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={social}>
              <WhatsAppIcon />
            </a>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${site.instagram.handle}`} className={social}>
              <InstagramIcon />
            </a>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-blush/75">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-blush">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          {(["office", "mobile"] as const).map((k) => (
            <a
              key={k}
              href={`tel:${site.phones[k].tel}`}
              dir="ltr"
              className="font-semibold tabular-nums underline decoration-blush/40 decoration-1 underline-offset-4 hover:decoration-blush rtl:text-right"
            >
              {site.phones[k].display}
            </a>
          ))}
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="underline decoration-blush/40 decoration-1 underline-offset-4 hover:decoration-blush rtl:text-right"
          >
            {site.instagram.handle}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-blush/10 px-4 pt-6 text-xs text-blush/50 sm:px-6 lg:px-8">
        © {year} {site.name}. {dict.rights}
      </p>
    </footer>
  );
}

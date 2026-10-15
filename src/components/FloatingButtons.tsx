import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

/** Floating WhatsApp + Instagram buttons; sit above the sticky bar on phones. */
export function FloatingButtons({ dict }: { dict: Dictionary["floating"] }) {
  const btn =
    "float-pulse relative isolate grid size-12 place-items-center rounded-full text-2xl text-white shadow-lg shadow-plum/25 ring-2 ring-white/70 transition hover:scale-105 focus-visible:scale-105 sm:size-14 sm:text-[1.7rem] dark:ring-white/15";

  return (
    <div className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] end-4 z-30 flex flex-col gap-3 sm:end-6 lg:bottom-6">
      <a
        href={site.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${dict.instagram} (${site.instagram.handle})`}
        title={dict.instagram}
        className={`${btn} bg-[linear-gradient(45deg,#f9a03f,#e1306c_45%,#833ab4)]`}
      >
        <InstagramIcon />
      </a>
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.whatsapp}
        title={dict.whatsapp}
        className={`${btn} bg-[#25D366]`}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

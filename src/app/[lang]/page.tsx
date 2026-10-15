import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Services } from "@/components/Services";
import { hasLocale, intlLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { OPENING_HOURS } from "@/lib/schedule";
import { gallery, site } from "@/lib/site";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hhmm = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

function JsonLd({ lang, name }: { lang: Locale; name: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    medicalSpecialty: ["Gynecologic", "Obstetric"],
    telephone: site.phones.office.tel,
    url: `${site.url}/${lang}`,
    image: `${site.url}${gallery[0].src}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.district,
      addressCountry: site.address.country,
    },
    hasMap: site.mapsUrl,
    sameAs: [site.instagram.url],
    openingHoursSpecification: Object.entries(OPENING_HOURS).map(([day, hours]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayNames[Number(day)],
      opens: hhmm(hours![0]),
      closes: hhmm(hours![1]),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} name={dict.hero.title} />
      <Header lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} portrait={gallery[0].src} portraitPosition={gallery[0].position} />
        <About dict={dict.about} />
        <Services dict={dict.services} bookLabel={dict.nav.book} />
        <Gallery dict={dict.gallery} />
        <Booking dict={dict.booking} lang={lang} intlLocale={intlLocale[lang]} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} nav={dict.nav} />
      <FloatingButtons dict={dict.floating} />
      <MobileActionBar dict={dict.nav} />
    </>
  );
}

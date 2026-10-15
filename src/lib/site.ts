// Practice details shown across the site. Edit here to update every page.

export const site = {
  name: "Dr Khadija Ennaqui",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phones: {
    office: { display: "05 22 75 82 82", tel: "+212522758282" },
    mobile: { display: "06 42 77 15 45", tel: "+212642771545" },
  },
  // Number given by the client for emergencies (shown with the booking form).
  emergency: { display: "06 07 18 02 54", tel: "+212607180254" },
  whatsappUrl: "https://wa.me/212642771545",
  instagram: {
    handle: "@dr_ennaqui_khadija",
    url: "https://www.instagram.com/dr_ennaqui_khadija/",
  },
  address: {
    street: "71 Bd Mokhtar Ben Ahmed Al Guerraoui",
    district: "Hay Al Qods, Bernoussi",
    city: "Casablanca",
    country: "MA",
  },
  mapsUrl:
    "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDAgAEAAYQxiABBiKBTIMCAAQABhDGIAEGIoFMgwIARAuGCcYrwEYxwEyBggCEEUYOTINCAMQABiDARixAxiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRg8MgYIBxBFGDzSAQgxNjcwajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KWm3zfqxy6cNMZU_2Rb3E0a2&daddr=JG63%2BWWX,+Bd+Mokhtar+Ben+Ahmed+Al+Guerraoui,+Casablanca",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=71+Bd+Mokhtar+Ben+Ahmed+Al+Guerraoui,+Casablanca&z=16&hl=fr&output=embed",
};

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city}`;

// Gallery order. The first photo is also the hero portrait.
// `fit: "contain"` shows tall photos in full over a blurred copy of themselves.
// Placeholders until the client sends her photos (see docs/PROJECT_NOTES.md).
export const gallery = [
  { src: "/images/doctor-portrait.svg", key: "doctor", position: "50% 30%" },
  { src: "/images/building.svg", key: "building", fit: "contain" },
  { src: "/images/reception.svg", key: "reception" },
  { src: "/images/waiting-room.svg", key: "waiting" },
  { src: "/images/office.svg", key: "office" },
  { src: "/images/exam-room.svg", key: "exam" },
] as const satisfies readonly { src: string; key: string; fit?: "contain"; position?: string }[];

export type GalleryKey = (typeof gallery)[number]["key"];

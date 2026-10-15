# Project notes – Dr Khadija Ennaqi website

Read this first when resuming work. It records decisions, status and open
items. No secrets belong in this file.

## Client

- Dr ENNAQI Khadija, gynécologue-obstétricienne (female: every text uses feminine forms).
  - Spelling confirmed by the owner: **ENNAQI**. The Instagram handle is
    `@dr_ennaqui_khadija` (with a "u"), so it's kept as-is.
  - Arabic name: الدكتورة الناقي خديجة (as provided; needs a native-speaker check).
- Address: 71 Bd Mokhtar Ben Ahmed Al Guerraoui, Hay Al Qods, Bernoussi, Casablanca
  (the client wrote "hay lqods barnoussi"; the spelling needs confirming).
- Phones: cabinet 05 22 75 82 82, mobile 06 42 77 15 45 (WhatsApp).
  Emergency number (from the client): 06 07 18 02 54.
- Instagram: https://www.instagram.com/dr_ennaqui_khadija/
- Hours: Mon–Sat 08:30–18:00, Sunday closed. Slots: 20 min. No lunch break.
- Palette: #FF9D9D, #FFC5AA, #EEF8CD, #BBF1D2. Feel: calm, safe, experienced, luxury, professional.

## Decisions

- Started from the proven code of the previous doctor site (Next.js 16.4 +
  Tailwind 4 + framer-motion + google-auth-library). No new dependencies.
- Deep plum (#3B2530 / #7A3B4A) anchors text and the light-mode primary
  button for contrast. The four brand colours are used for glows, borders,
  trails, the dark-mode button (#FF9D9D) and accents.
- French uses "La docteure" (the modern feminine form) and "gynécologue-obstétricienne".
- 4 qualifications and 4 services, as the owner confirmed.
- Qualifications use neutral, non-credential items (specialty, pregnancy
  follow-up, emergency number, location). No diplomas are invented.
- Gallery and portrait use SVG placeholders; the logo is a placeholder "KE" monogram.
- Floating WhatsApp + Instagram buttons sit on the end side, above the
  sticky Call / Book bar on phones. Instagram also appears in Contact and Footer.
- Contact hours are grouped as "Lundi – Vendredi / Samedi / Dimanche". Saturday
  always has its own row, even though its hours match the weekdays.

## Open items (waiting on the client)

- [ ] Full biography (the about text is a generic placeholder).
- [ ] Real qualifications/diplomas (the 4 items are placeholders).
- [ ] Real list of services and their details (the 4 services are placeholders).
- [ ] Photos: portrait, building, reception, waiting rooms, offices, exam rooms
      (≥1600px wide; portrait ≥800×1000).
- [ ] Logo file (SVG or transparent PNG).
- [ ] Native-speaker check of the Arabic translation and of the Arabic name.
- [ ] Confirm the spelling of the district (Hay Al Qods, Bernoussi).
- [ ] Hours: the owner answered "no" to "is Saturday 08:30–18:00 like weekdays,
      and should booking skip lunch?". This was read as "no lunch break" and
      the brief's hours were kept. **Confirm the Saturday hours.**
- [ ] Google Calendar: share the doctor's calendar with the service account
      ("Make changes to events"), calendar timezone (GMT+01:00) Casablanca, then set
      env vars on Vercel and redeploy (README → Google Calendar setup).
- [ ] Domain name, then set NEXT_PUBLIC_SITE_URL.
- [ ] Legal: Ordre des Médecins advertising rules; patient data (law 09-08 /
      CNDP) → privacy page and legal notice.

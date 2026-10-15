# Dr Khadija Ennaqui – Website

One-page site for Dr ENNAQUI Khadija, gynécologue-obstétricienne in Casablanca. It's in French (default), English and Arabic (RTL), with light/dark mode, WhatsApp and Instagram buttons, and online booking through Google Calendar.

Built with Next.js 16 (App Router, TypeScript), Tailwind CSS 4 and framer-motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /fr
npm run build      # production build
npm run lint
```

Without Google credentials, `npm run dev` runs booking in **demo mode**: the form works but nothing is saved, and the success screen says so. In production (`npm run build && npm start`, or Vercel), booking refuses requests with `not_configured` until Calendar is set up, so patients never get a false confirmation.

> If styles look missing after switching branches, delete `.next/` and rebuild.

## Where to edit things

| What | File |
| --- | --- |
| Texts (FR / EN / AR) | `src/i18n/dictionaries/fr.ts`, `en.ts`, `ar.ts` |
| Phones, emergency number, address, map, WhatsApp, Instagram, photos | `src/lib/site.ts` |
| Opening hours, 20-min slots, booking window | `src/lib/schedule.ts` |
| Colours and fonts | `src/app/globals.css`, `src/app/[lang]/layout.tsx` |
| Logo | `public/logo-mark.png` (mask), `public/images/logo.png`, `src/app/icon.png`, `src/app/apple-icon.png` |

**Photos:** the files in `public/images/` are placeholders. Put the real photos there with URL-safe names (lowercase, dashes, no accents, e.g. `doctor-portrait.jpg`, `building.jpg`, `reception.jpg`, `waiting-room.jpg`, `office.jpg`, `exam-room.jpg`). Then update the `gallery` list in `src/lib/site.ts`. Keep the portrait first: it's also the hero photo. Add `fit: "contain"` to tall photos so they show in full over a blurred copy of themselves. Add a caption for each new key in all three dictionaries (`gallery.captions`).

## Google Calendar setup

Appointments are written by a Google **service account** into the doctor's calendar. Slots that overlap a busy event in that calendar show as unavailable. Each booking is re-checked just before it's saved.

1. Go to <https://console.cloud.google.com/>, create a project (e.g. "dr-ennaqui-booking") and enable the **Google Calendar API** (*APIs & Services → Library*).
2. *IAM & Admin → Service Accounts → Create service account*. A name is enough; no roles are needed.
3. Open the service account → *Keys → Add key → Create new key → JSON*. Download the file and keep it private.
4. In **Google Calendar** (signed in with the account that should receive the bookings):
   1. *Settings → General → Time zone*: set **(GMT+01:00) Casablanca**.
   2. *Settings → Settings for my calendars → (the calendar) → Share with specific people or groups → Add people*. Paste the service account's email (`client_email` in the JSON) and choose **"Make changes to events"** (shown in some languages as "Make changes (see private events as free/busy)").
   3. Under *Integrate calendar*, copy the **Calendar ID** (for a main calendar, this is the Gmail address).
5. Set the environment variables, in `.env.local` locally and in Vercel → *Settings → Environment Variables* for production (see `.env.example`):
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: `client_email` from the JSON
   - `GOOGLE_PRIVATE_KEY`: `private_key` from the JSON, in quotes, keeping the `\n`
   - `GOOGLE_CALENDAR_ID`: the Calendar ID from step 4.3
6. Redeploy on Vercel. Then delete the downloaded JSON file.

Each booking creates an event "RDV · Patient name" with the phone and reason in its description. To block time (holidays, lunch, surgery), add a **Busy** event in the calendar. All-day events block the day only if they're set to "Busy".

## API

- `GET /api/availability?date=YYYY-MM-DD` → `{ date, closed, slots: [{ time, available }] }` (`closed: true` on Sundays)
- `POST /api/book` with `{ name, phone, date, time, message?, locale }` → `{ ok: true }`, or an `error`: `invalid`, `slot_unavailable`, `not_configured`, `calendar_unavailable`. Includes a honeypot field.

## Deploy

Vercel deploys the `main` branch. Add the environment variables above, then set `NEXT_PUBLIC_SITE_URL` to the final domain.

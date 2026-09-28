# How the PlayArena website works

## What it is

A single-page marketing site that persuades **stadium and sports-venue owners** to sign up for PlayArena, a booking and management platform. Owners, managers and players use the product itself in separate apps. This site only explains the product and collects owner sign-up requests.

## Tech

- **React 19 + Vite**, plain CSS, and no backend.
- `src/main.jsx` mounts the app. `src/App.jsx` holds every component and all page content. `src/App.css` holds all styles.
- Commands:
  - `npm run dev`: local dev server
  - `npm run build`: builds to `dist/`
  - `npm run preview`: serves the build
  - `npm run lint`: runs oxlint

## Page flow (top to bottom)

| Section | Purpose |
|---|---|
| Header | Logo, links to the page's sections, **Log in** (goes to the owner app at `candid-lamington-97f395.netlify.app/login`), and **Get started** |
| Hero | Main pitch, a mock owner dashboard, and a social-proof line ("1,200+ venue teams") |
| Enrollment bar | The 3 onboarding steps and an **Enroll** button |
| Sports band | The sports the platform supports |
| Problems (`#solution`) | The 3 pain points owners have |
| Connected flow (`#how-it-works`) | How customers, managers and owners connect. Each step can be clicked |
| Features (`#features`) | 6 product capabilities |
| Smart local reach | City tabs (Bengaluru / Mumbai / Hyderabad) that preview a local promo banner and push notification |
| Quote | An owner testimonial |
| Plans (`#plans`) | Free / Premium / Exclusive, with a Monthly/Yearly toggle |
| Final CTA and footer | Last call to enroll, plus footer links |

## Interactive behavior

- **Owner sign-up form:** every "Get started / Enroll / plan" button opens a modal with the matching plan already selected. When submitted, it closes and shows a thank-you toast. **The form data is not sent or saved anywhere yet.** A real submit endpoint or backend still needs to be connected.
- **Pricing:** yearly price = monthly × 12 × 0.8 (20% off), shown next to the struck-through full price. The per-booking commission is 8% on Free, 7% on Premium and 6% on Exclusive.
- **Toasts:** short confirmation messages that hide after 2.8 seconds. The "See how it works" button and the campaign "Book a slot" button only show a toast. Neither does anything else yet.
- **Scroll effects:** the header turns solid after scrolling. Cards fade in as they enter the screen, using IntersectionObserver.

## Editing content

All text for problems, features, plans and city campaigns lives in data arrays at the top of `src/App.jsx`. To change a price, a feature or a city, edit those arrays. The components don't need to change.

## Known gaps / next steps

- Connect the owner form to a real backend or form service.
- Wire the product tour ("See how it works") to real content.
- Replace the placeholder numbers in the dashboard mock and the testimonial with real data.
- A full visual redesign is planned. See `REDESIGN_PROMPT.md` and run it with `./redesign.sh`.

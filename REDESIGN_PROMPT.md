# PlayArena landing page — redesign brief for Claude

You are redesigning the PlayArena owner landing page in this repo (React 19 + Vite, plain CSS).
Keep **all content and behavior**; replace the **visual design** completely.

## 1. Ground rules

- Stack stays the same: React 19, Vite, plain CSS. No Tailwind, no UI kits, no new runtime dependencies.
- Split the current single-file `src/App.jsx` into components under `src/components/` (Header, Hero, HeroVisual, EnrollmentBar, SportsBand, Problems, Flow, Features, LocalReach, Quote, Plans, FinalCta, Footer, OwnerForm, Toast). Move the data arrays into `src/data/content.js`.
- One stylesheet per component or one well-sectioned `src/App.css` — your choice, but all colors, radii, shadows, and fonts must be CSS custom properties on `:root`.
- Delete the old liquid-glass styles (blurred blob wallpaper, `backdrop-filter` everywhere). Do not carry them over.
- Keep `npm run build` and `npm run lint` passing with zero errors.
- Update `index.html` `<title>` to `PlayArena — The operating system for sports venues` and add a meta description.

## 2. New design direction

> Edit this section if you want a different look. Everything else in the brief still applies.

**Theme: "Floodlights on."** A night-match stadium feel — confident, sporty, premium.

- **Palette:** near-black pitch background (`#0a0f0d`), deep turf green surfaces (`#0f1d17`, `#16291f`), chalk-white text (`#f3f5f0`), muted text `#9aa79f`. One electric accent — floodlight lime `#c6ff3d` — for CTAs, highlights, and active states. A secondary warm accent `#ff7a00` used sparingly (badges, "MOST POPULAR").
- Provide a light-section variant (chalk `#f3f5f0` background, ink text) for the Plans section to break the rhythm.
- **Type:** headings in a bold condensed display face (e.g. `Anton` or `Bebas Neue` from Google Fonts), uppercase, tight tracking; body in `Inter` or `DM Sans`. The `<em>` in headings becomes the lime accent color, not italic.
- **Motifs:** thin pitch-line graphics (center circle, halfway line, penalty-box corners) as subtle SVG/CSS backgrounds; scoreboard-style numerals for section numbers and stats (tabular figures, monospace-ish); a soft floodlight radial glow at the top of the hero.
- **Shapes:** sharper than before — 8–12px radii, 1px hairline borders (`rgba(255,255,255,.08)`), no glassmorphism.
- **Motion:** restrained. Fade/slide-up reveal on scroll (keep the IntersectionObserver), a slow floodlight glow pulse in the hero, hover lifts on cards. Respect `prefers-reduced-motion`.

## 3. Page structure and content (keep all copy verbatim unless noted)

1. **Sticky header** — logo mark "P" + `PLAYARENA`; links: The solution (`#solution`), How it works (`#how-it-works`), Features (`#features`), Plans (`#plans`); "Log in" → `https://candid-lamington-97f395.netlify.app/login`; "Get started ↗" opens the owner form with plan Premium. Header gets a solid background + shadow after scrolling 8px. Add a mobile menu (hamburger) under 900px.
2. **Hero** — eyebrow "THE OPERATING SYSTEM FOR SPORTS VENUES" with a pulsing dot; H1 "Turn your stadium into a *better business.*"; lead "PlayArena brings bookings, customers, managers, and money into one calm, connected place."; buttons "Build your venue →" (opens form) and "▷ See how it works" (toast: "Product tour: discover venues → book slots → manage check-ins → track revenue."); proof row with avatars AM, PN, RD, + and "1,200+ venue teams are making more time for the game."
3. **Hero visual** — the owner dashboard mock: sidebar (Dashboard active, Analytics, Stadiums, Managers, Customers, Billing, Admin/Owner), header "Owner dashboard", 6 stats (₹0 Today's revenue, 0 Today's bookings, ₹13,316 My revenue, 12 Total bookings, 11 My active stadiums, 4 My managers), a "Daily revenue — Last 30 days" line chart, and a "Today's slot utilization" ring (0% booked, Booked 0 / Available 400 / Total 400). Caption "Your real owner workspace, at a glance". Restyle it to match the new theme (it should look like a real dark-mode app screenshot). Draw the chart line with inline SVG.
4. **Enrollment bar** — "✓ Made for stadium owners — Not another generic booking app." + 3 steps (Tell us about your venue → We configure your workspace → Start filling your courts) + "Enroll your stadium ↗" button.
5. **Sports band** — "BUILT FOR THE PEOPLE BEHIND" FOOTBALL, CRICKET, BADMINTON, BASKETBALL, SWIMMING. Make it a slow horizontal marquee (paused under reduced motion).
6. **Problems** (`#solution`) — eyebrow "THE OWNER PROBLEM", H2 "You did not open a stadium to become a full-time *receptionist.*", copy "PlayArena helps you move from managing chaos to growing a venue people want to return to." Three cards from `problems` data (01 Empty slots, 02 Scattered operations, 03 Unknown customers).
7. **Connected flow** (`#how-it-works`) — eyebrow "ONE CONNECTED FLOW", H2 "From “is it booked?” to *“look how we grew.”*", copy, and 3 selectable steps (Customers / Managers / Owners). The visual shows "One venue. Every move." with chips Customer books / Manager checks in / Owner grows. **New:** the active step should highlight its matching chip in the visual.
8. **Features** (`#features`) — eyebrow "WHAT PLAYARENA GIVES YOU", H2 "The tools to make every *hour count.*", 6 cards from `features` data, each with "Explore capability →" linking to `#plans`. Replace the unicode glyph icons with simple inline SVG icons.
9. **Smart local reach** (`#local-reach`) — city tabs Bengaluru / Mumbai / Hyderabad driving the `locationCampaigns` data; audience line; phone-style "CUSTOMER APP PREVIEW ● LIVE" with location banner (sport · area tag, offer, message, "Book a slot →" → toast "`{city}` campaign notification scheduled.") and a push-notification card. Each city keeps its own accent color.
10. **Quote** — "We stopped guessing which courts were making money. Now the whole team sees what matters before the day gets busy." — Sameer Kulkarni, Owner, Turf Town · Bengaluru (avatar SK).
11. **Plans** (`#plans`, light section) — eyebrow "PLANS THAT GROW WITH YOU", H2 "Start small. *Run like a pro.*", copy "No complicated setup. No surprise percentage on every booking." Monthly / Yearly toggle ("save 20%"). Three plans from `plans` data (Free ₹0 8%, Premium ₹1,999 7% featured "MOST POPULAR", Exclusive ₹2,499 6%). Yearly price = monthly × 12 × 0.8, rounded, with the struck-through full yearly price. Prices formatted `en-IN`. Each plan button opens the form preselecting that plan.
12. **Final CTA** — eyebrow "READY WHEN YOU ARE", H2 "Your stadium deserves a better operating system.", copy, proofs (✓ No setup fee, ✓ Guided onboarding, ✓ Start with Free), button "Enroll my stadium ↗".
13. **Footer** — logo, "Better venues. Better games.", links Features / Plans / Back to top ↑, plus © current year.
14. **Owner form modal** — eyebrow "START YOUR OWNER JOURNEY", H2 "Let's get your venue in play.", fields Owner name, Business email, Venue name + City (row), Interested plan select (Free/Premium/Exclusive, preselected), submit "Request owner setup →", note "No payment now. Our team will contact you to finish setup." Closes on ×, backdrop click, and **Escape**; traps focus and returns focus on close; locks body scroll while open. On submit: close and toast "Thanks. We will contact you to set up your PlayArena venue."
15. **Toast** — bottom-center, auto-hides after 2.8s, `role="status"`.

## 4. Quality bar

- Responsive at 1440, 1024, 768, 390px. No horizontal scroll at any width. Hero visual scales down or simplifies on mobile rather than overflowing.
- Accessibility: semantic landmarks, one `<h1>`, visible focus rings (lime outline), buttons are `<button>`, color contrast ≥ 4.5:1 for body text, `aria-pressed` on toggles/tabs, labels on all inputs.
- Performance: no images required; `hero.png`, `react.svg`, `vite.svg` can be deleted if unused. Fonts via Google Fonts with `display=swap` and `preconnect` in `index.html`.

## 5. Process

1. Read `src/App.jsx` and `src/App.css` to confirm the content above.
2. Build the new structure and styles.
3. Run `npm run lint` and `npm run build`; fix every issue.
4. Start `npm run dev` and check the page at desktop and mobile widths (use the browser if available), including: nav scroll state, mobile menu, flow step selection, city tabs, billing toggle math, form open/close/submit, toasts.
5. Summarize what changed and anything you could not verify.

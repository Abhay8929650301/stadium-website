# PlayArena · owner website

Marketing site for stadium and sports-venue owners. Built with React 19 and Vite.

The visual language follows the PlayArena app designs in Figma: iOS Liquid Glass in light mode,
Zalando Sans, Iconsax-style line icons, and venue photography from Pexels.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npx oxlint src   # lint the source
```

## Pages

| URL         | HTML entry           | Script                  |
|-------------|----------------------|-------------------------|
| `/`         | `index.html`         | `src/main.jsx`          |
| `/terms/`   | `terms/index.html`   | `src/pages/terms.jsx`   |
| `/privacy/` | `privacy/index.html` | `src/pages/privacy.jsx` |

Each page is built as its own HTML file (see `vite.config.js`), so the legal pages work on any static host
without redirect rules.

**Before publishing the legal pages**, replace the bracketed placeholders (company name, address, contact emails,
Grievance Officer, court city) in `src/legal/company.js`. In development the legal pages log a console warning
until they are filled in. Have the Terms and Privacy Policy reviewed by a lawyer before relying on them.

## Structure

```
src/
  App.jsx               home page composition
  legal/                Terms & Privacy content, company details, LegalPage layout
  pages/                entry scripts for the legal pages
  index.css             design tokens, base styles, buttons, shared surfaces
  App.css               section styles and responsive rules
  data/content.js       all copy, plans, campaigns, and dashboard figures
  hooks/                useRevealOnScroll, useScrollToHash
  components/
    SiteLayout.jsx      shared header, footer, toast and owner form for every page
    Header, Hero, EnrollmentBar, SportsBand, ProblemSection, FlowSection,
    FeatureSection, WorkspaceSection, CampaignSection, QuoteSection,
    PlansSection, FinalCta, Footer, OwnerForm, Toast, SectionIntro, Logo
    Icon.jsx            inline SVG icon set
    PhoneFrame.jsx      device frame for app mockups
    AppScreens.jsx      venue, slot, check-in, owner, and home screens
    phone.css           mockup styles (em-based, scale with the frame width)
  assets/photos/        Pexels photos (free to use under the Pexels licence)
```

Copy, prices, and dashboard numbers live in `src/data/content.js`, so content changes don't touch components.

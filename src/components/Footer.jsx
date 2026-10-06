import Logo from './Logo.jsx'
import { homeHref, pageLinks, SHOW_PLANS } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo />
        <span className="footer-tagline">Better venues. Better games.</span>
        <nav className="footer-links" aria-label="Footer">
          <a href={homeHref('#features')}>Features</a>
          {SHOW_PLANS && <a href={homeHref('#plans')}>Plans</a>}
          <a href={pageLinks.terms}>Terms &amp; Conditions</a>
          <a href={pageLinks.privacy}>Privacy Policy</a>
          <a href="#top">Back to top ↑</a>
        </nav>
        <p className="footer-legal">© {new Date().getFullYear()} PlayArena. Venue photography from Pexels.</p>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { navLinks, OWNER_LOGIN_URL, SHOW_LOGIN } from '../data/content.js'

const DESKTOP_QUERY = '(min-width: 901px)'

export default function Header({ onStart }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onKeyDown = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    const onViewportChange = (event) => { if (event.matches) setMenuOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onViewportChange)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onViewportChange)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled || menuOpen ? ' is-raised' : ''}`}>
      <nav className="nav" aria-label="Main">
        <Logo />
        <div className="nav-links">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <div className="nav-actions">
          {SHOW_LOGIN && <a className="nav-login" href={OWNER_LOGIN_URL}>Log in</a>}
          <button type="button" className="btn btn-dark btn-sm nav-cta" onClick={onStart}>
            Get started <Icon name="arrowUpRight" size={18} />
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobile-menu" hidden={!menuOpen}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}<Icon name="arrowRight" size={18} />
          </a>
        ))}
        <div className={`mobile-menu-actions${SHOW_LOGIN ? '' : ' is-single'}`}>
          {SHOW_LOGIN && <a className="btn btn-glass" href={OWNER_LOGIN_URL}>Log in</a>}
          <button type="button" className="btn btn-dark" onClick={() => { closeMenu(); onStart() }}>
            Get started <Icon name="arrowUpRight" size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

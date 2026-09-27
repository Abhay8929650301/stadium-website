import { useEffect, useMemo, useState } from 'react'
import SiteLayout from '../components/SiteLayout.jsx'
import Icon from '../components/Icon.jsx'
import { pageLinks } from '../data/content.js'
import { company, hasPlaceholders } from './company.js'
import './legal.css'

const DOCUMENTS = [
  { slug: 'terms', label: 'Terms & Conditions', href: pageLinks.terms },
  { slug: 'privacy', label: 'Privacy Policy', href: pageLinks.privacy },
]

const isEmail = (value) => /^[^\s@[\]]+@[^\s@[\]]+\.[^\s@[\]]+$/.test(value)

function Email({ value }) {
  return isEmail(value) ? <a href={`mailto:${value}`}>{value}</a> : <span>{value}</span>
}

function Block({ block }) {
  if (typeof block === 'string') return <p>{block}</p>
  return (
    <ul>
      {block.list.map((item) => (
        typeof item === 'string'
          ? <li key={item}>{item}</li>
          : <li key={item.label}><strong>{item.label}</strong> {item.text}</li>
      ))}
    </ul>
  )
}

// Highlights the contents entry for the section currently near the top of the viewport.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-110px 0px -65% 0px' })
    ids.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

function Contents({ sections, active, onNavigate }) {
  return (
    <ol className="legal-contents">
      {sections.map((section, index) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className={active === section.id ? 'is-active' : undefined}
            aria-current={active === section.id ? 'location' : undefined}
            onClick={onNavigate}
          >
            <span>{index + 1}</span>{section.title}
          </a>
        </li>
      ))}
    </ol>
  )
}

export default function LegalPage({ doc }) {
  const ids = useMemo(() => doc.sections.map((section) => section.id), [doc])
  const active = useActiveSection(ids)
  const requestsEmail = doc.slug === 'privacy' ? company.privacyEmail : company.supportEmail

  useEffect(() => {
    if (import.meta.env.DEV && hasPlaceholders) {
      console.warn('[legal] Replace the placeholder company details in src/legal/company.js before publishing.')
    }
  }, [])

  const closeMobileContents = (event) => {
    const details = event.currentTarget.closest('details')
    if (details) details.open = false
  }

  return (
    <SiteLayout>
      {() => (
        <>
          <section className="legal-hero" aria-labelledby="legal-title">
            <div className="container">
              <span className="eyebrow">Legal</span>
              <h1 id="legal-title">{doc.title}</h1>
              <p className="legal-intro">{doc.intro}</p>
              <p className="legal-meta">
                <span><Icon name="calendar" size={16} />Effective {company.effectiveDate}</span>
                <span><Icon name="clock" size={16} />Last updated {company.lastUpdated}</span>
              </p>
              <nav className="segmented legal-switch" aria-label="Legal documents">
                {DOCUMENTS.map((item) => (
                  <a
                    key={item.slug}
                    href={item.href}
                    className={item.slug === doc.slug ? 'is-active' : undefined}
                    aria-current={item.slug === doc.slug ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </section>

          <div className="container legal-layout">
            <aside className="legal-aside">
              <nav aria-label="On this page">
                <p className="legal-aside-title">On this page</p>
                <Contents sections={doc.sections} active={active} />
              </nav>
            </aside>

            <article className="card legal-doc">
              <details className="legal-contents-mobile">
                <summary>On this page <Icon name="chevronDown" size={18} /></summary>
                <Contents sections={doc.sections} active={active} onNavigate={closeMobileContents} />
              </details>

              {doc.sections.map((section, index) => (
                <section className="legal-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
                  <h2 id={`${section.id}-title`}><span className="legal-num">{index + 1}</span>{section.title}</h2>
                  {section.blocks.map((block, blockIndex) => <Block block={block} key={blockIndex} />)}
                </section>
              ))}

              <div className="legal-contact">
                <div>
                  <small>Company</small>
                  <strong>{company.legalName}</strong>
                  <span>{company.address}</span>
                </div>
                <div>
                  <small>Grievance Officer</small>
                  <strong>{company.grievanceOfficer}</strong>
                  <Email value={company.grievanceEmail} />
                </div>
                <div>
                  <small>{doc.slug === 'privacy' ? 'Privacy requests' : 'Support'}</small>
                  <Email value={requestsEmail} />
                </div>
              </div>
            </article>
          </div>
        </>
      )}
    </SiteLayout>
  )
}

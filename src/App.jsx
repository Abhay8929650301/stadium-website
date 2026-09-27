import { useEffect, useState } from 'react'
import './App.css'

const problems = [
  ['01', 'Empty slots', 'Your best hours disappear into calls, spreadsheets, and last-minute cancellations.', '◷'],
  ['02', 'Scattered operations', 'Managers, walk-ins, online bookings, and payments live in different places.', '⌁'],
  ['03', 'Unknown customers', 'You take bookings, but do not have a clear view of who returns or why.', '♧'],
]

const features = [
  ['01', 'Customer storefront', 'Help players discover venues by sport, location, photos, facilities, reviews, and live availability.', '▦'],
  ['02', 'Live court inventory', 'Manage courts, open hours, slot status, base prices, and peak or weekend pricing rules.', '◌'],
  ['03', 'Manager operations', 'Give your team one flow for bookings, QR check-ins, ticket lookup, cancellations, and walk-ins.', '⌁'],
  ['04', 'Revenue visibility', 'Track daily revenue, bookings, utilization, profitability, and performance across every venue.', '◒'],
  ['05', 'Connected customer data', 'See booking history, repeat customers, favorites, notifications, and the signals behind demand.', '♧'],
  ['06', 'Ready to scale', 'Assign admins and managers, protect access by role, and run one stadium or an entire network.', '↗'],
]

const plans = [
  { name: 'Free', price: 0, commission: '8% per booking', description: 'Get discovered and start taking bookings.', features: ['Stadium profile and listing', 'Online booking calendar', 'Manager access', 'Core booking reports'], action: 'Claim free setup' },
  { name: 'Premium', price: 1999, commission: '7% per booking', description: 'See demand clearly and grow every court.', features: ['Everything in Free', 'Multiple courts and venues', 'Demand and customer insights', 'Revenue and utilization reports', 'Priority support'], action: 'Grow with Premium', featured: true },
  { name: 'Exclusive', price: 2499, commission: '6% per booking', description: 'Run a serious venue business at scale.', features: ['Everything in Premium', 'Advanced booking optimization', 'Multi-location controls', 'Custom roles and permissions', 'Dedicated priority support'], action: 'Unlock Exclusive' },
]

const locationCampaigns = {
  Bengaluru: { area: 'Indiranagar', sport: 'Football', offer: 'Book your evening turf', message: 'Your next game is closer than you think.', color: 'green', audience: 'Players within 5 km' },
  Mumbai: { area: 'Andheri West', sport: 'Cricket', offer: 'Weekend cricket slots open', message: 'Get your team together. We have the pitch.', color: 'blue', audience: 'Cricket teams nearby' },
  Hyderabad: { area: 'Gachibowli', sport: 'Badminton', offer: 'Fresh courts, one tap away', message: 'Your next rally starts here.', color: 'purple', audience: 'Racquet players nearby' },
}

function App() {
  const [activeStep, setActiveStep] = useState(0)
  const [billing, setBilling] = useState('monthly')
  const [notice, setNotice] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('Premium')
  const [campaignLocation, setCampaignLocation] = useState('Bengaluru')
  const [navScrolled, setNavScrolled] = useState(false)
  const notify = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 2800) }
  const openForm = (plan = 'Premium') => { setSelectedPlan(plan); setShowForm(true) }

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-on-scroll')
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
        else entry.target.classList.remove('is-visible')
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -45px' })
    revealItems.forEach((item) => observer.observe(item))
    document.documentElement.classList.add('reveal-enabled')
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-enabled')
    }
  }, [])

  return (
    <div className="site-shell">
      <Header notify={notify} onStart={() => openForm('Premium')} scrolled={navScrolled} />
      <main id="top">
        <Hero notify={notify} onStart={() => openForm('Premium')} />
        <section className="owner-enrollment-bar"><div><span className="enrollment-check">✓</span><strong>Made for stadium owners</strong><span>Not another generic booking app.</span></div><div><span className="enrollment-step">1</span><span>Tell us about your venue</span><span className="enrollment-line" /><span className="enrollment-step">2</span><span>We configure your workspace</span><span className="enrollment-line" /><span className="enrollment-step">3</span><span>Start filling your courts</span></div><button onClick={() => openForm('Premium')}>Enroll your stadium <span>↗</span></button></section>
        <section className="logo-band"><span>BUILT FOR THE PEOPLE BEHIND</span><strong>FOOTBALL</strong><strong>CRICKET</strong><strong>BADMINTON</strong><strong>BASKETBALL</strong><strong>SWIMMING</strong></section>

        <section className="problem-section" id="solution">
          <SectionIntro eyebrow="THE OWNER PROBLEM" title={<>You did not open a stadium to become a full-time <em>receptionist.</em></>} copy="PlayArena helps you move from managing chaos to growing a venue people want to return to." />
          <div className="problem-grid">{problems.map(([number, title, copy, icon], index) => <article className="problem-card reveal-on-scroll" style={{ '--reveal-delay': `${index * 70}ms` }} key={number}><div className="problem-top"><span>{number}</span><b>{icon}</b></div><h3>{title}</h3><p>{copy}</p><span className="problem-arrow">↗</span></article>)}</div>
        </section>

        <section className="flow-section" id="how-it-works">
          <div className="flow-visual"><div className="flow-orbit orbit-one" /><div className="flow-orbit orbit-two" /><div className="flow-center"><span className="logo-mark">P</span><strong>One venue.<br /><em>Every move.</em></strong></div><div className="flow-chip chip-customer"><span>♧</span> Customer books</div><div className="flow-chip chip-manager"><span>✓</span> Manager checks in</div><div className="flow-chip chip-owner"><span>↗</span> Owner grows</div></div>
          <div className="flow-copy"><span className="eyebrow">ONE CONNECTED FLOW</span><h2>From “is it booked?” to <em>“look how we grew.”</em></h2><p>PlayArena connects the three apps already at the heart of your platform, so every action has a clear next step.</p><div className="flow-list">{['Customers discover, compare, and book a real slot.', 'Managers see the same calendar and run the venue floor.', 'Owners see the business, improve the experience, and scale.'].map((item, index) => <button className={activeStep === index ? 'active' : ''} key={item} onClick={() => setActiveStep(index)}><span>0{index + 1}</span><strong>{item}</strong><i>→</i></button>)}</div></div>
        </section>

        <section className="feature-section" id="features"><SectionIntro centered eyebrow="WHAT PLAYARENA GIVES YOU" title={<>The tools to make every <em>hour count.</em></>} copy="Everything your owner, manager, and customer workflows need to work together." /><div className="feature-grid">{features.map(([number, title, copy, icon], index) => <article className="feature-card reveal-on-scroll" style={{ '--reveal-delay': `${index * 60}ms` }} key={number}><span className="feature-number">{number}</span><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{copy}</p><a href="#plans">Explore capability <span>→</span></a></article>)}</div></section>
        <LocationCampaign location={campaignLocation} campaign={locationCampaigns[campaignLocation]} onChange={setCampaignLocation} onNotify={notify} />
        <section className="quote-section"><div className="quote-mark">“</div><blockquote>We stopped guessing which courts were making money. Now the whole team sees what matters before the day gets busy.</blockquote><div className="quote-person"><span className="quote-avatar">SK</span><div><strong>Sameer Kulkarni</strong><small>Owner, Turf Town · Bengaluru</small></div></div></section>

        <section className="plans-section" id="plans"><div className="section-intro plans-heading"><div><span className="eyebrow">PLANS THAT GROW WITH YOU</span><h2>Start small. <em>Run like a pro.</em></h2><p>No complicated setup. No surprise percentage on every booking.</p></div><div className="billing-toggle"><button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>Monthly</button><button className={billing === 'yearly' ? 'active' : ''} onClick={() => setBilling('yearly')}>Yearly <span>save 20%</span></button></div></div><div className="plans-grid">{plans.map((plan, index) => <Plan plan={plan} billing={billing} key={plan.name} revealDelay={index * 80} onSelect={() => openForm(plan.name)} />)}</div></section>

        <section className="final-cta"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Your stadium deserves a better operating system.</h2><p>Join PlayArena and turn empty hours into discoverable, bookable, measurable business.</p><div className="cta-proof"><span>✓ No setup fee</span><span>✓ Guided onboarding</span><span>✓ Start with Free</span></div></div><button onClick={() => openForm('Premium')}>Enroll my stadium <span>↗</span></button></section>
      </main>
      <footer className="site-footer"><a className="logo" href="#top"><span className="logo-mark">P</span><span>PLAYARENA</span></a><span>Better venues. Better games.</span><div><a href="#features">Features</a><a href="#plans">Plans</a><a href="#top">Back to top ↑</a></div></footer>
      {notice && <div className="toast">✓ {notice}</div>}
      {showForm && <OwnerForm plan={selectedPlan} onClose={() => setShowForm(false)} onSubmit={() => { setShowForm(false); notify('Thanks. We will contact you to set up your PlayArena venue.') }} />}
    </div>
  )
}

function Header({ onStart, scrolled }) { return <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}><a className="logo" href="#top"><span className="logo-mark">P</span><span>PLAYARENA</span></a><nav className="desktop-links"><a href="#solution">The solution</a><a href="#how-it-works">How it works</a><a href="#features">Features</a><a href="#plans">Plans</a></nav><div className="nav-actions"><a className="login-link" href="https://candid-lamington-97f395.netlify.app/login">Log in</a><button className="nav-cta" onClick={onStart}>Get started <span>↗</span></button></div></header> }
function Hero({ notify, onStart }) { return <section className="hero"><div className="hero-inner"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> THE OPERATING SYSTEM FOR SPORTS VENUES</div><h1>Turn your stadium into a <em>better business.</em></h1><p className="hero-lead">PlayArena brings bookings, customers, managers, and money into one calm, connected place.</p><div className="hero-actions"><button className="hero-button" onClick={onStart}>Build your venue <span>→</span></button><button className="play-button" onClick={() => notify('Product tour: discover venues → book slots → manage check-ins → track revenue.')}><span>▷</span> See how it works</button></div><div className="proof-row"><div className="proof-avatars"><span>AM</span><span>PN</span><span>RD</span><span>+</span></div><p><strong>1,200+ venue teams</strong><br />are making more time for the game.</p></div></div><HeroVisual /></div><div className="hero-wave" /></section> }
function HeroVisual() { return <div className="hero-visual"><div className="dashboard-preview"><aside className="preview-sidebar"><div className="preview-brand"><span className="preview-brand-mark">⚽</span><strong>PlayArena</strong><small>Admin Panel</small></div><div className="preview-nav active"><span className="preview-nav-icon">▦</span><span>Dashboard</span></div><div className="preview-nav"><span className="preview-nav-icon">⌁</span><span>Analytics</span></div><div className="preview-nav"><span className="preview-nav-icon">▣</span><span>Stadiums</span></div><div className="preview-nav"><span className="preview-nav-icon">♙</span><span>Managers</span></div><div className="preview-nav"><span className="preview-nav-icon">♧</span><span>Customers</span></div><div className="preview-nav"><span className="preview-nav-icon">▤</span><span>Billing</span></div><div className="preview-account"><span>A</span><div><strong>Admin</strong><small>Owner</small></div></div></aside><div className="preview-main"><div className="preview-head"><div><h3>Owner dashboard</h3><p>Your stadium performance, bookings, and team.</p></div><span>My stadiums⌄</span></div><div className="preview-stats"><div><b>₹0</b><small>Today's revenue</small></div><div><b>0</b><small>Today's bookings</small></div><div><b>₹13,316</b><small>My revenue</small></div><div><b>12</b><small>Total bookings</small></div><div><b>11</b><small>My active stadiums</small></div><div><b>4</b><small>My managers</small></div></div><div className="preview-content"><div className="preview-chart"><strong>Daily revenue</strong><small>Last 30 days</small><div className="chart-line" /><div className="chart-axis"><span>₹0k</span><span>₹3k</span><span>₹6k</span></div></div><div className="preview-util"><strong>Today's slot utilization</strong><small>My stadiums</small><div className="util-ring"><b>0%</b><span>booked</span></div><div className="util-key"><span><i /> Booked <b>0</b></span><span><i /> Available <b>400</b></span><span>Total slots <b>400</b></span></div></div></div></div></div><div className="dashboard-caption"><span>●</span> Your real owner workspace, at a glance</div></div> }
function SectionIntro({ eyebrow, title, copy, centered }) { return <div className={`section-intro ${centered ? 'centered' : ''}`}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div><p>{copy}</p></div> }
function Plan({ plan, billing, onSelect, revealDelay }) { const yearlyPrice = Math.round(plan.price * 12 * 0.8); const originalYearlyPrice = plan.price * 12; const displayedPrice = billing === 'yearly' ? yearlyPrice : plan.price; const suffix = billing === 'yearly' ? '/ year' : '/ month'; return <article className={`plan-card ${plan.featured ? 'featured' : ''} reveal-on-scroll`} style={{ '--reveal-delay': `${revealDelay}ms` }}>{plan.featured && <div className="popular">MOST POPULAR</div>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="plan-price">{billing === 'yearly' && originalYearlyPrice > yearlyPrice && <del>₹{originalYearlyPrice.toLocaleString('en-IN')}</del>}₹{displayedPrice.toLocaleString('en-IN')}<small>{suffix}</small></div><div className="plan-commission">{plan.commission}</div><button className={`plan-button ${plan.featured ? 'filled' : ''}`} onClick={onSelect}>{plan.action} <span>→</span></button><div className="plan-rule" /><ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul></article> }
function LocationCampaign({ location, campaign, onChange, onNotify }) { return <section className="campaign-section" id="local-reach"><div className="campaign-copy"><span className="eyebrow">SMART LOCAL REACH</span><h2>Say the right thing to the <em>right players.</em></h2><p>Turn your stadium location into a growth signal. Create a local banner for customers nearby and send a timely notification when a slot needs filling.</p><div className="location-tabs">{Object.keys(locationCampaigns).map((city) => <button className={location === city ? 'active' : ''} key={city} onClick={() => onChange(city)}>{city}</button>)}</div><div className="campaign-audience"><span>◎</span><div><strong>{campaign.audience}</strong><small>Targeting around {campaign.area}</small></div></div></div><div className={`campaign-preview ${campaign.color}`}><div className="preview-toolbar"><span>CUSTOMER APP PREVIEW</span><b>● LIVE</b></div><div className="location-banner"><span className="banner-tag">{campaign.sport.toUpperCase()} · {campaign.area.toUpperCase()}</span><h3>{campaign.offer}</h3><p>{campaign.message}</p><button onClick={() => onNotify(`${location} campaign notification scheduled.`)}>Book a slot <span>→</span></button></div><div className="notification-card"><span className="notification-icon">✦</span><div><strong>PlayArena near you</strong><p>{campaign.offer}. Tap to see live slots.</p><small>Just now · {location}</small></div><span className="notification-more">•••</span></div></div></section> }
function OwnerForm({ plan, onClose, onSubmit }) { return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><form className="owner-form" onSubmit={(event) => { event.preventDefault(); onSubmit() }}><button className="modal-close" type="button" aria-label="Close form" onClick={onClose}>×</button><span className="eyebrow">START YOUR OWNER JOURNEY</span><h2>Let&apos;s get your venue in play.</h2><p>Tell us a little about your stadium. We&apos;ll help you choose the right PlayArena setup.</p><label>Owner name<input name="name" placeholder="Your full name" required /></label><label>Business email<input name="email" type="email" placeholder="you@stadium.com" required /></label><div className="form-row"><label>Venue name<input name="venue" placeholder="Your stadium name" required /></label><label>City<input name="city" placeholder="Bengaluru" required /></label></div><label>Interested plan<select name="plan" defaultValue={plan}><option>Free</option><option>Premium</option><option>Exclusive</option></select></label><button className="form-submit" type="submit">Request owner setup <span>→</span></button><small className="form-note">No payment now. Our team will contact you to finish setup.</small></form></div> }

export default App

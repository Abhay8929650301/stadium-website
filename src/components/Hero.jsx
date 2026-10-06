import Icon from './Icon.jsx'
import PhoneFrame from './PhoneFrame.jsx'
import { VenueScreen } from './AppScreens.jsx'

const weekBars = [38, 52, 44, 61, 58, 86, 72]

export default function Hero({ onStart }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span className="pulse" aria-hidden="true" />The operating system for sports venues</span>
          <h1 id="hero-title">Turn your stadium into a <em>better business.</em></h1>
          <p className="hero-lead">PlayArena brings bookings, customers, managers, and money into one calm, connected place.</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-dark btn-lg" onClick={onStart}>
              Build your venue <Icon name="arrowRight" />
            </button>
            <a className="btn btn-glass btn-lg" href="#how-it-works">
              <span className="play-orb"><Icon name="play" size={14} /></span>See how it works
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatars" aria-hidden="true"><span>AM</span><span>PN</span><span>RD</span><span>+</span></div>
            <p><strong>1,200+ venue teams</strong> are making more time for the game.</p>
          </div>
        </div>

        <div className="hero-stage">
          <PhoneFrame label="The PlayArena customer app showing the DY Arena Sports Complex venue page">
            <VenueScreen />
          </PhoneFrame>

          <div className="float-card float-booking" aria-hidden="true">
            <span className="app-badge">P</span>
            <div>
              <span className="float-meta"><span>PlayArena</span><span>now</span></span>
              <strong>New booking · Turf A</strong>
              <span className="float-text">Thu 24 Sep · 7–8 PM · ₹1,247</span>
            </div>
          </div>

          <div className="float-card float-revenue" aria-hidden="true">
            <span className="float-label">This week</span>
            <strong>₹84,250</strong>
            <span className="float-trend"><Icon name="trendUp" size={14} />18%</span>
            <div className="float-bars">
              {weekBars.map((height, index) => (
                <i key={index} className={index === 5 ? 'is-peak' : undefined} style={{ '--h': `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

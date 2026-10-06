import Icon from './Icon.jsx'
import stadiumNight from '../assets/photos/stadium-night.jpg'
import turfNight from '../assets/photos/turf-night.jpg'
import { sports } from '../data/content.js'

function StatusBar({ light = false }) {
  return (
    <div className={`status${light ? ' is-light' : ''}`}>
      <span className="status-time">9:41</span>
      <span className="status-icons">
        <svg viewBox="0 0 18 12" className="status-signal" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg viewBox="0 0 16 12" className="status-wifi" fill="currentColor">
          <path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.2-1.3A10.2 10.2 0 0 0 8 .4C5.2.4 2.7 1.5.8 3.3L2 4.6a8.4 8.4 0 0 1 6-2.4Zm0 3.6c1.3 0 2.5.5 3.4 1.3l1.2-1.3A6.7 6.7 0 0 0 8 4c-1.8 0-3.4.7-4.6 1.8l1.2 1.3A5 5 0 0 1 8 5.8Zm0 3.5c-.5 0-1 .2-1.3.5L8 11.2l1.3-1.4c-.3-.3-.8-.5-1.3-.5Z" />
        </svg>
        <svg viewBox="0 0 27 12" className="status-battery">
          <rect x=".5" y=".5" width="22" height="11" rx="3.2" fill="none" stroke="currentColor" opacity=".4" />
          <rect x="2" y="2" width="19" height="8" rx="2" fill="currentColor" />
          <path d="M24.5 4v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2Z" fill="currentColor" opacity=".45" />
        </svg>
      </span>
    </div>
  )
}

function Rating({ value = '4.8' }) {
  return <span className="scr-rating"><Icon name="star" />{value}</span>
}

/* ---------- 03 · Venue detail ---------- */

const amenities = [['lamp', 'Floodlights'], ['car', 'Parking'], ['drop', 'Showers'], ['coffee', 'Café']]

export function VenueScreen() {
  return (
    <div className="scr scr-venue">
      <div className="venue-photo">
        <img src={stadiumNight} alt="" />
        <StatusBar light />
        <div className="venue-topbar">
          <span className="scr-icon-btn is-glass-dark"><Icon name="arrowLeft" /></span>
          <span className="venue-topbar-actions">
            <span className="scr-icon-btn is-glass-dark"><Icon name="share" /></span>
            <span className="scr-icon-btn is-liked"><Icon name="heart" /></span>
          </span>
        </div>
        <span className="venue-count">1 / 24</span>
      </div>

      <div className="venue-sheet">
        <div className="scr-tags">
          <span className="scr-tag is-green"><i className="scr-dot" />Open now</span>
          <span className="scr-tag is-blue"><Icon name="shield" />Verified</span>
        </div>
        <p className="venue-name">DY Arena Sports Complex</p>
        <p className="scr-row scr-muted"><Icon name="location" />80 Feet Rd, Koramangala, Bengaluru</p>

        <div className="venue-stats scr-card">
          <div><b><Icon name="star" className="ic-star" />4.8</b><small>2.1k reviews</small></div>
          <div><b><Icon name="clock" className="ic-blue" />6 AM</b><small>to 11 PM</small></div>
          <div><b><Icon name="location" className="ic-green" />2.4 km</b><small>from you</small></div>
        </div>

        <p className="scr-label">Choose a sport</p>
        <div className="scr-chips">
          <span className="is-active">Football</span>
          <span>Cricket nets</span>
          <span>Badminton</span>
        </div>

        <p className="scr-label">Amenities</p>
        <div className="venue-amenities">
          {amenities.map(([icon, label]) => (
            <span className="amenity" key={label}><i><Icon name={icon} /></i>{label}</span>
          ))}
        </div>
      </div>

      <div className="scr-bottom">
        <div><small>Starting from</small><b>₹1,200<span> / hour</span></b></div>
        <span className="scr-btn is-blue">Select slot</span>
      </div>
    </div>
  )
}

/* ---------- 04 · Select slot ---------- */

const days = [['Wed', 23], ['Thu', 24], ['Fri', 25], ['Sat', 26], ['Sun', 27], ['Mon', 28]]
const slots = [
  { time: '5:00 PM', note: 'Booked', state: 'booked' },
  { time: '6:00 PM', note: '₹1,500' },
  { time: '7:00 PM', note: '₹1,500', state: 'selected' },
  { time: '8:00 PM', note: '₹1,500' },
  { time: '9:00 PM', note: '1 left · ₹1,500', state: 'low' },
  { time: '10:00 PM', note: '₹1,500' },
]

export function SlotScreen() {
  return (
    <div className="scr">
      <StatusBar />
      <div className="scr-nav">
        <span className="scr-icon-btn"><Icon name="arrowLeft" /></span>
        <b>Select a slot</b>
        <span className="scr-icon-btn"><Icon name="calendar" /></span>
      </div>

      <div className="scr-pad">
        <div className="slot-venue scr-card">
          <img src={turfNight} alt="" />
          <div><b>DY Arena Sports Complex</b><small>Football · 5-a-side turf</small></div>
          <Rating />
        </div>

        <div className="scr-head">
          <b>September 2026</b>
          <span className="scr-arrows"><i><Icon name="chevronLeft" /></i><i><Icon name="chevronRight" /></i></span>
        </div>
        <div className="slot-days">
          {days.map(([day, date]) => (
            <span className={`slot-day${date === 24 ? ' is-selected' : ''}`} key={date}>
              <small>{day}</small><b>{date}</b><i />
            </span>
          ))}
        </div>

        <p className="scr-label">Court</p>
        <div className="scr-segment">
          <span className="is-active">Turf A<small>5v5</small></span>
          <span>Turf B<small>7v7</small></span>
          <span>Turf C<small>5v5</small></span>
        </div>

        <div className="scr-head">
          <b><Icon name="clock" className="ic-blue" />Evening · Peak hours</b>
          <small>1 hr slots</small>
        </div>
        <div className="slot-grid">
          {slots.map((slot) => (
            <span className={`slot${slot.state ? ` is-${slot.state}` : ''}`} key={slot.time}>
              <b>{slot.time}</b><small>{slot.note}</small>
            </span>
          ))}
        </div>
      </div>

      <div className="scr-bottom">
        <div><small>Thu, 24 Sep · 7–8 PM</small><b>₹1,500</b></div>
        <span className="scr-btn is-blue">Continue</span>
      </div>
    </div>
  )
}

/* ---------- 06 · Booking ticket, checked in by a manager ---------- */

// Deterministic, decorative QR-style pattern with the three finder squares.
const QR_SIZE = 25
const QR_PATH = (() => {
  const finders = [[0, 0], [QR_SIZE - 7, 0], [0, QR_SIZE - 7]]
  const hash = (x, y) => {
    let h = Math.imul(x + 1, 0x9e3779b1) ^ Math.imul(y + 1, 0x85ebca77)
    h ^= h >>> 15
    h = Math.imul(h, 0x2c1b3c6d)
    h ^= h >>> 12
    return (h >>> 0) % 100
  }
  let d = ''
  for (let y = 0; y < QR_SIZE; y += 1) {
    for (let x = 0; x < QR_SIZE; x += 1) {
      const finder = finders.find(([fx, fy]) => x >= fx - 1 && x <= fx + 7 && y >= fy - 1 && y <= fy + 7)
      let filled
      if (finder) {
        const dx = x - finder[0]
        const dy = y - finder[1]
        const inside = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6
        filled = inside && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4))
      } else {
        filled = hash(x, y) < 48
      }
      if (filled) d += `M${x} ${y}h1v1h-1z`
    }
  }
  return d
})()

export function TicketScreen() {
  return (
    <div className="scr">
      <StatusBar />
      <div className="scr-nav">
        <span className="scr-icon-btn"><Icon name="close" /></span>
        <b>Check-in</b>
        <span className="scr-icon-btn"><Icon name="scan" /></span>
      </div>

      <div className="ticket-hero">
        <span className="ticket-check"><Icon name="check" strokeWidth={2.4} /></span>
        <b>Checked in!</b>
        <small>Rohan&apos;s team is on Turf A. Enjoy the game.</small>
      </div>

      <div className="ticket">
        <div className="ticket-photo">
          <img src={stadiumNight} alt="" />
          <div><b>DY Arena Sports Complex</b><small>Football · Turf A · 5v5</small></div>
        </div>
        <div className="ticket-meta">
          <div><small>Date</small><b>24-Sep-2026</b></div>
          <div><small>Time</small><b>7 to 8 PM</b></div>
          <div><small>Players</small><b>10</b></div>
        </div>
        <div className="ticket-cut" />
        <div className="ticket-qr">
          <span className="qr">
            <svg viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`} shapeRendering="crispEdges"><path d={QR_PATH} fill="currentColor" /></svg>
          </span>
          <div>
            <small>Booking ID</small>
            <b>ARN-2409-0719</b>
            <span className="ticket-scanned">Scanned by Ravi · Manager</span>
            <span className="scr-tag is-green"><Icon name="check" strokeWidth={2.2} />Paid ₹1,247</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Owner snapshot ---------- */

const weekBars = [42, 55, 38, 64, 72, 94, 80]

export function OwnerScreen() {
  return (
    <div className="scr">
      <StatusBar />
      <div className="owner-top">
        <div><small>Good evening,</small><b>Rohan</b></div>
        <span className="scr-icon-btn"><Icon name="bell" /></span>
        <span className="scr-avatar">RK</span>
      </div>
      <span className="owner-venue"><Icon name="building" />DY Arena · 3 courts<Icon name="chevronDown" /></span>

      <div className="owner-revenue">
        <small>Revenue this week</small>
        <b>₹84,250</b>
        <span className="owner-trend"><Icon name="trendUp" />18% vs last week</span>
        <div className="owner-bars">
          {weekBars.map((height, index) => (
            <i key={index} className={index === 5 ? 'is-peak' : undefined} style={{ '--h': `${height}%` }} />
          ))}
        </div>
        <div className="owner-days">{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => <span key={index}>{day}</span>)}</div>
      </div>

      <div className="owner-kpis">
        <div className="scr-card owner-kpi"><small>Bookings</small><b>142</b><span className="owner-delta">+12 this week</span></div>
        <div className="scr-card owner-kpi">
          <small>Utilization</small><b>86%</b>
          <span className="owner-ring" style={{ '--p': 86 }} />
          <span className="owner-delta">Peak: Fri 9 PM</span>
        </div>
      </div>

      <div className="scr-card owner-tip">
        <span className="owner-tip-icon"><Icon name="flash" /></span>
        <div><b>Friday nights sell out first</b><small>Try +₹200 peak pricing on Turf A</small></div>
      </div>
    </div>
  )
}

/* ---------- 02 · Home, showing a local campaign banner ---------- */

const tabs = [['home', 'Home'], ['compass', 'Explore'], ['ticket', 'Bookings'], ['user', 'Profile']]

export function HomeScreen({ city, campaign }) {
  return (
    <div className="scr">
      <StatusBar />
      <div className="home-top">
        <div className="home-location">
          <small>Your location</small>
          <b><Icon name="location" className="ic-blue" /><span>{campaign.area}, {city}</span><Icon name="chevronDown" /></b>
        </div>
        <span className="scr-icon-btn"><Icon name="bell" /></span>
        <span className="scr-avatar">RK</span>
      </div>

      <p className="home-hey">Hey Rohan,</p>
      <p className="home-title">What are you playing today?</p>
      <div className="home-search"><Icon name="search" />Search venues, sports, areas<span><Icon name="filter" /></span></div>

      <div className={`home-banner is-${campaign.tone}`}>
        <img src={campaign.image} alt="" />
        <div>
          <span className="home-banner-tag">{campaign.sport} · {campaign.area}</span>
          <b>{campaign.offer}</b>
          <small>{campaign.message}</small>
          <span className="scr-btn is-light">Book a slot<Icon name="arrowRight" /></span>
        </div>
      </div>

      <div className="scr-head scr-pad">
        <b>Pick a sport</b>
        <small className="is-link">All sports</small>
      </div>
      <div className="home-sports">
        {sports.slice(0, 5).map((sport) => (
          <span className={`home-sport${sport.name === campaign.sport ? ' is-active' : ''}`} key={sport.name}>
            <img src={sport.image} alt="" />{sport.name}
          </span>
        ))}
      </div>

      <div className="home-tabbar">
        {tabs.map(([icon, label], index) => (
          <span className={index === 0 ? 'is-active' : undefined} key={label}><Icon name={icon} />{label}</span>
        ))}
      </div>
    </div>
  )
}

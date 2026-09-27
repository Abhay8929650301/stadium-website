import { useState } from 'react'
import Icon from './Icon.jsx'
import PhoneFrame from './PhoneFrame.jsx'
import { HomeScreen } from './AppScreens.jsx'
import { locationCampaigns } from '../data/content.js'

const cities = Object.keys(locationCampaigns)

export default function CampaignSection({ onNotify }) {
  const [city, setCity] = useState(cities[0])
  const campaign = locationCampaigns[city]

  return (
    <section className="section" id="local-reach" aria-labelledby="campaign-title">
      <div className="container">
        <div className="campaign">
          <div className="campaign-copy">
            <span className="eyebrow">Smart local reach</span>
            <h2 id="campaign-title">Say the right thing to the <em>right players.</em></h2>
            <p>Turn your stadium location into a growth signal. Create a local banner for customers nearby and send a timely notification when a slot needs filling.</p>

            <div className="segmented" role="group" aria-label="Choose a city">
              {cities.map((name) => (
                <button
                  type="button"
                  className={name === city ? 'is-active' : undefined}
                  aria-pressed={name === city}
                  onClick={() => setCity(name)}
                  key={name}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="audience">
              <span className="tone-icon tone-green"><Icon name="target" size={22} /></span>
              <p><strong>{campaign.audience}</strong><span>Targeting around {campaign.area}</span></p>
            </div>

            <button type="button" className="btn btn-blue campaign-cta" onClick={() => onNotify(`${city} campaign scheduled for ${campaign.audience.toLowerCase()}.`)}>
              Schedule this campaign <Icon name="arrowRight" />
            </button>
          </div>

          <div className="campaign-stage">
            <div className="ios-notification" key={city} aria-hidden="true">
              <span className="app-badge">P</span>
              <div>
                <span className="float-meta"><span>PlayArena near you</span><span>now</span></span>
                <strong>{campaign.offer}</strong>
                <span className="float-text">{campaign.message} Tap to see live slots.</span>
              </div>
            </div>
            <PhoneFrame label={`Customer app home screen in ${city} showing the banner “${campaign.offer}”`}>
              <HomeScreen city={city} campaign={campaign} />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  )
}

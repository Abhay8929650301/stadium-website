import { useState } from 'react'
import Icon from './Icon.jsx'
import PhoneFrame from './PhoneFrame.jsx'
import { OwnerScreen, SlotScreen, TicketScreen } from './AppScreens.jsx'
import { flowSteps } from '../data/content.js'

const SCREENS = [SlotScreen, TicketScreen, OwnerScreen]

export default function FlowSection() {
  const [activeStep, setActiveStep] = useState(0)
  const ActiveScreen = SCREENS[activeStep]

  return (
    <section className="section" id="how-it-works" aria-labelledby="flow-title">
      <div className="container">
        <div className="flow">
          <div className="flow-stage">
            <span className="flow-ring is-outer" aria-hidden="true" />
            <span className="flow-ring is-inner" aria-hidden="true" />
            <PhoneFrame label={flowSteps[activeStep].screenLabel}>
              <div className="flow-screen" key={activeStep}><ActiveScreen /></div>
            </PhoneFrame>
          </div>

          <div className="flow-copy">
            <span className="eyebrow">One connected flow</span>
            <h2 id="flow-title">From “is it booked?” to <em>“look how we grew.”</em></h2>
            <p>PlayArena connects the three apps already at the heart of your platform, so every action has a clear next step.</p>
            <div className="flow-steps">
              {flowSteps.map((step, index) => (
                <button
                  type="button"
                  className={`flow-step${index === activeStep ? ' is-active' : ''}`}
                  aria-pressed={index === activeStep}
                  onClick={() => setActiveStep(index)}
                  key={step.title}
                >
                  <span className="flow-step-num">0{index + 1}</span>
                  <span className="flow-step-text"><strong>{step.title}</strong><span>{step.copy}</span></span>
                  <Icon name="arrowRight" className="flow-step-arrow" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

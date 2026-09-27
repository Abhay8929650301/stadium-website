import Icon from './Icon.jsx'
import { SHOW_PLANS } from '../data/content.js'

const proofPoints = ['No setup fee', 'Guided onboarding', ...(SHOW_PLANS ? ['Start with Free'] : [])]

export default function FinalCta({ onStart }) {
  return (
    <section className="section section-tight" aria-labelledby="final-title">
      <div className="container">
        <div className="final reveal">
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2 id="final-title">Your stadium deserves a better operating system.</h2>
            <p>Join PlayArena and turn empty hours into discoverable, bookable, measurable business.</p>
            <ul className="final-proof">
              {proofPoints.map((point) => (
                <li key={point}><Icon name="check" size={18} strokeWidth={2.2} />{point}</li>
              ))}
            </ul>
          </div>
          <button type="button" className="btn btn-dark btn-lg" onClick={onStart}>
            Enroll my stadium <Icon name="arrowUpRight" />
          </button>
        </div>
      </div>
    </section>
  )
}

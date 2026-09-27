import Icon from './Icon.jsx'
import { enrollmentSteps } from '../data/content.js'

export default function EnrollmentBar({ onStart }) {
  return (
    <div className="container">
      <div className="enroll">
        <div className="enroll-lead">
          <span className="enroll-check"><Icon name="check" size={18} strokeWidth={2.2} /></span>
          <p><strong>Made for stadium owners</strong><span>Not another generic booking app.</span></p>
        </div>
        <ol className="enroll-steps">
          {enrollmentSteps.map((step, index) => (
            <li key={step}><span>{index + 1}</span>{step}</li>
          ))}
        </ol>
        <button type="button" className="btn btn-dark" onClick={onStart}>
          Enroll your stadium <Icon name="arrowUpRight" size={18} />
        </button>
      </div>
    </div>
  )
}

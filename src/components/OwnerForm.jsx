import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'
import { pageLinks, plans, SHOW_PLANS } from '../data/content.js'

const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]'

export default function OwnerForm({ plan, onClose, onSubmit }) {
  const sheetRef = useRef(null)
  // Close on a backdrop click only when the press also started on the backdrop,
  // so dragging a text selection out of a field never closes the form.
  const pressedBackdrop = useRef(false)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    sheetRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !sheetRef.current) return
      const focusable = sheetRef.current.querySelectorAll(FOCUSABLE)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && (document.activeElement === first || document.activeElement === sheetRef.current)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [onClose])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    onSubmit(data)
  }

  return (
    <div
      className="modal"
      role="presentation"
      onMouseDown={(event) => { pressedBackdrop.current = event.target === event.currentTarget }}
      onClick={(event) => { if (pressedBackdrop.current && event.target === event.currentTarget) onClose() }}
    >
      <div className="sheet" ref={sheetRef} role="dialog" aria-modal="true" aria-labelledby="owner-form-title" tabIndex={-1}>
        <button className="sheet-close" type="button" aria-label="Close form" onClick={onClose}>
          <Icon name="close" size={20} />
        </button>
        <span className="eyebrow">Start your owner journey</span>
        <h2 id="owner-form-title">Let&apos;s get your venue in play.</h2>
        <p>Tell us a little about your stadium. We&apos;ll help you choose the right PlayArena setup.</p>

        <form onSubmit={handleSubmit}>
          <label className="field">Owner name
            <input name="name" placeholder="Your full name" autoComplete="name" required />
          </label>
          <div className="field-row">
            <label className="field">Business email
              <input name="email" type="email" placeholder="you@stadium.com" autoComplete="email" required />
            </label>
            <label className="field">Phone number
              <span className="phone-input">
                <span className="phone-prefix">+91</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="98765 43210"
                  autoComplete="tel-national"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  title="Enter a 10-digit mobile number"
                  required
                  onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '').slice(0, 10) }}
                />
              </span>
            </label>
          </div>
          <div className="field-row">
            <label className="field">Venue name
              <input name="venue" placeholder="Your stadium name" autoComplete="organization" required />
            </label>
            <label className="field">City
              <input name="city" placeholder="Bengaluru" autoComplete="address-level2" required />
            </label>
          </div>
          {SHOW_PLANS && <fieldset className="plan-choice">
            <legend>Interested plan</legend>
            <div className="plan-choice-options">
              {plans.map((option) => (
                <label className="plan-choice-option" key={option.name}>
                  <input type="radio" name="plan" value={option.name} defaultChecked={option.name === plan} />
                  <span>{option.name}</span>
                </label>
              ))}
            </div>
          </fieldset>}
          <button className="btn btn-dark btn-lg btn-block sheet-submit" type="submit">
            Request owner setup <Icon name="arrowRight" />
          </button>
          <small className="form-note">
            No payment now. By submitting, you agree to our{' '}
            <a href={pageLinks.terms} target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and{' '}
            <a href={pageLinks.privacy} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </small>
        </form>
      </div>
    </div>
  )
}

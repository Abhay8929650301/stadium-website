import './phone.css'

// A device frame for the app mockups. Everything inside is sized in `em`, and the
// screen's base font scales with the frame width, so one mockup works at any size.
export default function PhoneFrame({ label, className = '', children }) {
  return (
    <div className={`phone ${className}`.trim()} role="img" aria-label={label}>
      <div className="phone-screen">
        {children}
        <span className="phone-island" aria-hidden="true" />
        <span className="phone-home" aria-hidden="true" />
      </div>
    </div>
  )
}

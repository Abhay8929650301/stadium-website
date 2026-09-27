import Icon from './Icon.jsx'

// The live region stays mounted so screen readers announce every new message.
export default function Toast({ notice }) {
  return (
    <div className="toast-region" aria-live="polite" aria-atomic="true">
      {notice && (
        <div className="toast" key={notice.id}>
          <span className="toast-icon"><Icon name="check" size={16} strokeWidth={2.4} /></span>
          {notice.message}
        </div>
      )}
    </div>
  )
}

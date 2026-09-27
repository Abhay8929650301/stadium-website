export default function SectionIntro({ eyebrow, title, copy, centered = false, id, children }) {
  return (
    <div className={`section-intro${centered ? ' is-centered' : ''}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </div>
      <div className="section-intro-aside">
        {copy && <p>{copy}</p>}
        {children}
      </div>
    </div>
  )
}

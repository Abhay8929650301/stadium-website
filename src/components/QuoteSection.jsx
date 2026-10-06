import stadiumNight from '../assets/photos/stadium-night.jpg'

export default function QuoteSection() {
  return (
    <section className="section section-tight" aria-label="Customer story">
      <div className="container">
        <figure className="quote reveal">
          <img className="quote-bg" src={stadiumNight} alt="" loading="lazy" decoding="async" />
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>We stopped guessing which courts were making money. Now the whole team sees what matters before the day gets busy.</blockquote>
          <figcaption className="quote-person">
            <span className="quote-avatar" aria-hidden="true">SK</span>
            <span><strong>Sameer Kulkarni</strong><small>Owner, Turf Town · Bengaluru</small></span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

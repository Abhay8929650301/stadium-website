import { sports } from '../data/content.js'

export default function SportsBand() {
  return (
    <section className="sports" aria-labelledby="sports-title">
      <div className="container">
        <h2 className="sports-title" id="sports-title">Built for the people behind</h2>
        <ul className="sports-row">
          {sports.map((sport) => (
            <li className="sport" key={sport.name}>
              <img src={sport.image} alt="" width="96" height="96" loading="lazy" decoding="async" />
              {sport.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import Icon from './Icon.jsx'
import SectionIntro from './SectionIntro.jsx'
import { features, SHOW_PLANS } from '../data/content.js'

const exploreHref = SHOW_PLANS ? '#plans' : '#how-it-works'

export default function FeatureSection() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="container">
        <SectionIntro
          centered
          id="features-title"
          eyebrow="What PlayArena gives you"
          title={<>The tools to make every <em>hour count.</em></>}
          copy="Everything your owner, manager, and customer workflows need to work together."
        />
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="reveal" style={{ '--delay': `${(index % 3) * 80}ms` }} key={feature.id}>
              <article className="card feature-card">
                <span className="card-num">{feature.id}</span>
                <span className={`tone-icon tone-${feature.tone}`}><Icon name={feature.icon} size={24} /></span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
                <a className="text-link" href={exploreHref}>Explore capability <Icon name="arrowRight" size={16} /></a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

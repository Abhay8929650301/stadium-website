import Icon from './Icon.jsx'
import SectionIntro from './SectionIntro.jsx'
import { problems } from '../data/content.js'

export default function ProblemSection() {
  return (
    <section className="section" id="solution" aria-labelledby="solution-title">
      <div className="container">
        <SectionIntro
          id="solution-title"
          eyebrow="The owner problem"
          title={<>You did not open a stadium to become a full-time <em>receptionist.</em></>}
          copy="PlayArena helps you move from managing chaos to growing a venue people want to return to."
        />
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div className="reveal" style={{ '--delay': `${index * 80}ms` }} key={problem.id}>
              <article className="card problem-card">
                <div className="problem-head">
                  <span className={`tone-icon tone-${problem.tone}`}><Icon name={problem.icon} size={24} /></span>
                  <span className="card-num">{problem.id}</span>
                </div>
                <h3>{problem.title}</h3>
                <p>{problem.copy}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import Icon from './Icon.jsx'
import { plans, YEARLY_DISCOUNT } from '../data/content.js'

const formatRupees = (amount) => `₹${amount.toLocaleString('en-IN')}`

function Plan({ plan, billing, onSelect }) {
  const yearly = billing === 'yearly'
  const fullYearPrice = plan.price * 12
  const price = yearly ? Math.round(fullYearPrice * (1 - YEARLY_DISCOUNT)) : plan.price
  const showSaving = yearly && fullYearPrice > price

  return (
    <article className={`card plan${plan.featured ? ' is-featured' : ''}`}>
      {plan.featured && <span className="plan-badge">Most popular</span>}
      <h3>{plan.name}</h3>
      <p className="plan-desc">{plan.description}</p>
      <div className="plan-price">
        <del className="plan-was" aria-hidden={!showSaving}>{showSaving ? formatRupees(fullYearPrice) : ''}</del>
        {formatRupees(price)}<small>{yearly ? ' / year' : ' / month'}</small>
      </div>
      <span className="plan-commission">{plan.commission}</span>
      <button type="button" className={`btn btn-block ${plan.featured ? 'btn-blue' : 'btn-outline'}`} onClick={onSelect}>
        {plan.action} <Icon name="arrowRight" />
      </button>
      <ul className="plan-list">
        {plan.features.map((feature) => (
          <li key={feature}><span className="plan-check"><Icon name="check" size={14} strokeWidth={2.4} /></span>{feature}</li>
        ))}
      </ul>
    </article>
  )
}

export default function PlansSection({ onSelectPlan }) {
  const [billing, setBilling] = useState('monthly')

  return (
    <section className="section" id="plans" aria-labelledby="plans-title">
      <div className="container">
        <div className="plans-head">
          <div>
            <span className="eyebrow">Plans that grow with you</span>
            <h2 id="plans-title">Start small. <em>Run like a pro.</em></h2>
            <p>No complicated setup. No surprise percentage on every booking.</p>
          </div>
          <div className="segmented" role="group" aria-label="Billing period">
            <button type="button" className={billing === 'monthly' ? 'is-active' : undefined} aria-pressed={billing === 'monthly'} onClick={() => setBilling('monthly')}>Monthly</button>
            <button type="button" className={billing === 'yearly' ? 'is-active' : undefined} aria-pressed={billing === 'yearly'} onClick={() => setBilling('yearly')}>
              Yearly <span className="save-badge">Save {YEARLY_DISCOUNT * 100}%</span>
            </button>
          </div>
        </div>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div className="reveal" style={{ '--delay': `${index * 80}ms` }} key={plan.name}>
              <Plan plan={plan} billing={billing} onSelect={() => onSelectPlan(plan.name)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

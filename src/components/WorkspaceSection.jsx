import Icon from './Icon.jsx'
import SectionIntro from './SectionIntro.jsx'
import { dashboardNav, dashboardStats, OWNER_LOGIN_URL, revenueSeries, SHOW_LOGIN, slotUtilization } from '../data/content.js'

const CHART_W = 600
const CHART_H = 180

function buildChartPaths(series) {
  const max = Math.max(...series)
  const min = Math.min(...series)
  const range = max - min || 1
  const points = series.map((value, index) => [
    (index / (series.length - 1)) * CHART_W,
    CHART_H - 14 - ((value - min) / range) * (CHART_H - 40),
  ])
  const line = points.map(([x, y], index) => `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  return { line, area: `${line} L${CHART_W} ${CHART_H} L0 ${CHART_H} Z` }
}

const chart = buildChartPaths(revenueSeries)
const utilizationPercent = Math.round((slotUtilization.booked / slotUtilization.total) * 100)

export default function WorkspaceSection() {
  return (
    <section className="section" aria-labelledby="workspace-title">
      <div className="container">
        <SectionIntro
          id="workspace-title"
          eyebrow="Your owner workspace"
          title={<>Your whole business on one <em>calm screen.</em></>}
          copy="Revenue, bookings, utilization, and your team, live, in the same place your managers work."
        >
          {SHOW_LOGIN && <a className="btn btn-glass" href={OWNER_LOGIN_URL}>Open the owner dashboard <Icon name="arrowUpRight" size={18} /></a>}
        </SectionIntro>

        <div className="reveal">
          <div className="dash" role="img" aria-label={`Owner dashboard preview: today's revenue ${dashboardStats[0].value}, ${utilizationPercent}% slot utilization`}>
            <aside className="dash-side">
              <div className="dash-brand">
                <span className="logo-mark" aria-hidden="true">P</span>
                <div><strong>PlayArena</strong><small>Admin panel</small></div>
              </div>
              {dashboardNav.map((item, index) => (
                <span className={`dash-nav${index === 0 ? ' is-active' : ''}`} key={item.label}>
                  <Icon name={item.icon} size={18} />{item.label}
                </span>
              ))}
              <div className="dash-account">
                <span>A</span>
                <div><strong>Admin</strong><small>Owner</small></div>
              </div>
            </aside>

            <div className="dash-main">
              <div className="dash-top">
                <div>
                  <h3>Owner dashboard</h3>
                  <p>Your stadium performance, bookings, and team.</p>
                </div>
                <span className="dash-select">My stadiums <Icon name="chevronDown" size={16} /></span>
              </div>

              <div className="dash-stats">
                {dashboardStats.map((stat) => (
                  <div className="dash-stat" key={stat.label}>
                    <span className="dash-stat-label">
                      <span className={`tone-icon tone-${stat.tone}`}><Icon name={stat.icon} size={16} /></span>
                      {stat.label}
                    </span>
                    <strong>{stat.value}</strong>
                    {stat.delta && <span className="dash-delta">{stat.delta}</span>}
                  </div>
                ))}
              </div>

              <div className="dash-panels">
                <div className="dash-panel">
                  <div className="dash-panel-head">
                    <div><strong>Daily revenue</strong><small>Last 30 days</small></div>
                    <span className="dash-delta">+18%</span>
                  </div>
                  <svg className="dash-chart" viewBox={`0 0 ${CHART_W} ${CHART_H}`} preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="dash-area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#1f5bff" stopOpacity=".22" />
                        <stop offset="100%" stopColor="#1f5bff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d={chart.area} fill="url(#dash-area)" />
                    <path d={chart.line} fill="none" stroke="#1f5bff" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="dash-axis"><span>1 Sep</span><span>15 Sep</span><span>30 Sep</span></div>
                </div>

                <div className="dash-panel">
                  <div className="dash-panel-head">
                    <div><strong>Today&apos;s slot utilization</strong><small>My stadiums</small></div>
                  </div>
                  <div className="util">
                    <span className="util-ring" style={{ '--p': utilizationPercent }}>
                      <span><strong>{utilizationPercent}%</strong><small>booked</small></span>
                    </span>
                    <ul className="util-legend">
                      <li><span><i className="is-booked" />Booked</span><strong>{slotUtilization.booked}</strong></li>
                      <li><span><i />Available</span><strong>{slotUtilization.total - slotUtilization.booked}</strong></li>
                      <li><span>Total slots</span><strong>{slotUtilization.total}</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

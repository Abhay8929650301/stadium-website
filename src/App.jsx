import SiteLayout from './components/SiteLayout.jsx'
import Hero from './components/Hero.jsx'
import EnrollmentBar from './components/EnrollmentBar.jsx'
import SportsBand from './components/SportsBand.jsx'
import ProblemSection from './components/ProblemSection.jsx'
import FlowSection from './components/FlowSection.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import WorkspaceSection from './components/WorkspaceSection.jsx'
import CampaignSection from './components/CampaignSection.jsx'
import QuoteSection from './components/QuoteSection.jsx'
import PlansSection from './components/PlansSection.jsx'
import FinalCta from './components/FinalCta.jsx'
import useRevealOnScroll from './hooks/useRevealOnScroll.js'
import { SHOW_PLANS } from './data/content.js'

function App() {
  useRevealOnScroll()

  return (
    <SiteLayout>
      {({ notify, openForm, startWithPremium }) => (
        <>
          <Hero onStart={startWithPremium} />
          <EnrollmentBar onStart={startWithPremium} />
          <SportsBand />
          <ProblemSection />
          <FlowSection />
          <FeatureSection />
          <WorkspaceSection />
          <CampaignSection onNotify={notify} />
          <QuoteSection />
          {SHOW_PLANS && <PlansSection onSelectPlan={openForm} />}
          <FinalCta onStart={startWithPremium} />
        </>
      )}
    </SiteLayout>
  )
}

export default App

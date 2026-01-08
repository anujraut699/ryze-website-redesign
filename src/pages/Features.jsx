import PageHero from '../components/PageHero'
import FeaturesList from '../components/FeaturesList'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'

function Features() {
  return (
    <>
      <PageHero
        title="Powerful AI Features"
        subtitle="Everything you need to run better ad campaigns automatically."
      />

      <FeaturesList />

      <Benefits />

      <CTA
        title="See Ryze in Action"
        description="Book a demo to explore how Ryze improves your ad performance."
        buttonText="Book a Demo"
        link="/demo"
      />
    </>
  )
}

export default Features

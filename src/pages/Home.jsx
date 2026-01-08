import Hero from "../components/Hero"
import FeaturesPreview from "../components/FeaturesPreview"
import CTA from "../components/CTA"
import HowItWorks from "../components/HowItWorks"
import UseCases from "../components/UseCases"
import PlatformStrip from '../components/PlatformStrip'



function Home() {
  return (
    <>
      <Hero />
      <PlatformStrip />
      <FeaturesPreview />
      <CTA
       title="Let AI Optimize Your Ads"
  description="Stop wasting time on manual optimization. Let Ryze’s AI learn, adapt, and improve your campaigns automatically."
  buttonText="Book a Free Demo"
  link="/demo"
      />
      <HowItWorks />
      <UseCases />
    </>
  )
}

export default Home

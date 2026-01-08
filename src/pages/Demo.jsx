import PageHero from '../components/PageHero'
import DemoForm from '../components/DemoForm'
import DemoBenefits from '../components/DemoBenefits'

function Demo() {
  return (
    <>
      <PageHero
        title="Book a Free Demo"
        subtitle="See how Ryze can automatically optimize your ad campaigns."
      />

      <DemoForm />

      <DemoBenefits />
    </>
  )
}

export default Demo

import '../styles/components/demobenefit.css'

function DemoBenefits() {
  const benefits = [
    'See how Ryze’s AI optimizes ad campaigns in real time.',
    'Understand where your ad spend can improve immediately.',
    'Get personalized insights tailored to your business goals.',
  ]

  return (
    <section className="demo-benefits">
      <div className="container">
        <h2 className="demo-benefits-title">What You’ll Get in the Demo</h2>

        <div className="demo-benefits-list">
          {benefits.map((item, index) => (
            <div key={index} className="demo-benefit">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DemoBenefits

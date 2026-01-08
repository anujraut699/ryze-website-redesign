import '../styles/components/benefits.css'

function Benefits() {
  const benefits = [
    {
      title: 'Save Time',
      desc: 'Automate daily ad optimization tasks and focus on strategy.',
    },
    {
      title: 'Reduce Wasted Spend',
      desc: 'AI continuously reallocates budget to what performs best.',
    },
    {
      title: 'Better Performance',
      desc: 'Campaigns improve over time as the AI learns and adapts.',
    },
    {
      title: 'Scale with Confidence',
      desc: 'Grow campaigns without adding more manual effort.',
    },
  ]

  return (
    <section className="benefits">
      <div className="container">
        <h2 className="benefits-title">Why Teams Choose Ryze</h2>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits

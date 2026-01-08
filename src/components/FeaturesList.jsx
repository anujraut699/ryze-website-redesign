import '../styles/components/FeaturesList.css'

function FeaturesList() {
  const features = [
    {
      title: 'AI-Powered Optimization',
      description:
        'Automatically improves targeting, bids, and performance using real-time data.',
    },
    {
      title: 'Smart Budget Allocation',
      description:
        'Dynamically shifts budget to the highest-performing campaigns.',
    },
    {
      title: 'Real-Time Insights',
      description:
        'Get clear visibility into what’s working and why, at all times.',
    },
    {
      title: 'Continuous Learning',
      description:
        'The AI adapts and improves with every campaign interaction.',
    },
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="features-title">AI Features</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesList

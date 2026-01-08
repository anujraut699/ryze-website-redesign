function FeaturesPreview() {
  const features = [
   { title: 'Automated Ad Optimization'},
   { title:  'Smart Budget Management'},
   { title:  'Real-time Performance Insights'},
   { title: 'Reduced Ad Spend Waste'},
  ]

  return (
    <section className="features">
          <div className="container">
      <h2  className="features-title">Key Features</h2>

       <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}

const styles = {
  container: {
    padding: '60px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    marginBottom: '24px',
  },
  list: {
    listStyle: 'none',
    maxWidth: '500px',
    margin: '0 auto',
    padding: 0,
  },
  item: {
    padding: '12px',
    borderBottom: '1px solid #e5e7eb',
    fontSize: '16px',
  },
}

export default FeaturesPreview

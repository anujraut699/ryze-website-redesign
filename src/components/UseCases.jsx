import '../styles/components/usecases.css'

function UseCases() {
  const cases = [
    {
      title: 'Startups',
      desc: 'Launch and scale ads without hiring a full marketing team.',
    },
    {
      title: 'Marketing Teams',
      desc: 'Let AI handle optimization while you focus on strategy.',
    },
    {
      title: 'Agencies',
      desc: 'Manage multiple client campaigns efficiently with AI.',
    },
  ]

  return (
    <section className="usecases">
      <div className="container">
        <h2 className="usecases-title">Who Is Ryze For?</h2>

        <div className="usecases-grid">
          {cases.map((item, index) => (
            <div key={index} className="usecase-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases

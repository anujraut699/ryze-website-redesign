import '../styles/components/HowItWorks.css'

function HowItWorks() {
  return (
    <section className="how">
      <div className="container">
        <h2 className="how-title">How Ryze Works</h2>

        <div className="how-flow">
          <div className="how-box">
            <h3>Ad Data</h3>
            <p>
              Ryze connects to your ad platforms and reads live performance data.
            </p>
          </div>

          <div className="how-box">
            <h3>AI Engine</h3>
            <p>
              The AI analyzes patterns, learns continuously, and makes decisions.
            </p>
          </div>

          <div className="how-box">
            <h3>Optimized Ads</h3>
            <p>
              Campaigns improve automatically with better targeting and budget use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

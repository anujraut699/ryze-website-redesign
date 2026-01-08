import { Link } from 'react-router-dom'
import '../styles/components/hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="hero-title">
            AI That <span>Runs Your Ads</span>
          </h1>

          <p className="hero-subtitle">
            Ryze uses artificial intelligence to automatically manage,
            optimize, and scale your advertising campaigns.
          </p>

          <div className="hero-actions">
            <Link to="/demo" className="cta-btn">
              Book a Demo
            </Link>
            <Link to="/features" className="hero-secondary">
              View Features
            </Link>
          </div>
        </div>

      {/* RIGHT CONTENT */}
<div className="hero-media">
  <div className="ai-visual">

    <div className="ai-card card-1">
      <h4>AI Optimization</h4>
      <p>+24% ROI</p>
    </div>

    <div className="ai-card card-2">
      <h4>Budget Allocation</h4>
      <p>Auto-Adjusted</p>
    </div>

    <div className="ai-card card-3">
      <h4>Live Insights</h4>
      <p>Real-Time</p>
    </div>

  </div>
</div>


      </div>
    </section>
  )
}

export default Hero

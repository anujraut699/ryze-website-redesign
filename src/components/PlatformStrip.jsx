import '../styles/components/platform-strip.css'

function PlatformStrip() {
  const platforms = [
    'Google Ads',
    'Meta Ads',
    'TikTok Ads',
    'LinkedIn Ads',
  ]

  return (
    <section className="platform-strip">
      <div className="container platform-inner">
        <p className="platform-label">Works with</p>

        <div className="platform-list">
          {platforms.map((platform, index) => (
            <span key={index} className="platform-item">
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformStrip

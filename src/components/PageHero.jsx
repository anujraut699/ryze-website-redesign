import '../styles/components/pagehero.css'

function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <h1>
          <span>{title}</span>
        </h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHero

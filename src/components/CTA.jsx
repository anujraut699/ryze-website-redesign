import { Link } from 'react-router-dom'
import '../styles/components/cta.css'

function CTA({ title, description, buttonText, link }) {
  return (
    <section className="cta">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link} className="btn-3d">{buttonText}</Link>
    </section>
  )
}

export default CTA

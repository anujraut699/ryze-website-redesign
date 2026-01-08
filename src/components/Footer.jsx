import { Link } from 'react-router-dom'
import '../styles/components/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Ryze. AI-powered ad optimization.
      </p>

      <div className="footer-links">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/features" className="footer-link">Features</Link>
        <Link to="/demo" className="footer-link">Book Demo</Link>
      </div>
    </footer>
  )
}

export default Footer

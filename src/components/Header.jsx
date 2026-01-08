import { Link } from 'react-router-dom'
import '../styles/components/header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> 
        Ryze
        </Link>
        </div>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/features" className="nav-link">Features</Link>
        <Link to="/demo" className="nav-cta">Book a Demo</Link>
      </nav>
    </header>
  )
}

export default Header

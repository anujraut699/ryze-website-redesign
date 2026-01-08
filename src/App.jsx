import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Demo from './pages/Demo'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import './index.css'
import Hero from './components/Hero'
import Services from './components/Services'
import PortfolioSection from './components/PortfolioSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <PortfolioSection />
      <Footer />
    </div>
  )
}

export default App
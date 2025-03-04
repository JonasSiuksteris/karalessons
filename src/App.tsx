import './index.css'
import Hero from './components/Hero'
import Services from './components/Services'
import PortfolioSection from './components/PortfolioSection'
import Footer from './components/Footer'
import Header from './components/Header'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <PortfolioSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
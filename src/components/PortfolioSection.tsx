import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const PortfolioSection = () => {
  const { t } = useLanguage()
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-6 text-center">
            {t('portfolio.title')}
          </h2>
          
          <a 
            href="https://tinatininq.wixsite.com/tinatin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-3 px-8 rounded-lg transition-colors shadow-sm text-lg"
          >
            <span>{t('portfolio.viewPortfolio')}</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
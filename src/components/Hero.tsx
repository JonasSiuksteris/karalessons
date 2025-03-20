import { ArrowRight } from 'lucide-react'
import consultationImg from '../img/FreeConsultation.jpg'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  const handleConsultation = () => {
    window.open('https://forms.gle/5ToKs3sGUsCGN8Q16', '_blank')
  }

  return (
    <div className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="bg-white rounded-lg shadow-sm max-w-4xl mx-auto overflow-hidden">
            <div className="flex flex-row items-center p-4 gap-4">
              <div className="w-20 h-20 sm:w-36 sm:h-36 flex-shrink-0">
              <img
                  src={consultationImg}
                  alt="Art consultation"
                  className="w-full h-full object-cover rounded-lg"
                  loading="eager"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-left">
                  {t('hero.freeConsultation')}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 text-left">
                  {t('hero.consultationDescription')}
                </p>
                <button
                  onClick={handleConsultation}
                  className="bg-yellow-300 text-black px-4 sm:px-6 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-400 transition-colors text-sm sm:text-base"
                >
                  {t('hero.bookConsultation')}
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
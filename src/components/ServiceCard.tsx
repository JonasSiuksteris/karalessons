import { useState, ReactNode, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Lightbox from './Lightbox'
import { useLanguage } from '../contexts/LanguageContext'

interface ServiceCardProps {
  title: string
  description: string | ReactNode
  bulletPoints: string[] | ReactNode[]
  price: number
  skillLevel: string
  languages: string[]
  meetingType: string[]
  formUrl: string
  gallery: string[]
}

const ServiceCard = ({ 
  title, 
  description, 
  bulletPoints, 
  price, 
  skillLevel, 
  languages, 
  meetingType, 
  formUrl, 
  gallery 
}: ServiceCardProps) => {
  const { t } = useLanguage()
  const [currentImage, setCurrentImage] = useState(0)
  const [, setLoadedImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    // Preload all images
    const preloadImages = async () => {
      const loadImage = (src: string): Promise<string> => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          img.onload = () => resolve(src)
          img.onerror = reject
        })
      }

      try {
        // Load first image immediately
        await loadImage(gallery[0])
        setLoadedImages([gallery[0]])
        setIsLoading(false)

        // Load the rest in the background
        const restOfImages = await Promise.all(
          gallery.slice(1).map(src => loadImage(src))
        )
        setLoadedImages([gallery[0], ...restOfImages])
      } catch (error) {
        console.error('Error loading images:', error)
        setIsLoading(false)
      }
    }

    preloadImages()
  }, [gallery])

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % gallery.length)
  }

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const openLightbox = () => {
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const handleBookNow = () => {
    window.open(formUrl, '_blank')
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="relative h-48 cursor-pointer" onClick={openLightbox}>
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="animate-pulse bg-gray-200 w-full h-full"></div>
            </div>
          ) : (
            <>
              <img
                src={gallery[currentImage]}
                alt={`${title} - Image ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay to indicate clickability */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="bg-white/80 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">{t('services.common.viewLarger')}</span>
                </div>
              </div>
            </>
          )}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full z-10"
            disabled={isLoading}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full z-10"
            disabled={isLoading}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <h3 className="text-xl font-semibold w-full">{title}</h3>
            <span className="bg-zinc-200 text-zinc-600 text-sm font-medium px-3 py-1 rounded">
              {skillLevel}
            </span>
            
            {languages.map((language, index) => (
              <span key={index} className="bg-zinc-200 text-zinc-600 text-sm font-medium px-3 py-1 rounded">
                {language}
              </span>
            ))}
            
            {meetingType.map((type, index) => (
              <span key={index} className="bg-zinc-200 text-zinc-600 text-sm font-medium px-3 py-1 rounded">
                {type}
              </span>
            ))}
          </div>
          
          <p className="text-gray-600 mb-4">{description}</p>
          
          <ul className="mb-4 text-gray-600 space-y-2">
            {Array.isArray(bulletPoints) && bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-black mr-2 text-lg">✔</span>
                <span className='text-sm'>{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">{price} €</span>
            <button
              onClick={handleBookNow}
              className="bg-yellow-300 text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-400 transition-colors"
            >
              {t('services.common.bookNow')}
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox component */}
      <Lightbox 
        images={gallery} 
        currentImage={currentImage} 
        isOpen={lightboxOpen} 
        onClose={closeLightbox} 
        onPrev={prevImage} 
        onNext={nextImage} 
      />
    </>
  )
}

export default ServiceCard
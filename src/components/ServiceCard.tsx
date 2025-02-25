import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  price: number
  skillLevel: string
  formUrl: string
  gallery: string[]
}

const ServiceCard = ({ title, description, price, skillLevel, formUrl, gallery }: ServiceCardProps) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const handleBookNow = () => {
    window.open(formUrl, '_blank')
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-48">
        <img
          src={gallery[currentImage]}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
            {skillLevel}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${price}</span>
          <button
            onClick={handleBookNow}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            Book Now
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard

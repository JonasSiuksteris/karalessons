import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  bulletPoints: string[]
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
        <div className="flex flex-wrap gap-2 mb-4">
          <h3 className="text-xl font-semibold w-full">{title}</h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
            {skillLevel}
          </span>
          
          {languages.map((language, index) => (
            <span key={index} className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
              {language}
            </span>
          ))}
          
          {meetingType.map((type, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded">
              {type}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          {bulletPoints.map((point, index) => (
            <li key={index} className="mb-1">{point}</li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">{price} €</span>
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
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  images: string[]
  currentImage: number
  isOpen: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Lightbox = ({ 
  images, 
  currentImage, 
  isOpen, 
  onClose, 
  onPrev, 
  onNext 
}: LightboxProps) => {
  const [isLoading, setIsLoading] = useState(true)

  // Reset loading state when image changes
  useEffect(() => {
    setIsLoading(true)
  }, [currentImage])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    
    // Prevent scrolling when lightbox is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose} // Close when clicking the background
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>
      
      {/* Navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing lightbox when clicking navigation
          onPrev();
        }}
        className="absolute left-4 text-white hover:text-gray-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing lightbox when clicking navigation
          onNext();
        }}
        className="absolute right-4 text-white hover:text-gray-300 z-10"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>
      
      {/* Main image */}
      <div 
        className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image container
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={images[currentImage]}
          alt={`Fullscreen image ${currentImage + 1}`}
          className="max-h-full max-w-full object-contain"
          onLoad={() => setIsLoading(false)}
        />
        
        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export default Lightbox
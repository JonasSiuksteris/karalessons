import { Palette } from 'lucide-react'
import { useState, useEffect } from 'react'

interface LogoProps {
  size?: number
  customLogoPath?: string
}

const Logo = ({ size = 64, customLogoPath }: LogoProps) => {
  const [imageError, setImageError] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  
  // Reset error state if customLogoPath changes
  useEffect(() => {
    setImageError(false)
    setImgLoaded(false)
  }, [customLogoPath])

  const logoSize = `${size}px`
  
  const handleImageError = () => {
    console.error('Error loading logo image')
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImgLoaded(true)
  }

  // Show custom logo if path is provided and image loads successfully
  // Otherwise fall back to the default temporary logo
  return (
    <div className="flex flex-col items-center justify-center">
      {customLogoPath && !imageError ? (
        <div 
          className="overflow-hidden rounded-full" 
          style={{ width: logoSize, height: logoSize }}
        >
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
              <span className="sr-only">Loading logo...</span>
            </div>
          )}
          <img
            src={customLogoPath}
            alt="KARA LESSONS Logo"
            className="w-full h-full object-cover"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        </div>
      ) : (
        // Temporary logo (fallback)
        <div className="bg-blue-600 p-3 rounded-full relative" style={{ width: logoSize, height: logoSize }}>
          <Palette size={size * 0.6} className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-yellow-400 rounded-full" />
        </div>
      )}
    </div>
  )
}

export default Logo
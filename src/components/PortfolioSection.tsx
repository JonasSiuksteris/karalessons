import { ExternalLink } from 'lucide-react'

const PortfolioSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-6 text-center">
            Want to see more examples of our work?
          </h2>
          
          <a 
            href="https://tinatininq.wixsite.com/tinatin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm text-lg"
          >
            <span>View Full Portfolio</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
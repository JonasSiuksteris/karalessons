import LanguageSelector from './LanguageSelector'

const Header = () => {
  return (
    <header className="bg-white py-3 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
        <LanguageSelector />
      </div>
    </header>
  )
}

export default Header
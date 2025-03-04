import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import { Language } from '../i18n/translations';

const languageNames: Record<Language, string> = {
  en: 'English',
  lt: 'Lietuvių',
  ru: 'Русский',
};

const flagEmojis: Record<Language, string> = {
  en: '🇬🇧',
  lt: '🇱🇹',
  ru: '🇷🇺',
};

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={20} className="mr-1" />
        <span className="mr-1">{flagEmojis[language]}</span>
        <span>{languageNames[language]}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {Object.entries(languageNames).map(([code, name]) => (
            <button
              key={code}
              className={`block px-4 py-2 text-sm w-full text-left items-center ${
                language === code ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => handleLanguageChange(code as Language)}
            >
              <span className="mr-2">{flagEmojis[code as Language]}</span>
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
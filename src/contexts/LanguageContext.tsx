import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations, Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check if there's a language in the URL path
    const pathSegments = window.location.pathname.split('/');
    if (pathSegments.length > 1) {
      const pathLang = pathSegments[1] as Language;
      if (pathLang === 'lt' || pathLang === 'ru') {
        setLanguage(pathLang);
      }
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    
    // Update the URL to reflect the language change
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    
    if (lang === 'en') {
      // If switching to English, remove the language segment
      if (pathSegments.length > 1 && (pathSegments[1] === 'lt' || pathSegments[1] === 'ru')) {
        const newPath = '/' + pathSegments.slice(2).join('/');
        window.history.pushState({}, '', newPath || '/');
      }
    } else {
      // For other languages, add or replace the language segment
      if (pathSegments.length > 1 && (pathSegments[1] === 'lt' || pathSegments[1] === 'ru')) {
        pathSegments[1] = lang;
        window.history.pushState({}, '', pathSegments.join('/'));
      } else {
        // Insert the language segment
        const newPath = `/${lang}${currentPath === '/' ? '' : currentPath}`;
        window.history.pushState({}, '', newPath);
      }
    }
  };

  // Translation function
  const t = (key: string): any => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        // Fallback to English
        let fallback: any = translations['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            fallback = key;
            break;
          }
        }
        result = fallback;
        break;
      }
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
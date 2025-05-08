import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { type Language } from '@/lib/translations';
import { Button } from "@/components/ui/button";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  // Fecha o dropdown quando clica fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languageLabels: Record<Language, string> = {
    'en': t('language.english'),
    'es': t('language.spanish'),
    'pt-br': t('language.portuguese')
  };
  
  const languageIcons: Record<Language, string> = {
    'en': '🇺🇸',
    'es': '🇪🇸',
    'pt-br': '🇧🇷'
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-sm font-medium"
      >
        <span>{languageIcons[language]}</span>
        <span className="hidden md:inline">{languageLabels[language]}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </Button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            <button
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${
                language === 'en' 
                  ? 'bg-primary-50 text-primary dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              role="menuitem"
              onClick={() => handleLanguageChange('en')}
            >
              <span>🇺🇸</span>
              <span>{t('language.english')}</span>
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${
                language === 'es' 
                  ? 'bg-primary-50 text-primary dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              role="menuitem"
              onClick={() => handleLanguageChange('es')}
            >
              <span>🇪🇸</span>
              <span>{t('language.spanish')}</span>
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${
                language === 'pt-br' 
                  ? 'bg-primary-50 text-primary dark:bg-primary-900 dark:text-primary-300' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              role="menuitem"
              onClick={() => handleLanguageChange('pt-br')}
            >
              <span>🇧🇷</span>
              <span>{t('language.portuguese')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
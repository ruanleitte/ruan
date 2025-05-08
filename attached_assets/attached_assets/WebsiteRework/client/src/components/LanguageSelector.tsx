import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { type Language } from '@/lib/translations';

const LanguageSelector: React.FC = () => {
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

  // Close dropdown when clicking outside
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

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          id="language-toggle"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {languageLabels[language]}
          <i className={`fas fa-chevron-down ml-2 mt-0.5 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}></i>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-toggle"
        >
          <div className="py-1" role="none">
            <button
              className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
              role="menuitem"
              onClick={() => handleLanguageChange('en')}
            >
              {t('language.english')}
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm ${language === 'es' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
              role="menuitem"
              onClick={() => handleLanguageChange('es')}
            >
              {t('language.spanish')}
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm ${language === 'pt-br' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
              role="menuitem"
              onClick={() => handleLanguageChange('pt-br')}
            >
              {t('language.portuguese')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

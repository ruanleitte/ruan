import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { translations, type Language } from '@/lib/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const DEFAULT_LANGUAGE: Language = 'pt-br'; // O padrão é português do Brasil

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Inicia com o idioma armazenado ou o padrão
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || DEFAULT_LANGUAGE;
  });

  const t = useCallback(
    (key: string) => {
      const parts = key.split('.');
      let result: any = translations[language];
      
      for (const part of parts) {
        if (!result || typeof result !== 'object') return key;
        result = result[part];
      }
      
      if (typeof result === 'string') return result;
      return key;
    },
    [language]
  );

  // Salva o idioma no localStorage quando ele muda
  const setLanguageWithStorage = useCallback((newLanguage: Language) => {
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageWithStorage,
      t,
    }),
    [language, setLanguageWithStorage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
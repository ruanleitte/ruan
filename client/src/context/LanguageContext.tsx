import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { translations } from '@/lib/translations';

// Define os idiomas disponíveis
export type Language = 'pt-br' | 'en' | 'es';

// Interface para o contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Cria o contexto com valores padrão
const LanguageContext = createContext<LanguageContextType>({
  language: 'pt-br',
  setLanguage: () => {},
  t: (key: string) => key
});

// Custom hook para usar o contexto
export const useLanguage = () => useContext(LanguageContext);

// Provider do contexto
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Inicializa o estado com o idioma do localStorage ou o padrão
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'pt-br';
    
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'pt-br';
  });

  // Atualiza o localStorage quando o idioma muda
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    
    // Define a direção do texto (para suporte futuro a idiomas RTL)
    document.documentElement.dir = ['ar', 'he'].includes(language) ? 'rtl' : 'ltr';
  }, [language]);

  // Função para alterar o idioma
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  // Função para traduzir texto
  const t = (key: string): string => {
    if (!key) return '';
    
    try {
      // Busca a tradução no objeto de traduções
      const keys = key.split('.');
      let translation: any = translations[language];
      
      for (const k of keys) {
        if (!translation || !translation[k]) {
          // Fallback para o inglês se a tradução não existir
          if (language !== 'en') {
            let englishTranslation: any = translations['en'];
            
            for (const enKey of keys) {
              if (!englishTranslation || !englishTranslation[enKey]) {
                return key; // Retorna a chave se não houver tradução
              }
              englishTranslation = englishTranslation[enKey];
            }
            return String(englishTranslation);
          }
          return key; // Retorna a chave se não houver tradução
        }
        translation = translation[k];
      }
      
      return String(translation);
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  };

  // Valor do contexto
  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
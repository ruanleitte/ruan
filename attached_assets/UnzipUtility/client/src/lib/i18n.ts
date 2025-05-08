import { useLanguage } from '@/hooks/useLanguage';

/**
 * This file provides utility functions for internationalization (i18n).
 * It works in conjunction with the useLanguage hook to provide
 * a simple way to translate text in the application.
 */

/**
 * Format a date according to the current language locale
 * @param date - The date to format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  // Map language codes to locales
  const localeMap: Record<string, string> = {
    'en': 'en-US',
    'es': 'es-ES',
    'pt-br': 'pt-BR'
  };
  
  // Get current language from context
  const { language } = useLanguage();
  const locale = localeMap[language] || 'en-US';
  
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format a number according to the current language locale
 * @param number - The number to format
 * @param options - Intl.NumberFormat options
 * @returns Formatted number string
 */
export function formatNumber(
  number: number,
  options: Intl.NumberFormatOptions = {}
): string {
  // Map language codes to locales
  const localeMap: Record<string, string> = {
    'en': 'en-US',
    'es': 'es-ES',
    'pt-br': 'pt-BR'
  };
  
  // Get current language from context
  const { language } = useLanguage();
  const locale = localeMap[language] || 'en-US';
  
  return new Intl.NumberFormat(locale, options).format(number);
}

/**
 * Determine text direction based on language
 * @returns 'rtl' for right-to-left languages, 'ltr' otherwise
 */
export function getTextDirection(): 'ltr' | 'rtl' {
  const { language } = useLanguage();
  
  // Add RTL languages here if needed
  const rtlLanguages: string[] = [];
  
  return rtlLanguages.includes(language) ? 'rtl' : 'ltr';
}

/**
 * Get the full language name from the language code
 * @param code - Language code (en, es, pt-br)
 * @returns The full language name
 */
export function getLanguageName(code: string): string {
  const languageNames: Record<string, string> = {
    'en': 'English',
    'es': 'Español',
    'pt-br': 'Português (Brasil)'
  };
  
  return languageNames[code] || code;
}

import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-50/50 border-t py-5 mt-10">
      <div className="container px-4 mx-auto max-w-5xl">
        {/* Linha superior com logo e navegação minimalista */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Logo central */}
          <Link href="/" className="font-bold text-lg text-gray-800 hover:text-primary transition-colors">
            RUAN<span className="text-primary">JASIEL</span>
          </Link>
          
          {/* Links simples em linha */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.home')}
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.about')}
            </Link>
            <Link href="/resume" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.resume')}
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.portfolio')}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {t('common.contact')}
            </Link>
          </div>
          
          {/* Ícones sociais */}
          <div className="flex space-x-3">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
        
        {/* Linha de copyright extremamente minimalista */}
        <div className="mt-5 pt-4 border-t border-gray-200/70 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} Ruan Jasiel • 
            <span className="inline-block mx-2 w-1 h-1 rounded-full bg-gray-300"></span>
            Salvador, Bahia
          </p>
        </div>
      </div>
    </footer>
  );
}

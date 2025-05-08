import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'wouter';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-xl font-bold text-primary cursor-pointer">Portfolio</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'home' 
                    ? 'border-primary text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}>
                  {t('nav.home')}
                </a>
              </Link>
              <Link href="/resume">
                <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'resume' 
                    ? 'border-primary text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}>
                  {t('nav.resume')}
                </a>
              </Link>
              <Link href="/contact">
                <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'contact' 
                    ? 'border-primary text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}>
                  {t('nav.contact')}
                </a>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} h-6 w-6`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/">
            <a 
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                activeSection === 'home'
                  ? 'bg-primary-50 border-primary text-primary-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.home')}
            </a>
          </Link>
          <Link href="/resume">
            <a 
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                activeSection === 'resume'
                  ? 'bg-primary-50 border-primary text-primary-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.resume')}
            </a>
          </Link>
          <Link href="/contact">
            <a 
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                activeSection === 'contact'
                  ? 'bg-primary-50 border-primary text-primary-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.contact')}
            </a>
          </Link>
          <div className="pl-3 pr-4 py-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

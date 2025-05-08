import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    // In a real app, you would send this to a backend
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">John Doe</h3>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</a>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <a className="text-gray-400 hover:text-white transition-colors">{t('nav.resume')}</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-400 mb-4">{t('footer.newsletter.description')}</p>
            <form className="flex" onSubmit={handleSubscribe}>
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none text-gray-900"
                required
              />
              <Button type="submit" className="rounded-l-none">
                <i className="fas fa-paper-plane"></i>
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">{t('footer.copyright')}</p>
          <div className="mt-4 md:mt-0">
            <button 
              className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
              onClick={toggleDarkMode}
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              <span>{t('footer.darkMode')}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

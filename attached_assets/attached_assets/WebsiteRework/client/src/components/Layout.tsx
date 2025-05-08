import React, { ReactNode, useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useLocation } from 'wouter';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [location] = useLocation();

  // Update active section based on location
  useEffect(() => {
    if (location === '/') {
      setActiveSection('home');
    } else if (location === '/resume') {
      setActiveSection('resume');
    } else if (location === '/contact') {
      setActiveSection('contact');
    }
  }, [location]);

  // Update active section based on scroll position for homepage sections
  useEffect(() => {
    if (location !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation activeSection={activeSection} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage } = useLanguage();
  const { navbar } = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`bg-primary text-white shadow-md sticky top-0 z-50 transition-all ${
      isScrolled ? "py-2" : "py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl">
            <Link href="/">
              <a className="text-white">JP</a>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navbar.links.map((link, index) => (
              <Link key={index} href={link.url}>
                <a className={`hover:text-secondary transition ${
                  location === link.url ? "text-secondary" : ""
                }`}>
                  {link.text}
                </a>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-secondary transition">
                <span>{navbar.languages[language]}</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
                {Object.keys(navbar.languages).map((lang) => (
                  <button
                    key={lang}
                    className="block w-full text-left px-4 py-2 text-sm text-dark hover:bg-gray-100"
                    onClick={() => setLanguage(lang as "pt" | "en" | "es")}
                  >
                    {navbar.languages[lang as keyof typeof navbar.languages]}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-primary ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navbar.links.map((link, index) => (
            <Link key={index} href={link.url}>
              <a className={`block px-3 py-2 hover:bg-primary-dark ${
                location === link.url ? "text-secondary" : "text-white"
              }`}>
                {link.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

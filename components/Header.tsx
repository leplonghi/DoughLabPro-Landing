
import React, { useState, useRef, useEffect } from 'react';
import { DoughLabLogo, NAV_LINKS_DATA } from '../constants';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../types';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const languages: Language[] = ['pt', 'en', 'es'];
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleLanguageChange = (lang: Language) => {
      setLanguage(lang);
      setIsOpen(false);
    }

    return (
        <div className="relative" ref={wrapperRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {language.toUpperCase()}
                <ChevronDownIcon />
            </button>
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-28 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1 z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="language-menu-button"
                >
                    {languages.map(lang => (
                        <button
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            className={`w-full text-left block px-4 py-2 text-sm transition-colors ${
                                language === lang
                                    ? 'bg-gray-100 text-text-main'
                                    : 'text-text-subtle'
                            } hover:bg-gray-100`}
                            role="menuitem"
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <DoughLabLogo />
          <nav className="hidden md:flex items-center space-x-8" aria-label={t('nav_ariaLabel')}>
            {NAV_LINKS_DATA.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group font-medium text-text-subtle hover:text-primary transition-all duration-200 py-2 active:translate-y-px focus:outline-none focus-visible:text-primary rounded"
              >
                {t(link.key)}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
             <LanguageSwitcher />
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-text-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label="Open menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
         <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label={t('nav_ariaLabel')}>
                 {NAV_LINKS_DATA.map((link) => (
                    <a
                        key={link.key}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block px-3 py-2 rounded-md text-base font-medium text-text-subtle hover:text-primary hover:bg-gray-50 transition-all duration-200 hover:pl-4 focus:outline-none focus-visible:bg-gray-100"
                    >
                        {t(link.key)}
                    </a>
                ))}
            </nav>
         </div>
      )}
    </header>
  );
};

export default Header;
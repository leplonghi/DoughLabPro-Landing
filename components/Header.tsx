
import React, { useState } from 'react';
import { DoughLabLogo, NAV_LINKS } from '../constants';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../types';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

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

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const languages: Language[] = ['pt', 'en', 'es'];

    return (
        <div className="flex items-center space-x-1 bg-gray-100 dark:bg-dark-card p-1 rounded-full">
            {languages.map(lang => (
                <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-bg ${
                        language === lang
                            ? 'bg-white dark:bg-dark-bg text-primary shadow'
                            : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text'
                    }`}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <DoughLabLogo />
          <nav className="hidden md:flex items-center space-x-8" aria-label={t('nav.ariaLabel')}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary transition-all duration-200 py-2 active:translate-y-px focus:outline-none focus-visible:text-primary rounded"
              >
                {t(link.labelKey)}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
             <LanguageSwitcher />
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-card transition-all duration-200 active:scale-95 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-bg"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-bg"
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
         <div id="mobile-menu" className="md:hidden bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label={t('nav.ariaLabel')}>
                 {NAV_LINKS.map((link) => (
                    <a
                        key={link.labelKey}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block px-3 py-2 rounded-md text-base font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-dark-card transition-all duration-200 hover:pl-4 focus:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-dark-card"
                    >
                        {t(link.labelKey)}
                    </a>
                ))}
            </nav>
         </div>
      )}
    </header>
  );
};

export default Header;

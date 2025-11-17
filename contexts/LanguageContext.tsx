import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language, LanguageContextType } from '../types';
import { loadTranslations, detectUserLanguage } from '../i18n';

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en'); // Default to 'en' initially
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadLanguage = useCallback(async (lang: Language) => {
    setIsLoading(true);
    const data = await loadTranslations(lang);
    setTranslations(data);
    setLanguageState(lang);
    document.documentElement.lang = lang;
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const detectedLang = detectUserLanguage();
    handleLoadLanguage(detectedLang);
  }, [handleLoadLanguage]);

  const setLanguage = (lang: Language) => {
    if (lang !== language) {
        handleLoadLanguage(lang);
    }
  };

  const t = (key: string, options?: { [key: string]: string | number }): string => {
    // Return the key itself if translations are not yet loaded
    if (isLoading) return key; 
    
    let translation = translations[key] || key;
    
    if (options) {
      Object.keys(options).forEach(optKey => {
        const regex = new RegExp(`\\{${optKey}\\}`, 'g');
        translation = translation.replace(regex, String(options[optKey]));
      });
    }
    
    return translation;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

import React, { createContext, ReactNode } from 'react';
import { Language, LanguageContextType } from '../types';
import { landingTexts } from '../landingTexts';
import { detectLandingLang, setLandingLang } from '../lang';

const getNestedTranslation = (obj: any, path: string): string => {
    if (!obj || typeof path !== 'string') return path;
    const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
    return value !== undefined ? value : path;
};

const lang = detectLandingLang();
const translations = landingTexts[lang];

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const t = (key: string, options?: { [key: string]: string | number }): string => {
    let translation = getNestedTranslation(translations, key);
    if (translation === undefined || translation === null) {
        return key;
    }
    
    if (options) {
        Object.keys(options).forEach(optKey => {
            const regex = new RegExp(`\\{${optKey}\\}`, 'g');
            translation = translation.replace(regex, String(options[optKey]));
        });
    }
    
    return translation;
  };

  const value: LanguageContextType = {
    language: lang,
    setLanguage: setLandingLang,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

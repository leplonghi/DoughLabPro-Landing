
export type Language = 'pt' | 'en' | 'es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, options?: { [key: string]: string | number }) => string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quoteKey: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Screenshot {
  src: string;
  alt: string;
}

export interface MonetizationCard {
    id: 'free' | 'pro' | 'levain';
    titleKey: string;
    priceInfo: {
        mainPriceKey: string;
        periodKey?: string;
        secondaryInfoKey?: string;
    };
    headlineKey: string;
    subheadlineKey: string;
    featuresKeys: string[];
    fomoKey: string;
    ctaKey: string;
    isRecommended?: boolean;
    recommendationTextKey?: string;
    badgeKey?: string;
    lovedBadgeKey?: string;
    subscriberNoteKey?: string;
}
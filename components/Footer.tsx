
import React from 'react';
import { DoughLabLogo } from '../constants';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
             <div className="flex flex-col items-start">
                <DoughLabLogo />
                <p className="mt-4 text-sm text-text-subtle max-w-xs">
                    {t('hero_tagline')}
                </p>
             </div>
             <div className="flex flex-col md:items-end gap-4">
                 <a href="https://app.doughlabpro.com" className="text-primary font-bold hover:underline">
                     {t('footer_cta')}
                 </a>
                 <span className="text-text-subtle text-sm">
                     {t('footer_contact')}
                 </span>
             </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
             {t('footer_copyright', { year: currentYear.toString() })}
            </p>
            <div className="flex gap-6">
                <a href="#terms-of-use" className="text-xs text-gray-400 hover:text-text-main transition-colors">{t('footer_terms')}</a>
                <a href="#privacy-policy" className="text-xs text-gray-400 hover:text-text-main transition-colors">{t('footer_privacy')}</a>
                <a href="#affiliate-disclosure" className="text-xs text-gray-400 hover:text-text-main transition-colors">{t('footer_affiliate')}</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CtaSection = () => {
  const { t } = useLanguage();
  return (
    <section id="final-cta" className="py-20 sm:py-28 bg-text-main text-white text-center">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6">
          {t('cta_title')}
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            {t('cta_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://app.doughlabpro.com"
            className="w-full sm:w-auto inline-block bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-primary/20"
          >
            {t('cta_primary')}
          </a>
           <a
            href="#pricing"
            className="w-full sm:w-auto inline-block bg-transparent border border-gray-600 hover:bg-white/5 text-white font-semibold py-4 px-10 rounded-lg transition-colors"
          >
            {t('cta_secondary')}
          </a>
        </div>
        <p className="text-sm text-gray-500">{t('cta_micro')}</p>
      </div>
    </section>
  );
};

export default CtaSection;

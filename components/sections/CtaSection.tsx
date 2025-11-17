import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CtaSection = () => {
  const { t } = useLanguage();
  return (
    <section id="final-cta" className="relative bg-secondary dark:bg-dark-card/50 overflow-hidden py-20 sm:py-28">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_farthest-side,rgba(107,203,62,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_farthest-side,rgba(107,203,62,0.1),rgba(15,19,26,0))]"></div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-text dark:text-dark-text tracking-tight max-w-4xl mx-auto">
          {t('final.title')}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-dark-text-secondary">
            {t('final.subtitle')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-bg"
          >
            {t('final.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

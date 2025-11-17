import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CtaSection = () => {
  const { t } = useLanguage();
  return (
    <section id="final-cta" className="relative bg-secondary/50 overflow-hidden py-20 sm:py-28">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_farthest-side,rgba(107,203,62,0.15),rgba(255,255,255,0))]"></div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight max-w-4xl mx-auto">
          {t('final_title')}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-subtle">
            {t('final_subtitle')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            {t('final_cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
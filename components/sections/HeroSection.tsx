
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { HERO_BACKGROUND_IMAGE } from '../../constants';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white text-text-main overflow-hidden">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
             {/* Micro trust element */}
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary border border-gray-200">
              <p className="text-xs font-semibold text-text-subtle uppercase tracking-wider">{t('hero_tagline')}</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight" data-i18n="hero_title">
              {t('hero_title')}
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-text-subtle">
              {t('hero_subtitle')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://app.doughlabpro.com"
                className="w-full sm:w-auto inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white text-center"
              >
                {t('hero_cta')}
              </a>
               <a
                href="#comparison"
                className="w-full sm:w-auto inline-block bg-white border border-gray-300 hover:bg-gray-50 text-text-main font-medium py-3 px-8 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-center"
              >
                {t('hero_secondary_cta')}
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
              <img
                src={HERO_BACKGROUND_IMAGE.src}
                alt={t(HERO_BACKGROUND_IMAGE.altKey)}
                className="rounded-lg shadow-2xl w-full max-w-md h-auto object-cover aspect-[4/3] border-4 border-gray-100"
                loading="eager"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

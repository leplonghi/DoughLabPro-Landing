import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { HERO_BACKGROUND_IMAGE } from '../../constants';

const HeroSection = () => {
  const { t } = useLanguage();

  const bullets = [
    'hero_bullet_1',
    'hero_bullet_2',
    'hero_bullet_3',
  ];

  return (
    <section className="relative bg-white text-text-main overflow-hidden border-b border-gray-100">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-text-main">
              {t('hero_title')}
            </h1>

            <p className="text-lg sm:text-xl text-text-subtle mb-8 leading-relaxed max-w-lg">
              {t('hero_subtitle')}
            </p>

            <ul className="space-y-3 mb-10">
              {bullets.map((key) => (
                <li key={key} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-subtle font-medium">{t(key)}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <a
                href="https://app.doughlabpro.com"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-primary hover:bg-primary-hover text-white font-bold py-3.5 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/30"
              >
                {t('hero_cta_primary')}
              </a>
               <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-text-main font-bold py-3.5 px-8 rounded-lg transition-all"
              >
                {t('hero_cta_secondary')}
              </a>
            </div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              {t('hero_microcopy')}
            </p>
          </div>
          <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 scale-105 z-0"></div>
              <img
                src={HERO_BACKGROUND_IMAGE.src}
                alt={t(HERO_BACKGROUND_IMAGE.altKey)}
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-gray-200 z-10 aspect-[4/3]"
                loading="eager"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

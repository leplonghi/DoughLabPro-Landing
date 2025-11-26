import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const FomoSection = () => {
  const { t } = useLanguage();
  
  const bullets = [
      'fomo_bullet_1',
      'fomo_bullet_2',
      'fomo_bullet_3',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-secondary rounded-2xl p-8 sm:p-12 border border-gray-200 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-main mb-6">
                {t('fomo_title')}
            </h2>
            <p className="text-lg text-text-subtle mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('fomo_text')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 mb-10">
                {bullets.map(key => (
                    <div key={key} className="flex items-center justify-center text-text-main font-medium">
                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        {t(key)}
                    </div>
                ))}
            </div>
            
            <p className="text-sm text-text-subtle italic opacity-80">
                {t('fomo_micro')}
            </p>
        </div>
      </div>
    </section>
  );
};

export default FomoSection;

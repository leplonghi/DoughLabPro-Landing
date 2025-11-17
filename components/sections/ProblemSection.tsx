

import React from 'react';
import { PROMISE_IMAGE } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';

const ProblemSection = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
                    {t('howItWorks.title')}
                </h2>
                <p className="mt-4 text-lg text-text-subtle">
                    {t('howItWorks.copy')}
                </p>
            </div>
             <div className="flex justify-center">
                 <img 
                  src={PROMISE_IMAGE.src} 
                  alt={t(PROMISE_IMAGE.altKey)}
                  className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-video max-w-lg mx-auto"
                  loading="lazy"
                  decoding="async"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
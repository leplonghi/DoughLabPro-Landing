
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const AiSection = () => {
  const { t } = useLanguage();
  const exampleKeys = ['aiSection.example_q1', 'aiSection.example_q2', 'aiSection.example_q3'];

  return (
    <section id="ai-assistant" className="py-20 sm:py-28 bg-secondary dark:bg-dark-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
                    {t('aiSection.title')}
                </h2>
                <p className="mt-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
                    {t('aiSection.copy')}
                </p>
                 <p className="mt-6 font-semibold text-light-text dark:text-dark-text">
                    {t('aiSection.fomo')}
                </p>
            </div>
            <div>
                <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-4 text-center lg:text-left">
                  {t('aiSection.examplesTitle')}
                </h3>
                <div className="space-y-4">
                  {exampleKeys.map(key => (
                    <div key={key} className="bg-primary/10 p-4 rounded-lg rounded-bl-none">
                       <p className="text-primary font-medium">{t(key)}</p>
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;

import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CalculatorSection = () => {
  const { t } = useLanguage();

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
            {t('calculator.title')}
          </h2>
          <p className="mt-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
            {t('calculator.summary')}
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-secondary dark:bg-dark-card/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-3">
                    {t('calculator.guided.title')}
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {t('calculator.guided.description')}
                </p>
            </div>
            <div className="bg-secondary dark:bg-dark-card/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-3">
                    {t('calculator.free.title')}
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {t('calculator.free.description')}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;

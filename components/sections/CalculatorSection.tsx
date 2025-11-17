import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CalculatorSection = () => {
  const { t } = useLanguage();

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            {t('calculator_title')}
          </h2>
          <p className="mt-4 text-lg text-text-subtle">
            {t('calculator_summary')}
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-secondary/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-text-main mb-3">
                    {t('calculator_guided_title')}
                </h3>
                <p className="text-text-subtle">
                    {t('calculator_guided_description')}
                </p>
            </div>
            <div className="bg-secondary/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-text-main mb-3">
                    {t('calculator_free_title')}
                </h3>
                <p className="text-text-subtle">
                    {t('calculator_free_description')}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
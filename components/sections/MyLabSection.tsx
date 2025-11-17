import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const MyLabSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mylab" className="py-20 sm:py-28 bg-secondary dark:bg-dark-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
            {t('myLab.title')}
          </h2>
          <p className="mt-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
            {t('myLab.summary')}
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
            <ul className="space-y-6">
                {(t('myLab.features') as unknown as string[]).map((feature: string) => (
                    <li key={feature} className="flex items-start text-left text-lg">
                        <CheckIcon />
                        <span className="text-light-text-secondary dark:text-dark-text-secondary">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default MyLabSection;

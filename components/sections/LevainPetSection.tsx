import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const LevainPetSection = () => {
  const { t } = useLanguage();
  const bulletsString = t('pricing_plans_levain_features');
  let bullets: string[] = [];
  if (bulletsString && bulletsString.startsWith('[')) {
    try {
        bullets = JSON.parse(bulletsString);
    } catch(e) {
        console.error("Failed to parse levain pet bullets", e);
    }
  }

  return (
    <section id="levain-pet" className="py-20 sm:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            {t('pricing_plans_levain_title')}
          </h2>
          <p className="mt-4 text-lg text-text-subtle">
            {t('pricing_plans_levain_headline')}
          </p>
        </div>

        <div className="mt-12 max-w-md mx-auto">
            <ul className="space-y-4">
                {bullets.map((bullet: string) => (
                    <li key={bullet} className="flex items-start text-left">
                        <CheckIcon />
                        <span className="text-text-subtle">
                            {bullet}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-text-main italic max-w-2xl mx-auto">
            “{t('myLab_summary')}”
          </p>
          <div className="mt-8">
             <a
                href="#pricing"
                className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                {t('pricing_plans_levain_cta')}
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevainPetSection;
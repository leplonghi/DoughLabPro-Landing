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
    <section id="levain-pet" className="py-20 sm:py-28 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:flex justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/doughlabpro-app.firebasestorage.app/o/assets%2FLevain%20PET.png?alt=media&token=9f204c85-8d5b-4b5d-8645-e4566b7ede27"
              alt={t('levain_imageAlt')}
              className="rounded-lg shadow-2xl w-full max-w-md h-auto object-cover aspect-[4/3] border-4 border-white"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
              {t('levain_title')}
            </h2>
            <p className="mt-4 text-lg text-text-subtle max-w-xl mx-auto lg:mx-0">
              {t('levain_headline')}
            </p>
            <div className="mt-8">
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
             <div className="mt-10">
                 <a
                    href="#pricing"
                    className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                  >
                    {t('pricing_plans_levain_cta')}
                  </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevainPetSection;
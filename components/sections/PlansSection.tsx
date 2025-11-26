import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const PlansSection = () => {
  const { t } = useLanguage();
  
  // Helper to safely parse or use array
  const getFeatures = (key: string): string[] => {
      const val = t(key) as unknown;
      if (Array.isArray(val)) {
          return val as string[];
      }
      // Return empty array if translation is not an array (e.g. loading state returning key string)
      return []; 
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            {t('plans_title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* FREE */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative">
                <h3 className="text-xl font-bold text-text-main mb-4">{t('plan_free_title')}</h3>
                <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-text-main">{t('plan_free_price')}</span>
                    <span className="text-text-subtle ml-1">{t('plan_free_period')}</span>
                </div>
                <p className="text-sm text-text-subtle mb-8 italic">{t('plan_free_micro')}</p>
                <ul className="space-y-4 mb-8">
                    {getFeatures('plan_free_features').map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-text-subtle">
                            <CheckIcon />
                            {feature}
                        </li>
                    ))}
                </ul>
                <a href="https://app.doughlabpro.com" className="block w-full py-3 px-6 text-center rounded-lg border-2 border-gray-200 text-text-main font-bold hover:bg-gray-50 transition-colors">
                    {t('hero_cta_primary')}
                </a>
            </div>

            {/* PRO MONTHLY */}
            <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-xl relative transform scale-105 z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                </div>
                <h3 className="text-xl font-bold text-text-main mb-4">{t('plan_pro_monthly_title')}</h3>
                <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-text-main">{t('plan_pro_monthly_price')}</span>
                    <span className="text-text-subtle ml-1">{t('plan_pro_monthly_period')}</span>
                </div>
                <p className="text-sm text-text-subtle mb-8 italic">{t('plan_pro_monthly_micro')}</p>
                 <ul className="space-y-4 mb-8">
                    {getFeatures('plan_pro_features').map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-text-main font-medium">
                            <CheckIcon />
                            {feature}
                        </li>
                    ))}
                </ul>
                <a href="https://app.doughlabpro.com" className="block w-full py-3 px-6 text-center rounded-lg bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
                    {t('plan_cta_upgrade')}
                </a>
            </div>

            {/* PRO ANNUAL */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative">
                 <h3 className="text-xl font-bold text-text-main mb-4">{t('plan_pro_annual_title')}</h3>
                <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-text-main">{t('plan_pro_annual_price')}</span>
                    <span className="text-text-subtle ml-1">{t('plan_pro_annual_period')}</span>
                </div>
                <p className="text-sm text-green-600 font-semibold mb-8">{t('plan_pro_annual_micro')}</p>
                 <ul className="space-y-4 mb-8 opacity-75">
                    <li className="text-sm text-text-subtle italic">Includes all Pro features</li>
                    <li className="text-sm text-text-subtle italic">Best value for serious bakers</li>
                </ul>
                <a href="https://app.doughlabpro.com" className="block w-full py-3 px-6 text-center rounded-lg border-2 border-gray-200 text-text-main font-bold hover:bg-gray-50 transition-colors">
                    {t('plan_cta_upgrade')}
                </a>
            </div>
        </div>

        <div className="mt-16 text-center">
            <a href="#comparison" className="inline-flex items-center text-primary font-bold hover:underline">
                {t('plan_cta_compare')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
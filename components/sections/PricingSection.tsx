import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={`w-5 h-5 text-primary mr-3 flex-shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"></path>
    </svg>
);

const PricingSection = () => {
    const { t } = useLanguage();
    const planOrder = ['free', 'pro', 'levain'];

    return (
        <section id="pricing" className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
                        {t('pricing_title')}
                    </h2>
                    <p className="mt-4 text-lg text-text-subtle">
                        {t('pricing_subtitle')}
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {planOrder.map(planKey => {
                        const isRecommended = t(`pricing_plans_${planKey}_isRecommended`) === 'true';
                        const featuresString = t(`pricing_plans_${planKey}_features`);
                        let features: string[] = [];
                        if (featuresString && featuresString.startsWith('[')) {
                            try {
                                features = JSON.parse(featuresString);
                            } catch(e) {
                                console.error(`Failed to parse features for plan ${planKey}`, e);
                            }
                        }

                        return (
                            <div 
                                key={planKey} 
                                className={`relative flex flex-col p-8 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 ${
                                    isRecommended 
                                        ? 'bg-white border-2 border-primary' 
                                        : 'bg-secondary'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-primary">
                                            {t(`pricing_plans_${planKey}_recommendation`)}
                                        </span>
                                    </div>
                                )}
                                
                                <h3 className="text-2xl font-bold text-center text-text-main">{t(`pricing_plans_${planKey}_title`)}</h3>
                                
                                <div className="mt-4 text-center">
                                    <span className="text-4xl font-extrabold text-text-main tracking-tight">{t(`pricing_plans_${planKey}_price`)}</span>
                                    <span className="text-base font-medium text-text-subtle">{t(`pricing_plans_${planKey}_period`)}</span>
                                </div>
                                
                                <p className="mt-4 text-center text-text-subtle h-12">{t(`pricing_plans_${planKey}_headline`)}</p>

                                <ul className="mt-8 space-y-4 text-left flex-grow">
                                    {features.map((feature: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <CheckIcon />
                                            <span className="text-text-subtle">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8">
                                    <a 
                                        href="#final-cta"
                                        className={`w-full text-center inline-block py-3 px-8 rounded-lg font-bold transition-all transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                                            isRecommended 
                                                ? 'bg-primary hover:bg-primary-hover text-white focus-visible:ring-primary focus-visible:ring-offset-white' 
                                                : 'bg-white text-primary hover:bg-primary/10 border border-primary focus-visible:ring-primary focus-visible:ring-offset-secondary'
                                        }`}
                                    >
                                        {t(`pricing_plans_${planKey}_cta`)}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
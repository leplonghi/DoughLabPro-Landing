import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={`w-5 h-5 text-primary mr-3 flex-shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"></path>
    </svg>
);

const PricingSection = () => {
    const { t } = useLanguage();
    const plansData = t('pricing.plans') as any;
    const planOrder = ['free', 'pro', 'levain'];

    return (
        <section id="pricing" className="py-20 sm:py-28 bg-white dark:bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
                        {t('pricing.title')}
                    </h2>
                    <p className="mt-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {planOrder.map(planKey => {
                        const plan = plansData[planKey];
                        const isRecommended = plan.isRecommended;

                        return (
                            <div 
                                key={plan.title} 
                                className={`relative flex flex-col p-8 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 ${
                                    isRecommended 
                                        ? 'bg-white dark:bg-dark-card border-2 border-primary' 
                                        : 'bg-secondary dark:bg-dark-card/50'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-primary">
                                            {plan.recommendation}
                                        </span>
                                    </div>
                                )}
                                
                                <h3 className="text-2xl font-bold text-center text-light-text dark:text-dark-text">{plan.title}</h3>
                                
                                <div className="mt-4 text-center">
                                    <span className="text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight">{plan.price}</span>
                                    {plan.period && <span className="text-base font-medium text-light-text-secondary dark:text-dark-text-secondary">{plan.period}</span>}
                                </div>
                                
                                <p className="mt-4 text-center text-light-text-secondary dark:text-dark-text-secondary h-12">{plan.headline}</p>

                                <ul className="mt-8 space-y-4 text-left flex-grow">
                                    {plan.features.map((feature: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <CheckIcon className={index === 0 && (planKey === 'pro' || planKey === 'levain') ? 'opacity-0' : ''}/>
                                            <span className="text-light-text-secondary dark:text-dark-text-secondary">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8">
                                    <a 
                                        href="#final-cta"
                                        className={`w-full text-center inline-block py-3 px-8 rounded-lg font-bold transition-all transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-bg ${
                                            isRecommended 
                                                ? 'bg-primary hover:bg-primary-hover text-white focus-visible:ring-primary' 
                                                : 'bg-white dark:bg-dark-bg text-primary hover:bg-primary/10 dark:hover:bg-primary/10 border border-primary focus-visible:ring-primary'
                                        }`}
                                    >
                                        {plan.cta}
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
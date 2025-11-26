import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
    </svg>
);

const DashIcon = () => (
    <div className="w-4 h-0.5 bg-gray-300 mx-auto rounded-full"></div>
);

interface ComparisonRow {
    featureKey: string;
    freeKey: string;
    proKey: string;
    isCheckFree?: boolean;
    isCheckPro?: boolean;
}

const ComparisonSection = () => {
    const { t } = useLanguage();

    const rows: ComparisonRow[] = [
        { featureKey: 'comp_feature_calc', freeKey: 'comp_free_calc', proKey: 'comp_pro_calc' },
        { featureKey: 'comp_feature_styles', freeKey: 'comp_free_styles', proKey: 'comp_pro_styles' },
        { featureKey: 'comp_feature_levain', freeKey: 'comp_free_levain', proKey: 'comp_pro_levain' },
        { featureKey: 'comp_feature_bakes', freeKey: 'comp_free_bakes', proKey: 'comp_pro_bakes' },
        { featureKey: 'comp_feature_exports', freeKey: 'comp_free_exports', proKey: 'comp_pro_exports' },
        { featureKey: 'comp_feature_insights', freeKey: 'comp_free_insights', proKey: 'comp_pro_insights' },
        { featureKey: 'comp_feature_ai', freeKey: 'comp_free_ai', proKey: 'comp_pro_ai' },
        { featureKey: 'comp_feature_ads', freeKey: 'comp_free_ads', proKey: 'comp_pro_ads' },
    ];

    return (
        <section id="comparison" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
                        {t('comparison_title')}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50/50">
                        <div className="p-4 sm:p-6 font-semibold text-text-subtle text-sm sm:text-base">Feature</div>
                        <div className="p-4 sm:p-6 text-center font-bold text-text-main text-sm sm:text-xl">{t('plan_free_title')}</div>
                        <div className="p-4 sm:p-6 text-center font-bold text-primary text-sm sm:text-xl">{t('plan_pro_monthly_title').replace(' Monthly','')}</div>
                    </div>
                    
                    {rows.map((row, index) => (
                        <div key={index} className="grid grid-cols-3 border-b border-gray-100 last:border-0 hover:bg-gray-50/30 transition-colors">
                            <div className="p-4 sm:p-6 flex items-center text-xs sm:text-sm font-medium text-text-main">
                                {t(row.featureKey)}
                            </div>
                            
                            <div className="p-4 sm:p-6 flex items-center justify-center text-xs sm:text-sm text-text-subtle text-center border-l border-gray-50">
                                {row.isCheckFree ? <CheckIcon /> : t(row.freeKey)}
                            </div>

                            <div className="p-4 sm:p-6 flex items-center justify-center text-xs sm:text-sm font-semibold text-text-main text-center bg-primary/5 border-l border-primary/10">
                                {row.isCheckPro ? <CheckIcon /> : t(row.proKey)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;

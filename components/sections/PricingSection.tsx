
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
    </svg>
);

const DashIcon = () => (
    <div className="w-5 h-0.5 bg-gray-200 rounded-full"></div>
);

interface ComparisonRow {
    key: string;
    free: string | boolean;
    pro: string | boolean;
    translate?: boolean;
}

const ComparisonSection = () => {
    const { t } = useLanguage();

    const rows: ComparisonRow[] = [
        { key: 'levain', free: 'comparison_feature_levain_limit', pro: 'comparison_feature_levain_unlimited' },
        { key: 'styles', free: 'comparison_feature_styles_limit', pro: 'comparison_feature_styles_all' },
        { key: 'log', free: 'comparison_feature_log_basic', pro: 'comparison_feature_mylab_full' },
        { key: 'history', free: '1 saved batch', pro: 'Unlimited history', translate: false },
        { key: 'export', free: false, pro: 'comparison_feature_export' },
        { key: 'ai', free: false, pro: 'comparison_feature_ai' },
        { key: 'insights', free: false, pro: 'comparison_feature_insights' },
        { key: 'alerts', free: false, pro: 'comparison_feature_alerts' },
        { key: 'sync', free: false, pro: 'comparison_feature_sync' },
        { key: 'analytics', free: false, pro: 'comparison_feature_analytics' },
        { key: 'compare', free: false, pro: 'comparison_feature_compare' },
        { key: 'consistency', free: false, pro: 'comparison_feature_consistency' },
    ];

    return (
        <section id="comparison" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
                        {t('comparison_title')}
                    </h2>
                    <p className="mt-4 text-lg text-text-subtle">
                        {t('comparison_subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                        <div className="p-6"></div>
                        <div className="p-6 text-center font-bold text-xl text-text-main">{t('comparison_free_title')}</div>
                        <div className="p-6 text-center font-bold text-xl text-primary">{t('comparison_pro_title')}</div>
                    </div>
                    
                    {rows.map((row, index) => (
                        <div key={index} className={`grid grid-cols-3 items-center border-b border-gray-100 last:border-0 ${index % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}`}>
                            <div className="p-4 sm:pl-8 text-sm font-medium text-text-subtle hidden sm:block">
                                {row.pro && row.pro !== true ? (row.translate === false ? row.pro : t(row.pro as string)) : ''}
                            </div>
                            {/* Mobile label fallback - visually simplified */}
                            <div className="p-4 sm:pl-8 text-sm font-medium text-text-subtle sm:hidden col-span-3 bg-gray-50 border-b border-gray-100">
                                {row.pro && row.pro !== true ? (row.translate === false ? row.pro : t(row.pro as string)) : ''}
                            </div>

                            {/* Free Col */}
                            <div className="p-4 flex justify-center col-span-1.5 sm:col-span-1 border-r border-gray-50">
                                {row.free === false ? (
                                    <DashIcon />
                                ) : (
                                    <span className="text-sm text-text-subtle text-center">
                                         {row.translate === false ? row.free : t(row.free as string)}
                                    </span>
                                )}
                            </div>

                            {/* Pro Col */}
                            <div className="p-4 flex justify-center col-span-1.5 sm:col-span-1 bg-primary/5">
                                {row.pro ? (
                                    row.pro === true || (row.pro as string).startsWith('comparison') ? <CheckIcon /> : <span className="text-sm font-semibold text-text-main">{row.translate === false ? row.pro : t(row.pro as string)}</span>
                                ) : (
                                    <DashIcon />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a 
                        href="https://app.doughlabpro.com"
                        className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-10 rounded-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        {t('comparison_cta')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
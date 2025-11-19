
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CalcIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const LabIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);

const PetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const UpgradeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const ValuePropsSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <CalcIcon />, titleKey: 'value_props_calc_title', descKey: 'value_props_calc_desc' },
    { icon: <LabIcon />, titleKey: 'value_props_mylab_title', descKey: 'value_props_mylab_desc' },
    { icon: <PetIcon />, titleKey: 'value_props_levain_title', descKey: 'value_props_levain_desc' },
    { icon: <UpgradeIcon />, titleKey: 'value_props_improve_title', descKey: 'value_props_improve_desc' },
  ];

  return (
    <section id="value-props" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            {t('value_props_title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-text-main mb-2">{t(f.titleKey)}</h3>
              <p className="text-text-subtle text-sm leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;

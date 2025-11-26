import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
      { key: 'how_step1', num: '01' },
      { key: 'how_step2', num: '02' },
      { key: 'how_step3', num: '03' },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            {t('how_title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                     {/* Connector Line */}
                    {index !== steps.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>
                    )}
                    
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-primary/20 text-primary flex items-center justify-center text-xl font-bold shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-white to-gray-50">
                        {step.num}
                    </div>
                    <p className="text-lg text-text-subtle font-medium leading-relaxed px-4">
                        {t(step.key)}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

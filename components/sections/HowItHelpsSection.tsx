import React from 'react';
// FIX: Corrected import to use FEATURES_LIST_DATA as exported from constants.
import { FEATURES_LIST_DATA } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';

const HowItHelpsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            {t('features_title')}
          </h2>
           <p className="mt-4 max-w-3xl mx-auto text-lg text-text-subtle">
            {t('features_subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* FIX: Use FEATURES_LIST_DATA as imported. */}
          {FEATURES_LIST_DATA.map((feature) => {
            // FIX: Corrected key for identifying assistant feature to match constant data.
            const isAssistant = feature.titleKey === 'features_list_assistant_title';
            return (
              <div 
                key={feature.titleKey} 
                className={`bg-secondary/50 p-6 rounded-lg text-left ${isAssistant ? 'relative group' : ''}`}
              >
                <div className="flex items-center justify-start h-12 w-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.Icon className="h-6 w-6 m-3" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-text-subtle">
                  {t(feature.descriptionKey)}
                </p>

                {isAssistant && (
                   <div 
                     role="tooltip" 
                     className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                   >
                     {t('features_list_assistant_tooltip')}
                     <svg className="absolute text-gray-900 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
                       <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
                     </svg>
                   </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItHelpsSection;
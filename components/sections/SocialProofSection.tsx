import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const SocialProofSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
            {t('social_label')}
        </span>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl font-medium text-text-subtle leading-relaxed">
            "{t('social_text')}"
        </p>
      </div>
    </section>
  );
};

export default SocialProofSection;

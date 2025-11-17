
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const AuthorityStripSection = () => {
  const { t } = useLanguage();
  return (
    <section id="authority" className="py-12 bg-secondary dark:bg-dark-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-light-text dark:text-dark-text tracking-tight">
            {t('authorityStrip.headline')}
          </h2>
           <p className="mt-4 text-md text-light-text-secondary dark:text-dark-text-secondary">
            {t('authorityStrip.copy')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorityStripSection;

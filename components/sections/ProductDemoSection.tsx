
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const ProductDemoSection = () => {
  const { t } = useLanguage();

  const modules = [
      { titleKey: 'demo_calc_title', descKey: 'demo_calc_desc' },
      { titleKey: 'demo_mylab_title', descKey: 'demo_mylab_desc' },
      { titleKey: 'demo_levain_title', descKey: 'demo_levain_desc' },
      { titleKey: 'demo_library_title', descKey: 'demo_library_desc' },
  ];

  return (
    <section id="demo" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            {t('demo_title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((m, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border-l-4 border-primary shadow-sm">
                    <h3 className="text-xl font-bold text-text-main mb-2">{t(m.titleKey)}</h3>
                    <p className="text-text-subtle">{t(m.descKey)}</p>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center">
             <a
                href="https://app.doughlabpro.com"
                className="inline-block bg-text-main hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                {t('demo_cta')}
              </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDemoSection;

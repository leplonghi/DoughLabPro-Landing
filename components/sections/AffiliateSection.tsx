
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const AffiliateSection = () => {
  const { t } = useLanguage();

  const categories = [
      { 
          titleKey: 'affiliate_cat_tools', 
          items: ['Digital scale', 'Bench scraper', 'Dough containers', 'Infrared thermometer'] 
      },
      { 
          titleKey: 'affiliate_cat_surfaces', 
          items: ['Pizza steel', 'Pizza stone', 'Portable pizza oven'] 
      },
      { 
          titleKey: 'affiliate_cat_flours', 
          items: ['Type 00', 'High-protein flour'] 
      },
      { 
          titleKey: 'affiliate_cat_books', 
          items: ['Flour Water Salt Yeast', 'The Pizza Bible'] 
      },
  ];

  return (
    <section id="affiliates" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            {t('affiliate_title')}
          </h2>
          <p className="mt-4 text-lg text-text-subtle">
             {t('affiliate_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
                <div key={i} className="flex flex-col h-full">
                    <h3 className="text-lg font-bold text-text-main mb-4 border-b pb-2 border-gray-100">{t(cat.titleKey)}</h3>
                    <ul className="space-y-4 flex-grow">
                        {cat.items.map((item, j) => (
                            <li key={j} className="group">
                                <div className="flex items-center justify-between bg-secondary/50 p-3 rounded hover:bg-secondary transition-colors">
                                    <span className="text-sm font-medium text-text-subtle">{item}</span>
                                    <a href="#" className="text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                                        {t('affiliate_btn')}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;

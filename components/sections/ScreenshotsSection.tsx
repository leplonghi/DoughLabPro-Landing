
import React from 'react';
import { SCREENSHOTS } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';

const ScreenshotsSection = () => {
  const { t } = useLanguage();
  return (
    <section id="screenshots" className="py-20 sm:py-28 bg-secondary dark:bg-dark-card/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
            {t('screenshots.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-light-text-secondary dark:text-dark-text-secondary">
            {t('screenshots.subtitle')}
          </p>
        </div>
      </div>
      
      {/* Screenshot Carousel */}
      <div className="relative">
        <div className="flex animate-scroll-infinite space-x-8" style={{ animationDuration: '40s' }}>
          {[...SCREENSHOTS, ...SCREENSHOTS].map((screenshot, index) => (
            <div key={index} className="flex-shrink-0 w-80">
              <img 
                src={screenshot.src} 
                alt={screenshot.alt} 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[9/16] border-4 border-white dark:border-dark-bg"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Tailwind doesn't support this animation out-of-the-box, so we add it here. */}
      <style>{`
        @keyframes scroll-infinite {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite linear infinite;
        }
      `}</style>

    </section>
  );
};

export default ScreenshotsSection;

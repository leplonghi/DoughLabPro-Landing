
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-20 bg-text-main text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 rounded border border-gray-600">
              <p className="text-xs font-mono text-gray-300 uppercase tracking-widest">MISSION</p>
            </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            {t('mission_title')}
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
            <p>
                {t('mission_p1')}
            </p>
            <p>
                {t('mission_p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const CommunitySection = () => {
  const { t } = useLanguage();
  const topicsString = t('community_topics');
  let topics: string[] = [];
  if (topicsString && topicsString.startsWith('[')) {
    try {
        topics = JSON.parse(topicsString);
    } catch (e) {
        console.error("Failed to parse community topics", e);
    }
  }


  return (
    <section id="community" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            {t('community_title')}
          </h2>
          <p className="mt-4 text-lg text-text-subtle">
            {t('community_summary')}
          </p>
        </div>
         <div className="mt-12 max-w-3xl mx-auto">
            <ul className="space-y-4">
                {topics.map((topic: string) => (
                    <li key={topic} className="flex items-start text-left">
                        <CheckIcon />
                        <span className="text-text-subtle">
                            {topic}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
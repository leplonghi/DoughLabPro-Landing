import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const ForWhomSection = () => {
  const { t } = useLanguage();
  const profilesString = t('forWhom_profiles');
  let profiles: string[] = [];
  if (profilesString && profilesString.startsWith('[')) {
    try {
      profiles = JSON.parse(profilesString);
    } catch (e) {
      console.error("Failed to parse profiles", e);
    }
  }

  return (
    <section id="for-whom" className="py-20 sm:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            {t('forWhom_title')}
          </h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
            <ul className="space-y-4">
                {profiles.map((profile: string) => (
                    <li key={profile} className="flex items-start text-left text-lg">
                        <CheckIcon />
                        <span className="text-text-subtle">
                            {profile}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
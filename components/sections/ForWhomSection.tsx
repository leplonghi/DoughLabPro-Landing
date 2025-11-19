import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const ShopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const icons = {
    home: <HomeIcon />,
    book: <BookIcon />,
    shop: <ShopIcon />,
};

interface Profile {
    icon: keyof typeof icons;
    title: string;
    description: string;
}

const ForWhomSection = () => {
  const { t } = useLanguage();
  const profilesString = t('forWhom_profiles');
  let profiles: Profile[] = [];
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
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {profiles.map((profile) => (
                <div key={profile.title} className="bg-white p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="flex justify-center mb-6">
                        <div className="bg-primary/10 p-4 rounded-full">
                            {icons[profile.icon]}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-main">{profile.title}</h3>
                    <p className="mt-2 text-text-subtle">{profile.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;


import React from 'react';
import { DoughLabLogo, FOOTER_LINKS_DATA } from '../constants';
import { useLanguage } from '../hooks/useLanguage';

// Social Icons
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.333.57-.523 1.234-.523 1.947 0 1.61.82 3.028 2.068 3.868a4.644 4.644 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.738 4.566 4.658 4.658 0 0 1-2.104.08 4.66 4.66 0 0 0 4.35 3.234 9.348 9.348 0 0 1-5.786 1.995c-.376 0-.747-.022-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z"></path></svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
);
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
);


const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const getShareLinks = () => {
    if (typeof window === 'undefined') {
        return { twitter: '#', facebook: '#', linkedin: '#' };
    }
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    return {
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
    };
  };
  const shareLinks = getShareLinks();


  return (
    <footer className="bg-secondary border-t border-gray-200">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <DoughLabLogo />
          <p className="mt-4 max-w-md text-text-subtle">
            {t('footer_tagline')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS_DATA.map((link) => (
                <a 
                    key={link.key}
                    href={link.href}
                    className="text-sm text-text-subtle hover:text-primary transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                    {t(link.key)}
                </a>
            ))}
          </div>
          
          <div className="mt-8">
              <h4 className="text-sm font-semibold text-text-main mb-3">
                  {t('footer_share')}
              </h4>
              <div className="flex justify-center space-x-6">
                 <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={t('footer_shareOnTwitter')} className="text-gray-400 hover:text-primary transition-all duration-200 transform hover:scale-110 active:scale-100 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">
                     <TwitterIcon className="w-6 h-6" />
                 </a>
                 <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label={t('footer_shareOnFacebook')} className="text-gray-400 hover:text-primary transition-all duration-200 transform hover:scale-110 active:scale-100 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">
                     <FacebookIcon className="w-6 h-6" />
                 </a>
                 <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={t('footer_shareOnLinkedIn')} className="text-gray-400 hover:text-primary transition-all duration-200 transform hover:scale-110 active:scale-100 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">
                     <LinkedInIcon className="w-6 h-6" />
                 </a>
              </div>
          </div>

          <p className="mt-8 text-xs text-gray-400">
             {t('footer_copyright', { year: currentYear.toString() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
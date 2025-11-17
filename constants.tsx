import React from 'react';
// FIX: Import types for constants.
import type { Screenshot } from './types';

export const DoughLabLogo = ({ className }: { className?: string }) => (
  <div className={`flex items-center font-bold text-2xl ${className}`}>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2 text-primary"
      aria-hidden="true"
    >
      <path d="M20.0001 5.83331C18.8914 7.00164 18.3334 8.58498 18.3334 10.25C18.3334 11.915 18.8914 13.4983 20.0001 14.6666C21.1087 13.4983 21.6667 11.915 21.6667 10.25C21.6667 8.58498 21.1087 7.00164 20.0001 5.83331Z" fill="#6BCB3E"/>
      <path d="M28.0833 24.6667C28.0833 24.6667 26.5833 21.1667 20 21.1667C13.4167 21.1667 11.9167 24.6667 11.9167 24.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30.5833 29.5C30.5833 29.5 31.5833 25.75 20 25.75C8.41667 25.75 9.41667 29.5 9.41667 29.5C9.41667 29.5 11.9167 34.1667 20 34.1667C28.0833 34.1667 30.5833 29.5 30.5833 29.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-text-main">DoughLab <span className="text-primary">Pro</span></span>
  </div>
);

export const NAV_LINKS_DATA = [
  { href: '#for-whom', key: 'nav_forWhom' },
  { href: '#calculator', key: 'nav_calculator' },
  { href: '#mylab', key: 'nav_myLab' },
  { href: '#learn', key: 'nav_learn' },
  { href: '#pro-tools', key: 'nav_proTools' },
  { href: '#community', key: 'nav_community' },
  { href: '#pricing', key: 'nav_pricing' },
];

export const HERO_BACKGROUND_IMAGE = {
    src: "https://images.unsplash.com/photo-1619495764355-635a6a0b1dec?q=80&w=1287&auto=format&fit=crop&fm=webp",
    altKey: "hero_imageAlt"
};

export const FOOTER_LINKS_DATA = [
    { href: '#calculator', key: 'footer_links_calculator' },
    { href: '#learn', key: 'footer_links_learn' },
    { href: '#community', key: 'footer_links_community' },
    { href: '#mylab', key: 'footer_links_mylab' },
    { href: '#support', key: 'footer_links_support' },
    { href: '#privacy', key: 'footer_links_privacy' },
];
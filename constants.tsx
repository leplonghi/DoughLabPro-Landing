import React from 'react';
import type { Screenshot } from './types';

export const DoughLabLogo = ({ className }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/doughlabpro-app.firebasestorage.app/o/assets%2FDoughLabPro%20fbranco%20FINAL%20COMLETA.png?alt=media&token=0f160dc9-2e99-4f59-9eaa-9640e3437161"
      alt="DoughLab Pro Logo"
      className="h-10 w-auto"
    />
  </div>
);

export const NAV_LINKS_DATA = [
  { href: '#how-it-works', key: 'nav_how_it_works' },
  { href: '#features', key: 'nav_features' },
  { href: '#pricing', key: 'nav_pricing' },
  { href: '#faq', key: 'nav_faq' },
];

export const HERO_BACKGROUND_IMAGE = {
    src: "https://firebasestorage.googleapis.com/v0/b/doughlabpro-app.firebasestorage.app/o/IMAGENS%20LANDINGPAGE%2FFERMENTACAO%2001.jpeg?alt=media&token=45b16327-0728-485a-818b-375af7d05358",
    altKey: "hero_imageAlt"
};

export const FOOTER_LINKS_DATA = [
    { href: 'https://app.doughlabpro.com', key: 'footer_cta' },
];

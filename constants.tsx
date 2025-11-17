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

export const PROMISE_IMAGE = {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&fm=webp",
    altKey: "howItWorks_imageAlt"
};

const CalculatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);
const LabIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-2.387-.477a2 2 0 01-.547-1.806l.477-2.387a6 6 0 013.86-.517l.318-.158a6 6 0 003.86-.517l2.387.477a2 2 0 011.806.547a2 2 0 01.547 1.806l-.477 2.387a6 6 0 01-3.86.517l-.318.158a6 6 0 00-3.86.517l-2.387-.477a2 2 0 00-1.806-.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547 2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const BookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);
const AssistantIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
const PantryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l8 4 8-4" />
    </svg>
);
const OvenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014a16.533 16.533 0 011.636-1.282 1 1 0 011.33 1.33 16.533 16.533 0 01-1.282 1.636C12.5 7.5 9 8 10 10c1 2 2.657 3.657 2.657 3.657a8 8 0 015 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.343 12.343L6 15.687a8 8 0 0011.314 0L14.657 12.343" />
    </svg>
);

export const FEATURES_LIST_DATA = [
    {
        titleKey: 'features_list_calculator_title',
        descriptionKey: 'features_list_calculator_description',
        Icon: CalculatorIcon,
    },
    {
        titleKey: 'features_list_mylab_title',
        descriptionKey: 'features_list_mylab_description',
        Icon: LabIcon,
    },
    {
        titleKey: 'features_list_learn_title',
        descriptionKey: 'features_list_learn_description',
        Icon: BookIcon,
    },
    {
        titleKey: 'features_list_assistant_title',
        descriptionKey: 'features_list_assistant_description',
        Icon: AssistantIcon,
    },
    {
        titleKey: 'features_list_pantry_title',
        descriptionKey: 'features_list_pantry_description',
        Icon: PantryIcon,
    },
    {
        titleKey: 'features_list_oven_title',
        descriptionKey: 'features_list_oven_description',
        Icon: OvenIcon,
    },
];

export const SCREENSHOTS: Screenshot[] = [
    {
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&fm=webp",
        alt: "DoughLab Pro Calculator Interface",
    },
    {
        src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&fm=webp",
        alt: "MyLab Batch Logging Screen",
    },
    {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&fm=webp",
        alt: "Learn Section with Technical Guides",
    },
    {
        src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&fm=webp",
        alt: "Community Feed with Public Bakes",
    },
    {
        src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1472&auto=format&fit=crop&fm=webp",
        alt: "Levain Pet Starter Management",
    },
];

export const TESTIMONIALS_DATA = [
    {
        name: "Mariana Silva",
        roleKey: "socialProof_testimonials_mariana_role",
        avatar: "https://i.pravatar.cc/150?img=1",
        quoteKey: "socialProof_testimonials_mariana_quote",
    },
    {
        name: "John Baker",
        roleKey: "socialProof_testimonials_john_role",
        avatar: "https://i.pravatar.cc/150?img=2",
        quoteKey: "socialProof_testimonials_john_quote",
    },
    {
        name: "Carlos Pizzaiolo",
        roleKey: "socialProof_testimonials_carlos_role",
        avatar: "https://i.pravatar.cc/150?img=3",
        quoteKey: "socialProof_testimonials_carlos_quote",
    },
];

export const FAQ_ITEMS_KEYS_DATA = [
    {
        questionKey: "faq_items_q1_question",
        answerKey: "faq_items_q1_answer",
    },
    {
        questionKey: "faq_items_q2_question",
        answerKey: "faq_items_q2_answer",
    },
    {
        questionKey: "faq_items_q3_question",
        answerKey: "faq_items_q3_answer",
    },
    {
        questionKey: "faq_items_q4_question",
        answerKey: "faq_items_q4_answer",
    },
];

export const FOOTER_LINKS_DATA = [
    { href: '#calculator', key: 'footer_links_calculator' },
    { href: '#learn', key: 'footer_links_learn' },
    { href: '#community', key: 'footer_links_community' },
    { href: '#mylab', key: 'footer_links_mylab' },
    { href: '#support', key: 'footer_links_support' },
    { href: '#privacy', key: 'footer_links_privacy' },
];
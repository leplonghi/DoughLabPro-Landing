
import React, { useState, useEffect } from 'react';

const ArrowUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
);

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg transition-all duration-300 ease-in-out transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Go to top"
            style={{
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
        >
            <ArrowUpIcon />
        </button>
    );
};

export default ScrollToTopButton;

import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import SocialProofSection from './components/sections/SocialProofSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import ValuePropsSection from './components/sections/ValuePropsSection'; // Acts as Core Features
import PlansSection from './components/sections/PlansSection';
import ComparisonSection from './components/sections/PricingSection';
import FomoSection from './components/sections/FomoSection';
import FaqSection from './components/sections/FaqSection';
import CtaSection from './components/sections/CtaSection';
import LegalSection from './components/sections/LegalSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans text-text-main bg-white">
        <Header />
        <main>
          <HeroSection />
          <SocialProofSection />
          <HowItWorksSection />
          <ValuePropsSection />
          <PlansSection />
          <ComparisonSection />
          <FomoSection />
          <FaqSection />
          <CtaSection />
          <LegalSection />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}

export default App;

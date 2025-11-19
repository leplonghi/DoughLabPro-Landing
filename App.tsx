
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import ValuePropsSection from './components/sections/ValuePropsSection';
import ComparisonSection from './components/sections/PricingSection';
import MissionSection from './components/sections/MissionSection';
import ProductDemoSection from './components/sections/ProductDemoSection';
import AffiliateSection from './components/sections/AffiliateSection';
import FaqSection from './components/sections/FaqSection';
import LegalSection from './components/sections/LegalSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans text-text-main">
        <Header />
        <main>
          <HeroSection />
          <ValuePropsSection />
          <ComparisonSection />
          <MissionSection />
          <ProductDemoSection />
          <AffiliateSection />
          <FaqSection />
          <LegalSection />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}

export default App;

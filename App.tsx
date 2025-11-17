import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import ForWhomSection from './components/sections/ForWhomSection';
import CalculatorSection from './components/sections/CalculatorSection';
import MyLabSection from './components/sections/MyLabSection';
import LevainPetSection from './components/sections/LevainPetSection';
import LearnSection from './components/sections/PromiseSection';
import ProToolsSection from './components/sections/ProToolsSection';
import CommunitySection from './components/sections/CommunitySection';
import PricingSection from './components/sections/PricingSection';
import CtaSection from './components/sections/CtaSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans text-text-main">
        <Header />
        <main>
          <HeroSection />
          <ForWhomSection />
          <CalculatorSection />
          <MyLabSection />
          <LevainPetSection />
          <LearnSection />
          <ProToolsSection />
          <CommunitySection />
          <PricingSection />
          <CtaSection />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
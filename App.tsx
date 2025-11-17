import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import ForWhomSection from './components/sections/ForWhomSection';
import CalculatorSection from './components/sections/CalculatorSection';
import MyLabSection from './components/sections/MyLabSection';
import LearnSection from './components/sections/PromiseSection';
import ProToolsSection from './components/sections/ProToolsSection';
import CommunitySection from './components/sections/CommunitySection';
import PricingSection from './components/sections/PricingSection';
import CtaSection from './components/sections/CtaSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="font-sans text-light-text dark:text-dark-text transition-colors duration-300">
          <Header />
          <main>
            <HeroSection />
            <ForWhomSection />
            <CalculatorSection />
            <MyLabSection />
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
    </ThemeProvider>
  );
}

export default App;

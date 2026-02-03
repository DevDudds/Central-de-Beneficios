
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ShapeChange from './components/ShapeChange';
import FeatureTabs from './components/FeatureTabs';
import VersatilitySection from './components/VersatilitySection';
import TrustSection from './components/TrustSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LogoTicker from './components/LogoTicker';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ShapeChange />
        <FeatureTabs />
        <LogoTicker />
        <VersatilitySection />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

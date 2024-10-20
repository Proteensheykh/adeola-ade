import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';


function Home() {
  return (
    <div>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ContactSection />
    </div>
  );
}

export default Home;

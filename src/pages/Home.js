import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import ClientsSection from '../components/ClientsSection';


function Home() {
  return (
    <div>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ClientsSection />
      {/* <ServicesSection /> */}
      <ContactSection />
    </div>
  );
}

export default Home;

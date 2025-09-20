import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import BusinessSection from './components/sections/BusinessSection';
import SustainabilitySection from './components/sections/SustainabilitySection';
import NewsSection from './components/sections/NewsSection';
import CareersSection from './components/sections/CareersSection';
import Footer from './components/layout/Footer';

const App = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BusinessSection />
        <SustainabilitySection />
        <NewsSection />
        <CareersSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
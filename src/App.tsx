import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TopicsSection from './components/TopicsSection';
import ArchiveSection from './components/ArchiveSection';
import FeaturedSection from './components/FeaturedSection';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TopicsSection />
      <ArchiveSection />
      <FeaturedSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
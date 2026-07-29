import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import HomeTracksSection from '../components/home/HomeTracksSection';
import HomeBridgeSection from '../components/home/HomeBridgeSection';
import HomeServicesSection from '../components/home/HomeServicesSection';
import HomeProjectsCtaSection from '../components/home/HomeProjectsCtaSection';
import HomeCtaSection from '../components/home/HomeCtaSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <HomeTracksSection />
        <HomeBridgeSection />
        <HomeServicesSection />
        <HomeProjectsCtaSection />
        <HomeCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

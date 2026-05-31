import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import PainStats from './components/PainStats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Architecture from './components/Architecture';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

export default function App() {
  const Connector = () => (
    <div className="narrative-connector">
      <div className="dashed-line"></div>
      <div className="accent-dot"></div>
    </div>
  );

  return (
    <div className="app-container">
      <video autoPlay muted loop playsInline className="global-bg-video">
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4" type="video/mp4" />
      </video>
      <div className="global-bg-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        
        {/* Glow border between Hero and LogoBar */}
        <hr style={{ border: 'none', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-border), transparent)', margin: 0 }} />
        
        <LogoBar />
        <Connector />
        <PainStats />
        <Connector />
        <Features />
        <Connector />
        <HowItWorks />
        <Connector />
        <Architecture />
        <Connector />
        <Testimonials />
        <Connector />
        <Pricing />
        <Connector />
        <FAQ />
        <Connector />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

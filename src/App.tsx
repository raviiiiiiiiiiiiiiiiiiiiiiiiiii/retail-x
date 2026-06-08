import React from 'react';
import Navbar from './components/Navbar';
import AnnouncementPopup from './components/AnnouncementPopup';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import TrustBar from './components/TrustBar';
import InvisibleProblem from './components/InvisibleProblem';
import IntroducingRetailX from './components/IntroducingRetailX';
import PainStats from './components/PainStats';
import FourLayers from './components/FourLayers';
import HowItWorks from './components/HowItWorks';
import CommandCenter from './components/CommandCenter';
import InterventionDemo from './components/InterventionDemo';
import Architecture from './components/Architecture';
import Features from './components/Features';
import AudienceComparison from './components/AudienceComparison';
import BiggerVision from './components/BiggerVision';
import FounderMessage from './components/FounderMessage';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <video autoPlay muted loop playsInline className="global-bg-video">
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4" type="video/mp4" />
      </video>
      <div className="global-bg-overlay"></div>
      <Navbar />
      <AnnouncementPopup />
      <main>
        <Hero />
        <LogoBar />
        <TrustBar />
        <InvisibleProblem />
        <IntroducingRetailX />
        <PainStats />
        <FourLayers />
        <HowItWorks />
        <CommandCenter />
        <InterventionDemo />
        <Architecture />
        <Features />
        <AudienceComparison />
        <BiggerVision />
        <FounderMessage />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <WaitlistForm />
      <Footer />
    </div>
  );
}

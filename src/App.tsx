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
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <PainStats />
        <Features />
        <HowItWorks />
        <Architecture />
        <Pricing />
        <Testimonials />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

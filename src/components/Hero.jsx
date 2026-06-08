import React from 'react';
import { motion } from 'motion/react';
import './Hero.css';

export default function Hero() {
  const handleOpenWaitlist = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('openWaitlist'));
  };

  return (
    <section className="hero">
      <div className="section-container hero-container relative z-10 flex flex-col items-center text-center">
        
        {/* Cinematic Content Block */}
        <div className="hero-content">
          <motion.h1 
            className="hero-headline animate-fade-rise"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Where capital rises <em className="not-italic text-stone-400 italic">through the discipline.</em>
          </motion.h1>
          
          <motion.p 
            className="hero-body animate-fade-rise-delay text-stone-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're building risk guardrails for deep thinkers, disciplined traders, and quiet rebels. Amid the market chaos, we build the ultimate digital workspace for sharp focus and inspired, emotionless execution.
          </motion.p>
          
          <motion.div 
            className="hero-actions justify-center animate-fade-rise-delay-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button onClick={handleOpenWaitlist} className="btn-primary-custom liquid-glass">
              Begin Journey
            </button>
            <a href="#how-it-works" className="link-ghost text-stone-300 hover:text-white transition-colors">See the Protocol &rarr;</a>
          </motion.div>
        </div>



      </div>
    </section>
  );
}

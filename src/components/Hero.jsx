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

        {/* Dashboard Mockup - Cinematic Glass style */}
        <motion.div 
          className="hero-visual max-w-3xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        >
          <div className="mockup-card liquid-glass-block">
            <div className="mockup-header pb-4 border-b border-white/5 flex justify-between items-center mb-6">
              <div className="mockup-dots flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/10"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/10"></span>
              </div>
              <div className="mockup-title monospace text-xs tracking-wider text-stone-400">RetailX Engine / Locked state</div>
            </div>
            
            <div className="mockup-chart my-6 bg-black/30 rounded-2xl p-6 border border-white/5">
              <svg viewBox="0 0 400 150" className="chart-svg w-full h-auto">
                {/* Horizontal grid lines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.03)" strokeDasharray="3" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.03)" strokeDasharray="3" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.03)" strokeDasharray="3" />
                
                {/* Drawdown Curve */}
                <path d="M0 25 L50 35 L100 85 L150 120 L180 135" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                {/* Fixed protection line */}
                <path d="M180 135 L400 135" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="4" strokeLinecap="round" />
                
                {/* Intervention vertical */}
                <line x1="180" y1="0" x2="180" y2="150" stroke="#ffffff" strokeWidth="1" strokeDasharray="4" />
                <text x="188" y="25" fill="#ffffff" style={{ fontFamily: "var(--font-body)", fontSize: "9px", letterSpacing: "1px" }} className="uppercase">REVENUE SAVED @ -2.4% DEVIATION</text>
              </svg>
            </div>
            
            <div className="mockup-status-row flex flex-wrap gap-3 justify-center">
              <span className="status-pill text-xs flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/15 bg-red-950/20 text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span> Revenge Blocked
              </span>
              <span className="status-pill text-xs flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/15 bg-yellow-950/20 text-yellow-400">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> Cooldown: 4:32
              </span>
              <span className="status-pill text-xs flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span> Discipline Score: 98%
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

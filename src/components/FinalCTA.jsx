import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Sparkles } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA() {
  const handleOpen = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('openWaitlist'));
  };

  return (
    <section className="final-cta-section" id="final-cta">
      <div className="section-container">
        <motion.div 
          className="final-cta-card glass-card text-center"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-glow-element"></div>
          
          <div className="cta-badge-wrapper">
            <span className="badge">
              <Sparkles size={12} />
              FREE BETA PROGRAM
            </span>
          </div>

          <h2 className="cta-title">
            Stop Trading Against the Market.
            <br />
            Stop Trading Against Yourself.
            <br />
            <span className="text-accent gradient-text-lime">Start Trading With Intelligence.</span>
          </h2>

          <div className="cta-button-container">
            <button onClick={handleOpen} className="btn btn-primary cta-action-btn">
              <UserPlus size={15} style={{ marginRight: '8px' }} /> Join Early Access - Free
            </button>
          </div>

          <p className="cta-terms-detail">
            First 1,000 members get RetailX Pro free for 6 months. No credit card. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

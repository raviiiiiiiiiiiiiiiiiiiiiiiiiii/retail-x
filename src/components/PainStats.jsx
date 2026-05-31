import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useCountUp } from '../hooks/useCountUp';
import './PainStats.css';

const StatCard = ({ value, suffix, prefix, label, delay, decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCountUp(value, 2000, isInView, decimals);

  return (
    <motion.div 
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <div className="stat-number">
        {prefix}{count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

export default function PainStats() {
  return (
    <section className="pain-stats">
      <div className="section-container text-center">
        <span className="eyebrow">THE PROBLEM</span>
        <h2 className="section-headline">Retail Traders Are Their Own Worst Enemy.</h2>
        <p className="bridge-text">Most traders don't lose because of bad strategy. They lose because of bad moments.</p>
        
        <div className="stats-grid">
          <StatCard 
            prefix="₹" 
            value={2.3} 
            decimals={1}
            suffix="L" 
            label="average annual loss per retail trader" 
            delay={0.1} 
          />
          <StatCard 
            prefix="" 
            value={78} 
            suffix="%" 
            label="of losing trades made under emotional stress" 
            delay={0.2} 
          />
          <StatCard 
            prefix="" 
            value={11} 
            suffix=" sec" 
            label="average gap between a loss and a revenge trade" 
            delay={0.3} 
          />
        </div>
      </div>
    </section>
  );
}

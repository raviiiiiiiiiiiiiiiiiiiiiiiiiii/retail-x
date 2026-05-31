import React from 'react';
import { motion } from 'motion/react';
import './Features.css';

const features = [
  {
    icon: "🛑",
    title: "Revenge Trade Blocker",
    stat: "5 min",
    statLabel: "forced cooldown after a loss",
    description: "Re-entry blocked. No exceptions."
  },
  {
    icon: "🔒",
    title: "Daily Loss Lockout",
    stat: "₹0",
    statLabel: "lost after limit hit",
    description: "Hit your limit. Platform locks. Done."
  },
  {
    icon: "📊",
    title: "Discipline Score",
    stat: "87",
    statLabel: "avg score, top 10% of traders",
    description: "Track behavior. Not just P&L."
  }
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="section-container">
        <div className="text-center">
          <span className="eyebrow">BEHAVIORAL PROTECTION</span>
          <h2 className="section-headline">Guardrails. Engineered.</h2>
          <p className="bridge-text">RetailX doesn't predict the market. It protects you from yourself.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="glass-card feature-glass"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <div className="feature-glass-icon">{feature.icon}</div>
              <h3 className="feature-glass-title">{feature.title}</h3>
              <div className="feature-glass-stat monospace">{feature.stat}</div>
              <div className="feature-glass-stat-label">{feature.statLabel}</div>
              <div className="feature-glass-divider"></div>
              <p className="feature-glass-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

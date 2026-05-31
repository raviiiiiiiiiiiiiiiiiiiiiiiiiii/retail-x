import React from 'react';
import { motion } from 'motion/react';
import { Activity, Lock, Smile, Target, AlertTriangle, CheckSquare } from 'lucide-react';
import './Features.css';

const FeatureCard = ({ icon: Icon, title, description, size = "small", delay, children }) => (
  <motion.div 
    className={`feature-card ${size}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    <div className="fc-header">
      <div className="fc-icon">
        <Icon size={24} />
      </div>
      <h3 className="fc-title">{title}</h3>
    </div>
    <p className="fc-description">{description}</p>
    {children && <div className="fc-visual">{children}</div>}
  </motion.div>
);

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="section-container">
        <div className="text-center">
          <span className="eyebrow">BEHAVIORAL PROTECTION</span>
          <h2 className="section-headline">Your Guardrails. Engineered.</h2>
        </div>

        <div className="bento-grid">
          {/* Large Card 1 */}
          <FeatureCard 
            icon={AlertTriangle}
            title="Revenge Trade Blocker"
            description="Detects re-entry within 5 minutes of a loss. Forces a mandatory cooldown. Non-negotiable."
            size="large"
            delay={0.1}
          >
            <div className="timeline-anim">
              <div className="tl-node loss">Loss</div>
              <div className="tl-line"></div>
              <div className="tl-node alert">Alert</div>
              <div className="tl-line active"></div>
              <div className="tl-node cooldown">Cooldown</div>
              <div className="tl-line"></div>
              <div className="tl-node resume">Resume</div>
            </div>
          </FeatureCard>

          {/* Large Card 2 */}
          <FeatureCard 
            icon={Lock}
            title="Daily Loss Lockout"
            description="Hit your preset limit? Platform locks you out for the day. No override."
            size="large"
            delay={0.2}
          >
            <div className="lock-anim">
              <div className="lock-body">
                <div className="lock-shackle"></div>
                <div className="lock-keyhole"></div>
              </div>
            </div>
          </FeatureCard>

          {/* Small Cards */}
          <FeatureCard 
            icon={Smile}
            title="Emotional State Monitor"
            description="Tracks erratic sizing and frequency."
            delay={0.3}
          />
          <FeatureCard 
            icon={Target}
            title="Discipline Score"
            description="Not P&L. Score based on process."
            delay={0.4}
          />
          <FeatureCard 
            icon={Activity}
            title="FOMO Blocker"
            description="Pauses trades on unusually large candles."
            delay={0.5}
          />
          <FeatureCard 
            icon={CheckSquare}
            title="Pre-Trade Checklist"
            description="Mandatory pause before entry."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

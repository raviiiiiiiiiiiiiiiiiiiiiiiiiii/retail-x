import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Network, Smartphone, Eye, Code, Zap, Globe } from 'lucide-react';
import './BiggerVision.css';

export default function BiggerVision() {
  const visionSteps = [
    { name: "RetailX Scanner", desc: "Institutional-grade volume scanner & anomalous breakout scanner", icon: <Eye size={16} /> },
    { name: "Retail Defense Protocol", desc: "Automated pre-trade validation checkpoints", icon: <Zap size={16} /> },
    { name: "Behavioral AI Risk Guard", desc: "Limbic action monitoring & revenge lockout injection", icon: <Smartphone size={16} /> },
    { name: "Algo Builder", desc: "Natural-language visual strategy automation", icon: <Code size={16} /> },
    { name: "RetailX Quant-AI OS", desc: "An integrated operating-system desktop and API layers", icon: <Network size={16} /> },
    { name: "Global Retail Intelligence Network", desc: "Cross-border collaborative risk metrics & decentralized intelligence pool", icon: <Globe size={16} /> }
  ];

  return (
    <section className="bigger-vision-section" id="vision">
      <div className="section-container">
        <div className="vision-header text-center liquid-glass-block">
          <span className="eyebrow">THE BIGGER VISION</span>
          <h2 className="section-headline">Scaling <span className="text-green-accent font-bold">Trading Edge</span>, Controlling <span className="text-red-accent font-bold">Risk</span>.</h2>
          <p className="bridge-text text-muted">
            We aren't just building an app. We are building the modular architecture that levels the playing field forever.
          </p>
        </div>

        <div className="vision-flow">
          {visionSteps.map((step, idx) => (
            <React.Fragment key={step.name}>
              {/* Step Node */}
              <motion.div 
                className="vision-node glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="node-icon-glow">
                  {step.icon}
                </div>
                <div className="node-content">
                  <h4 className="node-name">{step.name}</h4>
                  <p className="node-desc text-muted">{step.desc}</p>
                </div>
                <div className="node-number-banner monospace">
                  PHASE 0{idx+1}
                </div>
              </motion.div>

              {/* Connector Arrow (unless it's the last step) */}
              {idx < visionSteps.length - 1 && (
                <div className="flow-connector">
                  <ChevronDown size={20} className="connector-arrow-icon" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

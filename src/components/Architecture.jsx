import React from 'react';
import { motion } from 'motion/react';
import './Architecture.css';

const LAYERS = [
  { id: 1, title: 'Data Ingestion', items: ['Broker API Webhooks', 'Tick-level OHLCV', 'Latency <50ms'], badge: '● LIVE AT LAUNCH', style: 'live' },
  { id: 2, title: 'Market Intelligence', items: ['Vol & OI Surface', 'Regime Detection', 'Liquidity Zones'], badge: '● LIVE AT LAUNCH', style: 'live' },
  { id: 3, title: 'AI Research Engine', items: ['Alpha Signal Scoring', 'SMC/ICT Setup Detection', 'Trap Identification'], badge: '◐ PHASE 2', style: 'phase2' },
  { id: 4, title: 'Execution Quality', items: ['Structure Validation', 'FVG Detection', 'R:R Gating'], badge: '● LIVE AT LAUNCH', style: 'live' },
  { id: 5, title: 'Risk Management', items: ['Kelly Sizing', 'Drawdown Guard', 'Portfolio Heat'], badge: '● CORE IP', style: 'core' },
  { id: 6, title: 'Behavioral Protection', items: ['Revenge Trade Block', 'Tilt Detection', 'Discipline Scoring'], badge: '● CORE IP', style: 'core' },
  { id: 7, title: 'Adaptive Learning', items: ['Behavior Fingerprinting', 'Regime Adaptation', 'Model Loops'], badge: '◌ PHASE 3', style: 'phase3' },
  { id: 8, title: 'Decision UX', items: ['BUY/SELL/WAIT Engine', 'Trade Cards', 'Journal Analytics'], badge: '● LIVE AT LAUNCH', style: 'live' },
  { id: 9, title: 'Infra & Security', items: ['AES-256', 'SEBI Compliant', 'Audit Logs'], badge: '● ALWAYS ON', style: 'always' }
];

export default function Architecture() {
  return (
    <section className="architecture">
      <div className="section-container text-center">
        <span className="eyebrow">QUANT-AI OS</span>
        <h2 className="section-headline">Quant-Grade Infrastructure.</h2>
        <p className="bridge-text">Built like a hedge fund's risk desk. Designed for the individual trader.</p>
      </div>

      <div className="arch-scroll-container">
        <div className="arch-track">
          {LAYERS.map((layer, index) => (
            <motion.div 
              key={layer.id} 
              className="glass-card arch-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="arch-card-header">
                <span className={`arch-phase monospace badge-${layer.style}`}>{layer.badge}</span>
              </div>
              <h3 className="arch-title monospace">{layer.title}</h3>
              <ul className="arch-list">
                {layer.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="arch-flow-strip section-container text-center">
        <div className="flow-items monospace">
          <span>DATA</span>
          <span className="flow-arrow">&rarr;</span>
          <span>INTELLIGENCE</span>
          <span className="flow-arrow">&rarr;</span>
          <span>AI SCORING</span>
          <span className="flow-arrow">&rarr;</span>
          <span>RISK FILTER</span>
          <span className="flow-arrow">&rarr;</span>
          <span>BEHAVIORAL VAL</span>
          <span className="flow-arrow">&rarr;</span>
          <span>DECISION</span>
          <span className="flow-arrow">&rarr;</span>
          <span>LEARNING LOOP</span>
        </div>
        
        <div className="glass-card terminal-bar">
          <div className="terminal-left">
            <span className="terminal-dot"></span>
            <span className="terminal-label">RETAILX QUANT-OS</span>
          </div>
          <div className="terminal-metrics">
            <span className="metric"><span className="metric-value">84%</span> CONFIDENCE</span>
            <span className="divider">|</span>
            <span className="metric"><span className="metric-value live-pulse">LIVE</span></span>
            <span className="divider">|</span>
            <span className="metric"><span className="metric-value">0 VIOLATIONS</span> TODAY</span>
            <span className="divider">|</span>
            <span className="metric">SEBI <span className="metric-value">COMPLIANT</span></span>
          </div>
          <div className="terminal-right">
            <span className="terminal-badge">INSTITUTIONAL GRADE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

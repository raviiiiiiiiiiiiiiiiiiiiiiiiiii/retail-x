import React from 'react';
import { motion } from 'motion/react';
import './Architecture.css';

const LAYERS = [
  { id: 1, title: 'Data Ingestion', items: ['Broker API Webhooks', 'Tick-level Data', 'Latency < 50ms'], phase: 'Phase 1' },
  { id: 2, title: 'Market Intelligence', items: ['Vol Clustering', 'Regime Detection', 'Liquidity mapping'], phase: 'Phase 2' },
  { id: 3, title: 'AI Research Engine', items: ['Pattern matching', 'Historical stats', 'Backtest infra'], phase: 'Unique IP' },
  { id: 4, title: 'Execution Quality', items: ['Slippage monitor', 'Fill ratios', 'Routing analysis'], phase: 'Core' },
  { id: 5, title: 'Risk Management', items: ['Margin tracking', 'Max drawdown limits', 'Position sizing'], phase: 'MVP' },
  { id: 6, title: 'Behavioral Protection', items: ['Revenge trade blocker', 'Tilt detection', 'Lockout system'], phase: 'Unique IP' },
  { id: 7, title: 'Adaptive Learning', items: ['User profiling', 'Dynamic thresholds', 'Feedback loop'], phase: 'Phase 2' },
  { id: 8, title: 'Decision UX', items: ['Friction interfaces', 'Nudge design', 'Scorecards'], phase: 'MVP' },
  { id: 9, title: 'Infra & Security', items: ['AES-256 Encryption', 'Zero-knowledge', 'Audit logs'], phase: 'Core' }
];

export default function Architecture() {
  return (
    <section className="architecture">
      <div className="section-container text-center">
        <span className="eyebrow">QUANT-AI OS</span>
        <h2 className="section-headline">Institutional-Grade Infrastructure.</h2>
      </div>

      <div className="arch-scroll-container">
        <div className="arch-track">
          {LAYERS.map((layer, index) => (
            <motion.div 
              key={layer.id} 
              className="arch-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="arch-card-header">
                <span className="arch-phase monospace">{layer.phase}</span>
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
        
        <div className="arch-status-badge">
          <span className="blink-dot"></span>
          RETAILX QUANT-OS &middot; 84% CONFIDENCE &middot; INSTITUTIONAL GRADE
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ShieldAlert, Cpu, Activity, Clock } from 'lucide-react';
import './CommandCenter.css';

export default function CommandCenter() {
  const [systime, setSystime] = useState("16:44:37 UTC");
  const [tick, setTick] = useState(0);

  // Update tick every few seconds to show "live feed" action
  useEffect(() => {
    const timer = setInterval(() => {
      setTick(prev => prev + 1);
      const now = new Date();
      setSystime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="command-center-section" id="command-center">
      <div className="section-container">
        <div className="command-header text-center">
          <span className="eyebrow">THE RETAILX COMMAND CENTER</span>
          <h2 className="section-headline">Turn <span className="text-red-accent font-bold">market chaos</span> into <span className="text-green-accent font-bold">structured clarity</span>.</h2>
          <p className="bridge-text text-muted">A zero-noise quantitative cockpit designed to deliver immediate psychological ground-truth before execution.</p>
        </div>

        <div className="command-grid">
          {/* Main Visual Dashboard */}
          <motion.div 
            className="command-mockup-wrapper glass-card"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="command-mockup-top">
              <div className="terminal-dots">
                <span className="dot flex-shrink-0 red-btn"></span>
                <span className="dot flex-shrink-0 yellow-btn"></span>
                <span className="dot flex-shrink-0 green-btn"></span>
              </div>
              <div className="system-identity monospace">
                QUANT-EDGE TERMINAL // CORE_SECURE_v2.6
              </div>
              <div className="system-time monospace">
                <Clock size={12} style={{ marginRight: '4px' }} />
                {systime}
              </div>
            </div>

            <div className="command-board">
              {/* Stat 1: Market Bias */}
              <div className="board-card">
                <div className="card-top">
                  <Compass size={14} className="card-top-icon text-green" />
                  <span className="monospace label text-muted">MARKET BIAS</span>
                </div>
                <div className="card-value bias-value text-green">BULLISH</div>
                <div className="card-sub monospace text-muted">SEC_LOG_FILTERED</div>
              </div>

              {/* Stat 2: Risk Level */}
              <div className="board-card">
                <div className="card-top">
                  <Activity size={14} className="card-top-icon text-yellow" />
                  <span className="monospace label text-muted">RISK LEVEL</span>
                </div>
                <div className="card-value risk-value text-yellow">MEDIUM</div>
                <div className="card-sub monospace text-muted">VOLATILITY_CAP</div>
              </div>

              {/* Stat 3: Trap Probability */}
              <div className="board-card">
                <div className="card-top">
                  <ShieldAlert size={14} className="card-top-icon text-red" />
                  <span className="monospace label text-muted">TRAP PROBABILITY</span>
                </div>
                <div className="card-value trap-value text-red">HIGH</div>
                <div className="card-sub monospace text-muted">LIQUIDITY_HUNT_FOUND</div>
              </div>

              {/* Stat 4: Recommended Action */}
              <div className="board-card recommendation-card">
                <div className="card-top">
                  <Cpu size={14} className="card-top-icon text-accent" />
                  <span className="monospace label text-accent-light">RECOMMENDED ACTION</span>
                </div>
                <div className="card-value action-value-box text-black">WAIT</div>
                <div className="card-sub monospace text-muted">SUSPEND_TRIGGER</div>
              </div>
            </div>

            {/* Explanatory Message Block */}
            <div className="reason-container">
              <div className="reason-header monospace text-accent">REASONING:</div>
              <p className="reason-body">
                "Weak volume. Resistance overhead. Institutional participation declining."
              </p>
              <div className="live-status-ticker">
                <span className="ticker-dot"></span>
                <span className="monospace ticker-text">
                  RECEIVING ACTIVE PIPELINES &middot; HEDGE CO-LOCATED FEED ACTIVE &middot; TICK {tick}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Left/Side Value Proposition */}
          <div className="command-right-copy">
            <h3 className="command-tagline">One glance. Total clarity. No emotional override.</h3>
            <p className="command-body-desc text-muted">
              You do not need more indicators or moving average overlaps to clutter your chart. You need a centralized system that synthesizes multiple institutional parameters and tells you the core cold hard truth.
            </p>
            <p className="command-body-desc text-muted">
              When RetailX recommends to <strong>WAIT</strong> or <strong>AVOID</strong>, it suspends your broker integration payload, keeping you sidelines when the odds are stacked against you.
            </p>
            <div className="action-row-button">
              <button onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openWaitlist')); }} className="btn btn-primary">
                Experience Terminal Access &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

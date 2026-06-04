import React from 'react';
import { motion } from 'motion/react';
import './FourLayers.css';

export default function FourLayers() {
  const layers = [
    {
      num: "Layer 1",
      name: "Market Intelligence",
      tagline: "RetailX continuously decodes:",
      items: ["Price action", "Volume", "Open interest", "Options activity", "Market structure", "Smart-money footprints"],
      badge: "Incite"
    },
    {
      num: "Layer 2",
      name: "Risk Intelligence",
      tagline: "RetailX evaluates:",
      items: ["Volatility conditions", "Liquidity health", "Trap probability", "Institutional bias", "Market regime"],
      badge: "Evaluate"
    },
    {
      num: "Layer 3",
      name: "Behavioral AI",
      tagline: "RetailX detects your most expensive patterns:",
      items: ["Revenge trading", "FOMO", "Overtrading", "Emotional escalation", "Rule violations"],
      badge: "Detect"
    },
    {
      num: "Layer 4",
      name: "Decision Engine",
      tagline: "Instead of overwhelming you with data, RetailX gives you one clear output:",
      items: ["BUY", "SELL", "WAIT", "AVOID"],
      specialText: "With the exact reasoning behind the decision.",
      badge: "Resolve"
    }
  ];

  return (
    <section className="four-layers-section" id="four-layers">
      <div className="section-container">
        <div className="layers-header text-center">
          <span className="eyebrow">FOUR LAYERS OF PROTECTION</span>
          <h2 className="section-headline">The <span className="text-red-accent font-bold">Retail</span> Defense <span className="text-green-accent font-bold">Protocol</span>.</h2>
          <p className="bridge-text">
            Four independent processing engines filtering every decision before you pull the trigger.
          </p>
        </div>

        <div className="layers-stack">
          {layers.map((layer, idx) => (
            <motion.div 
              key={layer.num}
              className={`layer-card glass-card ${idx === 3 ? 'layer-highlight' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="layer-header">
                <div className="layer-num-title">
                  <span className="monospace layer-num-badge">{layer.num}</span>
                  <h3 className="layer-title-text">{layer.name}</h3>
                </div>
                <span className="monospace layer-action-type">{layer.badge}</span>
              </div>

              <div className="layer-body">
                <p className="layer-tagline text-muted">{layer.tagline}</p>
                <div className="layer-items-grid">
                  {layer.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx} 
                      className={`layer-item-pill ${idx === 3 ? 'special-action-pill' : ''}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {layer.specialText && (
                  <p className="layer-special-footer monospace">
                    &rarr; {layer.specialText}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

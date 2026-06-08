import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, X, ShieldAlert } from 'lucide-react';
import './AnnouncementPopup.css';

export default function AnnouncementPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup 3 seconds after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="announcement-popup-container"
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        >
          <div className="announcement-popup-card liquid-glass" style={{ borderRadius: '24px' }}>
            <button 
              onClick={handleDismiss} 
              className="announcement-close-btn"
              aria-label="Dismiss Announcement"
            >
              <X size={15} />
            </button>

            <div className="announcement-header-row">
              <div className="announcement-icon-badge">
                <ShieldAlert size={14} style={{ color: '#ff4c4c' }} />
              </div>
              <span className="monospace warning-label">Crucial Reality Alert</span>
            </div>

            <div className="announcement-body">
              <h4 className="announcement-title" style={{ fontFamily: "var(--font-display)", fontWeight: "normal", fontSize: "24px", lineHeight: "1.2", letterSpacing: "-0.2px" }}>The Trader's Trap</h4>
              <p className="announcement-desc text-stone-300">
                <strong>90% of traders</strong> don’t lose because they lack strategy. They lose because they make <span className="highlight-red">one bad decision</span> at the worst moment.
              </p>
              <p className="announcement-sub-desc" style={{ color: '#ffffff', fontWeight: '500', opacity: 0.9 }}>
                And no one stops them. RetailX fixes this.
              </p>
            </div>

            <div className="announcement-actions">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleDismiss();
                  window.dispatchEvent(new Event('openWaitlist'));
                }}
                className="announcement-btn liquid-glass"
              >
                Learn More
              </button>
              <button onClick={handleDismiss} className="announcement-btn-dismiss">
                Dismiss
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

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
          <div className="announcement-popup-card glass-card">
            {/* Red alert bar top decorative */}
            <div className="announcement-top-bar" />

            <button 
              onClick={handleDismiss} 
              className="announcement-close-btn"
              aria-label="Dismiss Announcement"
            >
              <X size={15} />
            </button>

            <div className="announcement-header-row">
              <div className="announcement-icon-badge">
                <ShieldAlert size={14} className="text-red-accent" />
              </div>
              <span className="monospace warning-label">Crucial Reality Alert</span>
            </div>

            <div className="announcement-body">
              <h4 className="announcement-title">The Trader's Trap</h4>
              <p className="announcement-desc">
                <strong>90% of traders</strong> don’t lose because they lack information. They lose because they make <span className="highlight-red">one bad decision</span> at the wrong moment.
              </p>
              <p className="announcement-sub-desc">
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
                className="announcement-btn"
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

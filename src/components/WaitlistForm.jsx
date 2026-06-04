import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowLeft, X } from 'lucide-react';
import './WaitlistForm.css';

const steps = [
  { id: 1, type: 'single', title: 'Which best describes your last 12 months of trading?', options: ['Consistent profits', 'Broke even but stressful', 'Lost money but learning', 'Lost more than I could afford', 'Blew my account at least once'] },
  { id: 2, type: 'slider', title: 'How painful was your worst trading day in the last 3 months?' },
  { id: 3, type: 'multi', title: 'Which of these have you experienced? Select all that apply.', options: ['Entered a trade right after a loss', 'Increased size after losing', 'Ignored my own stop-loss', 'Traded outside normal hours', 'Felt out of control mid-trade', 'Exceeded my daily loss limit'] },
  { id: 4, type: 'single', title: 'What would help you most?', options: ['Auto-pause when trading emotionally', 'Lock me out at my loss limit', 'Show my real risk in real time', 'Give me a daily discipline score', 'Force a checklist before trades'] },
  { id: 5, type: 'single', title: 'What would you pay monthly for a tool that prevents impulsive losses?', options: ['₹199', '₹399', '₹599', '₹799', '₹999', '₹1,499+'] },
  { id: 6, type: 'contact', title: 'Leave your details' }
];

export default function WaitlistForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [formData, setFormData] = useState({
    experience: '',
    painScale: 5,
    behaviors: [],
    valuableFeature: '',
    pricing: '',
    name: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openWaitlist', handleOpen);
    return () => window.removeEventListener('openWaitlist', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Collected Survey Data:", formData);
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentStep(0);
      setSubmitted(false);
      setFormData({
        experience: '',
        painScale: 5,
        behaviors: [],
        valuableFeature: '',
        pricing: '',
        name: '',
        email: ''
      });
    }, 300);
  };

  const handleMultiSelect = (option) => {
    setFormData(prev => {
      const exists = prev.behaviors.includes(option);
      return {
        ...prev,
        behaviors: exists 
          ? prev.behaviors.filter(item => item !== option)
          : [...prev.behaviors, option]
      };
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="waitlist-modal-overlay" onClick={handleClose}>
      <motion.div 
        className="waitlist-modal"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}><X size={20} /></button>

        {!submitted ? (
          <>
            <div className="modal-header">
              {currentStep > 0 && (
                <button className="back-btn" onClick={handleBack}><ArrowLeft size={16} /></button>
              )}
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
              <span className="step-count">{currentStep + 1} / {steps.length}</span>
            </div>

            <div className="modal-body">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="step-content"
                >
                  <h3 className="step-title">{steps[currentStep].title}</h3>

                  {steps[currentStep].type === 'single' && (
                    <div className="options-stack">
                      {steps[currentStep].options.map((opt, idx) => (
                        <button
                          key={opt}
                          className={`pill-option ${formData[currentStep === 0 ? 'experience' : currentStep === 3 ? 'valuableFeature' : 'pricing'] === opt ? 'selected' : ''}`}
                          onClick={() => {
                            const field = currentStep === 0 ? 'experience' : currentStep === 3 ? 'valuableFeature' : 'pricing';
                            setFormData(prev => ({ ...prev, [field]: opt }));
                            setTimeout(handleNext, 180);
                          }}
                        >
                          <span className="letter-indicator">{String.fromCharCode(65 + idx)}</span>
                          <span className="option-text">{opt}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {steps[currentStep].type === 'multi' && (
                    <div className="options-stack">
                      {steps[currentStep].options.map(opt => {
                        const isSelected = formData.behaviors.includes(opt);
                        return (
                          <button
                            key={opt}
                            className={`pill-option multi ${isSelected ? 'selected' : ''}`}
                            onClick={() => handleMultiSelect(opt)}
                          >
                            <span className={`checkbox-indicator ${isSelected ? 'checked' : ''}`}>
                              {isSelected ? '✓' : ''}
                            </span>
                            <span className="option-text">{opt}</span>
                          </button>
                        );
                      })}
                      <button className="btn btn-primary step-btn" onClick={handleNext}>Next &rarr;</button>
                    </div>
                  )}

                  {steps[currentStep].type === 'slider' && (
                    <div className="slider-wrapper">
                      <div className="slider-value monospace">{formData.painScale}</div>
                      <div className="slider-sentiment">
                        {formData.painScale <= 2 ? "Mild Scratch 🥱" :
                         formData.painScale <= 4 ? "Painful Setback 😒" :
                         formData.painScale <= 6 ? "Deep Regret 📉" :
                         formData.painScale <= 8 ? "Account Bleeding 🚨" :
                         "Devastating Trauma 😭"}
                      </div>
                      <input 
                        type="range" 
                        min="1" max="10" 
                        value={formData.painScale} 
                        onChange={(e) => setFormData(prev => ({ ...prev, painScale: e.target.value }))}
                        className="pain-slider"
                      />
                      <div className="slider-labels">
                        <span>1 = Barely noticed</span>
                        <span>10 = Couldn't sleep</span>
                      </div>
                      <button className="btn btn-primary step-btn" onClick={handleNext}>Next &rarr;</button>
                    </div>
                  )}

                  {steps[currentStep].type === 'contact' && (
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <input 
                        type="text" 
                        placeholder="Name" 
                        required 
                        className="modal-input"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                      <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        className="modal-input"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                      <button type="submit" className="btn btn-primary step-btn">Claim Early Access &rarr;</button>
                    </form>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="success-state">
            <CheckCircle2 size={48} className="success-icon" />
            <h2 className="success-title">You're on the list.</h2>
            <p className="success-text">We'll be in touch before beta opens.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

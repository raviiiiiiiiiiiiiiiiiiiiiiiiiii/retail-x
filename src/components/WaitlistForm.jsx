import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './WaitlistForm.css';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({ name: '', email: '', broker: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Waitlist form submitted:", formData);
    
    setSubmitted(true);
    
    // Confetti burst
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#C8F135', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#C8F135', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="waitlist" className="waitlist-section">
      <div className="waitlist-glow"></div>
      
      <div className="section-container waitlist-container text-center">
        {!submitted ? (
          <>
            <h2 className="section-headline">Join 2,400+ Traders on the Waitlist.</h2>
            <p className="waitlist-subtext">Free beta &middot; Founder's discount &middot; Instant trading psychology score</p>
            
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="name">Name</label>
              </div>
              
              <div className="input-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="email">Email</label>
              </div>
              
              <div className="input-group select-group">
                <select 
                  id="broker" 
                  name="broker" 
                  value={formData.broker}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="Zerodha">Zerodha</option>
                  <option value="Upstox">Upstox</option>
                  <option value="Angel One">Angel One</option>
                  <option value="Other">Other</option>
                </select>
                <label htmlFor="broker">Which broker do you use?</label>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Claim Early Access &rarr;
              </button>
            </form>
          </>
        ) : (
          <div className="success-state">
            <h2 className="section-headline">🎉 You're on the list!</h2>
            <p className="waitlist-subtext">We'll reach out soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}

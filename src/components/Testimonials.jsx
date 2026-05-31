import React from 'react';
import './Testimonials.css';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  { text: "I used to blow my daily limit every other week. RetailX locked me out twice and saved me ₹40,000 in a single month.", author: "Rohit M.", role: "NSE Options Trader" },
  { text: "The discipline score changed everything. I stopped chasing P&L and started tracking my behavior.", author: "Priya S.", role: "Intraday Equity" },
  { text: "Finally something that understands revenge trading. I've been waiting 3 years for this.", author: "Arjun K.", role: "Futures Trader" },
  { text: "Got locked out on day 3. Was furious. Checked my journal. It was right. Best product decision I've made.", author: "Karan D.", role: "Crypto Trader" },
  { text: "The pre-trade checklist alone cut my impulsive entries by 60%.", author: "Sneha R.", role: "Swing Trader" }
];

const TestimonialCard = ({ text, author, role }) => {
  const getInitials = (name) => name.split(' ').map(n => n[0]).join('');

  return (
    <div className="testimonial-card">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#F59E0B" stroke="none" />
        ))}
      </div>
      <p className="t-text">"{text}"</p>
      <div className="t-author">
        <div className="t-avatar">{getInitials(author)}</div>
        <div className="t-meta">
          <div className="t-name">{author}</div>
          <div className="t-role">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-container text-center pb-0">
        <span className="eyebrow">EARLY USERS</span>
        <h2 className="section-headline">Traders Who Finally Feel in Control.</h2>
        <p className="bridge-text">Early beta users are already seeing the difference.</p>
      </div>

      <div className="t-carousel-container">
        <div className="t-track">
          {/* Duplicate twice for seamless infinite scroll */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

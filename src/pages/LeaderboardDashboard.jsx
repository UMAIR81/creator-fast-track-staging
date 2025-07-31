import React, { useState } from 'react';
import '../style.css';

import goldentoken from '../assets/goldentoken.avif';
import emeraldcard from '../assets/emaraldcard.avif';
import mysticart from '../assets/mysticart.jpg';
import rarescroll from '../assets/rarescroll.jpg';
import legendkey from '../assets/lengendkey.avif';
import limecrown from '../assets/lime crown.avif';

function CreditPanel({ credits, onOpenPayment }) {
  return (
    <div className="credit-panel">
      <h2>Balance: {credits} credits</h2>
      <button onClick={onOpenPayment}>Top-Up Credits</button>
    </div>
  );
}

function CollectibleCard({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

function PaymentPopup({ onClose, onConfirm }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>Mock Stripe Payment</h3>
        <label>Name on Card</label>
        <input type="text" placeholder="Swathi Moodi" />
        <label>Card Number</label>
        <input type="text" placeholder="4242 4242 4242 4242" />
        <label>Expiry</label>
        <input type="text" placeholder="MM/YY" />
        <label>CVV</label>
        <input type="text" placeholder="123" />
        <div className="popup-buttons">
          <button onClick={onConfirm}>Pay ₹50</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ onLogout }) {
  const [credits, setCredits] = useState(100);
  const [showPopup, setShowPopup] = useState(false);

  const collectibles = [
    { id: 1, title: 'Golden Token', image: goldentoken },
    { id: 2, title: 'Emerald Card', image: emeraldcard },
    { id: 3, title: 'Mystic Art', image: mysticart },
    { id: 4, title: 'Rare Scroll', image: rarescroll },
    { id: 5, title: 'Legend Key', image: legendkey },
    { id: 6, title: 'Lime Crown', image: limecrown }
  ];

  const handleConfirmPayment = () => {
    setShowPopup(false);
    setTimeout(() => {
      alert('Payment Successful! Credits added.');
      setCredits(credits + 50);
    }, 500);
  };

  return (
    <div className="dashboard">
      {/* Logout Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button
          onClick={onLogout}
          style={{
            background: '#ccc',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px'
          }}
        >
          Logout
        </button>
      </div>

      <h1>Evaltree Dashboard</h1>
      <CreditPanel credits={credits} onOpenPayment={() => setShowPopup(true)} />

      <div className="grid">
        {collectibles.map(item => (
          <CollectibleCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>

      {showPopup && (
        <PaymentPopup onClose={() => setShowPopup(false)} onConfirm={handleConfirmPayment} />
      )}
    </div>
  );
}

export default Dashboard;

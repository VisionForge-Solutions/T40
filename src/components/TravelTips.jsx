import React from 'react';
import '../styles/TravelTips.css';

const TravelTips = () => {
  return (
    <div className="travel-tips-section">
      <h2 className="travel-tips-title">Travel Tips</h2>
      <div className="travel-tips-container">
        <div className="travel-tip blue-tip">
          <div className="tip-number">1</div>
          <div className="tip-content">
            <h4>Travel with our verified operators</h4>
            <p>Avoid travelling with unregistered buses called 'Sole'. Travel with our verified operators instead.</p>
          </div>
        </div>
        <div className="travel-tip purple-tip">
          <div className="tip-number">2</div>
          <div className="tip-content">
            <h4>Inform your loved ones</h4>
            <p>Inform your loved ones about your trip and keep them updated on your journey.</p>
          </div>
        </div>
        <div className="travel-tip yellow-tip">
          <div className="tip-number">3</div>
          <div className="tip-content">
            <h4>Avoid late night travels</h4>
            <p>Avoid travelling at night as much as possible. Road trips during the night are not advisable due to the heightened nationwide insecurity.</p>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default TravelTips;

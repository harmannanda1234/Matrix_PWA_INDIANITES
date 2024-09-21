import React from 'react';
import './hero.css';
import padImage from './hero.png';

const Hero = () => {
  return (
    <div className="hero-section center">
      <div className="image-container">
        <img src={padImage} alt="pad" className="pad-image slide-in-left" />
      </div>
      <div className="text-container">
        <h1 className="intro fade-in">
          Revolutionizing <br /> Menstrual  Health.  
        </h1>
        <p className="details fade-in">
          Our Smart Menstrual Kit is designed to ensure comfort and safety. Featuring advanced 
          blood detection sensors and AI-powered insights, it detects leakage and notifies users 
          to change the pad. The AI model monitors moisture content, providing feedback on menstrual 
          hygiene and period irregularities. Stay informed and take control of your health.
        </p>
        <p className="highlight fade-in">
          Integrated with an ESP-32 Wi-Fi module and AWS cloud, the kit offers real-time updates through 
          a user-friendly web app, making menstrual care smarter and easier than ever.
        </p>
      </div>
    </div>
  );
};

export default Hero;
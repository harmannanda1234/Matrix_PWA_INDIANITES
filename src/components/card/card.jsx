import React, { useState } from 'react';
import './card.css';
import Umair from '../../assets/umair.jpg';
import Harman from '../../assets/founder2.jpg'; 
import Yath from '../../assets/Yath.jpg'; 
import Om from '../../assets/om.jpg'; 

const Card = ({ founderIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const founders = [
    {
      name: 'Md Umair',
      image: Umair,
      details: 'AI Lead',
    },
    {
      name: 'Harman Nanda',
      image: Harman,
      details: 'Software Lead',
    },
    {
      name: 'Yathart Bisht',
      image: Yath,
      details: 'AWS Engineer',
    },
    {
      name: 'Omar Rizwan',
      image: Om,
      details: 'IOT Lead',
    },
  ];

  const founder = founders[founderIndex]; // Select founder based on passed index

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-content">
          <div className="front">
            <img className="img" src={founder.image} alt={founder.name} />
          </div>
          <div className="back">
            <h2>{founder.name}</h2>
            <p>{founder.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

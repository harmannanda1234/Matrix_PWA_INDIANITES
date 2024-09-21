import React from 'react';
import './line.css';
// import './liner.js'
const Events = () => {
  const eventsData = [
    {
      date: 'IoT ESP32',
      title: 'Data from Sensors',
      description: 'Collecting real-time data from IoT sensors using the ESP32 module.',
    },
    {
      date: 'Firebase Cloud',
      title: 'Data on Cloud',
      description: 'Storing and syncing data to Firebase Realtime Database in the cloud.',
    },
    {
      date: 'PWA',
      title: 'Progressive Web App',
      description: 'Accessing cloud data and presenting it on a Progressive Web App (PWA).',
    },
    {
      date: 'ML Model',
      title: 'Accuracy of Predictions',
      description: 'Predicting outcomes based on data using a machine learning model.',
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Flowchart</h2>
      <div className="timeline">
        {eventsData.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content animate">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span className="event-date">{event.date}</span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Events;

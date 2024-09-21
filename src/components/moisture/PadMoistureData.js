// src/components/PadMoistureData.js
import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "../../firebase";
import './PadMoistureData.css'; // Import the CSS file for styling

const PadMoistureData = () => {
  const [moisture, setMoisture] = useState(null);

  useEffect(() => {
    const moistureRef = ref(database, "padMoistureData"); // Change the reference to "padMoistureData"
    onValue(moistureRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lastEntryKey = Object.keys(data).pop();
        setMoisture(data[lastEntryKey].moisture);
      }
    });
  }, []);

  return (
    <div className="pad-moisture-container">
      <h1 className="pad-moisture-heading">Pad Moisture Data</h1>
      {moisture !== null ? (
        <p className="pad-moisture-value">Current Moisture Level: {moisture}%</p>
      ) : (
        <p className="loading-text">Loading moisture data...</p>
      )}
    </div>
  );
};

export default PadMoistureData;

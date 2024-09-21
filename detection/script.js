// Simulated data for testing (replace real-time Firebase with this for PWA testing)
const simulatedData = {
    "-O7Hcs6J_buG7s1FwxfD": { moisture: 800 },
    "-O7He7y-K39t2VpWMfgc": { moisture: 500 },
    "-O7HeAWEMzu8X-iJmrYf": { moisture: 1100 },
    "-O7HeD9fPgfI8V8O_htz": { moisture: 1200 },
    "-O7HeFeQGxxRTZqXpxfL": { moisture: 400 }
};

// Function to simulate data updates
function simulateDataUpdates() {
    const keys = Object.keys(simulatedData);
    
    // Every 3 seconds, update a random moisture level
    setInterval(() => {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomMoistureValue = Math.floor(Math.random() * 1500); // Random value between 0 and 1500
        simulatedData[randomKey].moisture = randomMoistureValue;
        console.log(`Updated moisture for ${randomKey}: ${randomMoistureValue}`);
        displayData(simulatedData); // Update the UI with new data
    }, 3000); // 3 seconds interval
}

// Function to display the data in the UI
function displayData(data) {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = ''; // Clear any previous data

    let moistureDetected = false; // Flag to track if any moisture exceeds the threshold

    for (const key in data) {
        if (data[key].moisture !== undefined) {
            const moistureLevel = data[key].moisture; // Access the moisture value
            const li = document.createElement('li');
            li.textContent = `Key: ${key}, Moisture Level: ${moistureLevel}`;
            dataList.appendChild(li); // Append the data to the list

            // Check if moisture exceeds a critical threshold
            if (moistureLevel > 1000) {
                moistureDetected = true;
            }
        }
    }

    // Update the status message based on moisture detection
    if (moistureDetected) {
        document.getElementById('status').textContent = '⚠️ Leakage Detected! Please change the pad.';
        document.getElementById('status').style.color = '#d60000'; // Red alert color
    } else {
        document.getElementById('status').textContent = 'Moisture level is normal.';
        document.getElementById('status').style.color = '#28a745'; // Green for normal status
    }
}

// Start the simulation when the page loads
simulateDataUpdates();

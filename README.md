🛠️ Installation & Setup
Follow these steps to set up the project locally:

Clone the Repository:

bash
Copy code
git clone https://github.com/harmannanda1234/Matrix_PWA_INDIANITES.git
Navigate to the Project Directory:

bash
Copy code
cd frontend
Install Dependencies:

Using npm:

bash
Copy code
npm install
Or yarn:

bash
Copy code
yarn install
Set up the Environment:

Create a .env file in the root directory with the necessary API keys for AWS and other services.

Start the Application:

For the web app:

bash
Copy code
npm start
The app will run at http://localhost:3000.

For the AI model and IoT setup, follow the instructions in the /iot and /ai-model folders respectively.

🖼️ Screenshots
PWA:

![alt text](image.png)

![alt text](<Screenshot (54).png>) 

![alt text](<Screenshot (59).png>)

![alt text](<Screenshot (57).png>)

![alt text](<Screenshot (58).png>)


Dashboard with Health Insights


📈 AI Model Overview
The AI model predicts the user’s menstrual health status by analyzing moisture levels and past cycle data. It uses machine learning to detect irregularities and suggest necessary precautions.

Key AI components:

Moisture Detection: Predicts the level of pad saturation.
Period Delay Analysis: Monitors for potential irregularities in the user's cycle.

AI-MODEL MODULES REQUIRED:
import streamlit 
import pandas 
import numpy 
import seaborn 
import matplotlib.pyplot 
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import xgboost as xgb
from sklearn.model_selection import GridSearchCV

SCREENSHOTS (Machine Learning Model):

![alt text](image-4.png)

![alt text](image-1.png) 

![alt text](image-2.png)

![alt text](image-3.png)



📡 IoT Integration
The ESP-32 module streams real-time data to the AWS cloud, enabling users to monitor their pad’s status directly from the web app.

To set up the IoT device:

Arduino IDE
USB-TYPE CABLE
Flash the firmware to your ESP-32.
Connect it to your Wi-Fi network.
Ensure the device sends data to the firbase db Core.

Key IOT components:

ESP Board Manager Download
FireBase ESP Support header file

SCREENSHOTS:

![alt text](<Screenshot (60).png>)

![alt text](IMG-20240921-WA0014.jpg)

![alt text](IMG-20240921-WA0017.jpg)



🤝 Contributing
We welcome contributions to the Smart Pad Kit. To contribute:

Fork the repo
Create a new branch for your feature/bugfix
Submit a pull request detailing your changes

📝 License
This project is licensed under the MIT License. See the LICENSE file for more details.

We hope the Smart Pad Kit contributes to better menstrual hygiene management for women around the world. Feel free to reach out with any questions or feedback!

Contact
TEAM:INDIANITES (LAB 5)
Email: hxrmn03@gmail.com
GitHub: harmannanda1234


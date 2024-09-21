#include <WiFi.h>
#include <FirebaseESP32.h>

// Wi-Fi credentials
const char* ssid = "iPhone"; // Replace with your Wi-Fi SSID
const char* password = "12345678"; // Replace with your Wi-Fi password

// Firebase project details
FirebaseConfig config;
FirebaseAuth auth;

FirebaseData firebaseData;
FirebaseJson json;

// Sensor pin
const int soilMoisturePin = 34; // Replace with GPIO pin for the soil moisture sensor

void setup() {
  // Initialize Serial Monitor
  Serial.begin(115200);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected to Wi-Fi");

  // Set up Firebase configuration
  config.host = "coeval-e9df8-default-rtdb.asia-southeast1.firebasedatabase.app"; // Firebase Realtime Database URL
  config.api_key = "AIzaSyCVhW4RCZMlRN1wJBbo2vddkBBZkD7_RqM";  // Replace with your Firebase API Key

  // Set up Firebase authentication (optional, if not needed for anonymous access)
  auth.user.email = "hxrmn03@gmail.com"; // Your email
  auth.user.password = "12345678";       // Your password

  // Initialize Firebase
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true); // Reconnect if Wi-Fi connection is lost
}

void loop() {
  // Read analog value from soil moisture sensor
  int moistureValue = analogRead(soilMoisturePin);

  // Convert analog value to percentage
  int moisturePercentage = map(moistureValue, 0, 4095, 1500, 0); // Adjust the range

  // Print moisture percentage to serial monitor
  Serial.print("Moisture: ");
  Serial.print(moisturePercentage);
  Serial.println("%");

  // Create JSON object to hold the data
  json.set("moisture", moisturePercentage);

  // Push data to Firebase under the "moistureData" path
  if (Firebase.pushJSON(firebaseData, "/moistureData", json)) {
    Serial.println("Data pushed successfully");
  } else {
    Serial.println("Error pushing data: " + firebaseData.errorReason());
  }

  delay(10000); // Delay between readings
}

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhW4RCZMlRN1wJBbo2vddkBBZkD7_RqM",
  authDomain: "your-firebase-auth-domain",
  databaseURL: "https://coeval-e9df8-default-rtdb.asia-southeast1.firebasedatabase.app", // Replace with your Realtime Database URL
  projectId: "coeval-e9df8",
//   storageBucket: "your-firebase-storage-bucket",
  messagingSenderId: "306697613670"
//   appId: "your-firebase-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, push, onValue };

// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ← Add this

const firebaseConfig = {
  apiKey: "AIzaSyAx0tlSB6L7xzLQHzI-u-FCtl7hUIEE468",
  authDomain: "assignment-1a1f6.firebaseapp.com",
  projectId: "assignment-1a1f6",
  storageBucket: "assignment-1a1f6.appspot.com", // Note: fix typo in original
  messagingSenderId: "848340848409",
  appId: "1:848340848409:web:64305eb1ffca8801f43f88",
  measurementId: "G-D4L12ZDZG0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // ← Add this

export { db }; // ← Export this

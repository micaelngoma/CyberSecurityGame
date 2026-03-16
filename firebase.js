// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPblfj_MaWnW_PPA1e-WTeUzcDqyInuEI",
  authDomain: "cybersecuritygame-68e77.firebaseapp.com",
  projectId: "cybersecuritygame-68e77",
  storageBucket: "cybersecuritygame-68e77.firebasestorage.app",
  messagingSenderId: "169000078818",
  appId: "1:169000078818:web:9ebe327883c395d488bdbb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


// Export services so other scripts can use them
export { app, auth, db, storage };

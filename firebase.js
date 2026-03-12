// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCPblfj_MaWnW_PPA1e-WTeUzcDqyInuEI",
  authDomain: "cybersecuritygame-68e77.firebaseapp.com",
  projectId: "cybersecuritygame-68e77",
  storageBucket: "cybersecuritygame-68e77.firebasestorage.app",
  messagingSenderId: "169000078818",
  appId: "1:169000078818:web:9ebe327883c395d488bdbb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

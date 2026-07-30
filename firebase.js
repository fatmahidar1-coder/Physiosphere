// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
  getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM8PLZtP0XLM7XwygBZu4sqUVri8_YOpc",
  authDomain: "physiosphere-db35b.firebaseapp.com",
  projectId: "physiosphere-db35b",
  storageBucket: "physiosphere-db35b.firebasestorage.app",
  messagingSenderId: "179148901369",
  appId: "1:179148901369:web:998d1b4820a309748fcb28"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Authentication
const auth = getAuth(app);


// Export for other files
export { app, auth };


console.log("✅ Firebase Connected");
console.log("✅ Authentication Ready");
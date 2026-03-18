// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4CqfixTFR60qB3pDi3ZRng3O4sDvp8lI",
  authDomain: "youware-website.firebaseapp.com",
  projectId: "youware-website",
  storageBucket: "youware-website.firebasestorage.app",
  messagingSenderId: "1079830547145",
  appId: "1:1079830547145:web:1b30cc337a4bd340a51b18",
  measurementId: "G-QC9CDC35Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Analytics is optional; avoid crashing in non-browser environments.
try {
  getAnalytics(app);
} catch {
  // no-op
}

// ✅ Initialize Auth
export const auth = getAuth(app);

// ✅ Initialize Firestore
export const db = getFirestore(app);

// ✅ Initialize Storage
export const storage = getStorage(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA4CqfixTFR60qB3pDi3ZRng3O4sDvp8lI",
//   authDomain: "youware-website.firebaseapp.com",
//   projectId: "youware-website",
//   storageBucket: "youware-website.firebasestorage.app",
//   messagingSenderId: "1079830547145",
//   appId: "1:1079830547145:web:1b30cc337a4bd340a51b18",
//   measurementId: "G-QC9CDC35Y3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
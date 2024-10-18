import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBy7guwB4kUtsXRuSj5xoF3Mkwq75mAiJ4",
  authDomain: "desert-safari-10c66.firebaseapp.com",
  projectId: "desert-safari-10c66",
  storageBucket: "desert-safari-10c66.appspot.com",
  messagingSenderId: "14944708499",
  appId: "1:14944708499:web:8836d103bccff79cae6a66"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);

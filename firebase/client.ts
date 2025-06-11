// Web SDK - frontend use
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // ❌ you used 'firebase-admin/auth' which is backend-only

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAoXzRRv72N1TTCZJDyoGbp5mbALkNbKMg",
    authDomain: "echohire-2353f.firebaseapp.com",
    projectId: "echohire-2353f",
    storageBucket: "echohire-2353f.appspot.com", // ✅ fixed `.app` typo
    messagingSenderId: "381059643485",
    appId: "1:381059643485:web:8b9a0cfa524ef809cb75b4",
    measurementId: "G-PF6VVCYPN1"
};

// Initialize app only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Optionally, initialize analytics if in browser
// const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export const auth = getAuth(app);
export const db = getFirestore(app);

// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCLHVXQTA9cMU7jsh_A62QcqBehRFIJY30",
    authDomain: "blootrue-dashboard.firebaseapp.com",
    projectId: "blootrue-dashboard",
    storageBucket: "blootrue-dashboard.firebasestorage.app",
    messagingSenderId: "315590090770",
    appId: "1:315590090770:web:b83ba451501767bc2df8cb",
};

const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export default app;
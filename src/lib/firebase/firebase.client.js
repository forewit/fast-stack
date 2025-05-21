// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_APIKEY,
  authDomain: import.meta.env.FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECTID,
  storageBucket: import.meta.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.FIREBASE_APPID
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}

export const auth = getAuth(firebaseApp);
export const db = initializeFirestore(firebaseApp, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
})

if (process.env.NODE_ENV !== 'production') {
  connectFirestoreEmulator(db, 'localhost', 8080);
}
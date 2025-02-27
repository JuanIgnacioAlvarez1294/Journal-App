import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBwHfY4oB3d3IZSMKf0FBz4E3x1iLB84So",
  authDomain: "react-cursos-ca32e.firebaseapp.com",
  projectId: "react-cursos-ca32e",
  storageBucket: "react-cursos-ca32e.firebasestorage.app",
  messagingSenderId: "895172301689",
  appId: "1:895172301689:web:b5bb24db90abfe2c1b15a8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
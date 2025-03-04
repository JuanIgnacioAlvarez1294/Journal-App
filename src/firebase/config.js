import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// // Dev / producción
// const firebaseConfig = {
//   apiKey: "AIzaSyBwHfY4oB3d3IZSMKf0FBz4E3x1iLB84So",
//   authDomain: "react-cursos-ca32e.firebaseapp.com",
//   projectId: "react-cursos-ca32e",
//   storageBucket: "react-cursos-ca32e.firebasestorage.app",
//   messagingSenderId: "895172301689",
//   appId: "1:895172301689:web:b5bb24db90abfe2c1b15a8"
// };

// Testing

// const firebaseConfig = {
//   apiKey: "AIzaSyCVbClNMif8ccnTow0g4HIqvskhpGwJWko",
//   authDomain: "tracker-b7357.firebaseapp.com",
//   projectId: "tracker-b7357",
//   storageBucket: "tracker-b7357.firebasestorage.app",
//   messagingSenderId: "652934945419",
//   appId: "1:652934945419:web:ae3268a186b31f86b4528e"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
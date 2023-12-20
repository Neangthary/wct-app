// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARSvcS2Bfkp7Gj9hEqSXaUj8QaZREOoQ8",
  authDomain: "next-firebase-10bc3.firebaseapp.com",
  projectId: "next-firebase-10bc3",
  storageBucket: "next-firebase-10bc3.appspot.com",
  messagingSenderId: "712292943588",
  appId: "1:712292943588:web:dd849cc6f163c410f40ef1",
  measurementId: "G-GVSVLLXDZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
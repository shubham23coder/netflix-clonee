import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_KYGm29DZw79oUzLyEtHF03FF4W5IDjU",
  authDomain: "react-auth-6788d-b0563.firebaseapp.com",
  projectId: "react-auth-6788d-b0563",
  storageBucket: "react-auth-6788d-b0563.firebasestorage.app",
  messagingSenderId: "543504837904",
  appId: "1:543504837904:web:49260025033c86bc6e0995",
  measurementId: "G-HSS5DGHNE3",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-67ed8.firebaseapp.com",
  projectId: "mern-blog-67ed8",
  storageBucket: "mern-blog-67ed8.appspot.com",
  messagingSenderId: "438928675172",
  appId: "1:438928675172:web:3709e2dffe2a4b3cfd6a71"
}; 

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
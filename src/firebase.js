// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPDYdMQfvuyjaMtgDSQo_6P0K5QF-n1bI",
  authDomain: "fitzz-390c1.firebaseapp.com",
  projectId: "fitzz-390c1",
  storageBucket: "fitzz-390c1.firebasestorage.app",
  messagingSenderId: "998214075392",
  appId: "1:998214075392:web:fc52743b59ed407885c4e5",
  measurementId: "G-5CBY1LCKTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
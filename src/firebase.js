
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';




const firebaseConfig = {
  apiKey: import.meta.env.VITE_RAPIDAPI_KEY,
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
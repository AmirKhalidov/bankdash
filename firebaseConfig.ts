import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdG5rdliDgpN0E9COTDECXfeDEarHm1ZM",
  authDomain: "bankdash-cb782.firebaseapp.com",
  projectId: "bankdash-cb782",
  storageBucket: "bankdash-cb782.firebasestorage.app",
  messagingSenderId: "761319690696",
  appId: "1:761319690696:web:e2c82772ae22ace5bc30fd",
  measurementId: "G-JFC67Q5YXS",
};

// const login = 'charlene@example.com'
// const password = 'charlenereed'

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

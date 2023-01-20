import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeZpxj1xil9LH1GVZ6NWRJmREmYojnytc",
  authDomain: "books-stack-48272.firebaseapp.com",
  projectId: "books-stack-48272",
  storageBucket: "books-stack-48272.appspot.com",
  messagingSenderId: "616866540106",
  appId: "1:616866540106:web:5b78f8b154a57e2590d4b3",
  measurementId: "G-7FS63YYT60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
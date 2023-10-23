
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCNp-ZUIMmJ90o1UYGnGVFBZzpJ3eXEIm4",
  authDomain: "reactblog-a56bb.firebaseapp.com",
  projectId: "reactblog-a56bb",
  storageBucket: "reactblog-a56bb.appspot.com",
  messagingSenderId: "256642633392",
  appId: "1:256642633392:web:09a940a3a32266163af575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
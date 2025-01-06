import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwgy8AnFyNzd1VV0F_qloP14Hgl0EXqzs",
  authDomain: "gi-care.firebaseapp.com",
  projectId: "gi-care",
  storageBucket: "gi-care.appspot.com",
  messagingSenderId: "151965308454",
  appId: "1:151965308454:web:4ca3beb6d4600d8a5ff8e7",
  measurementId: "G-J8P5ZNN1NN",
  databaseURL: "https://gi-care.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

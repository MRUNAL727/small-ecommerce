const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBNsfqJ_GF8iaGBnivP-i-8TCpto1ERe40",
  authDomain: "ecommerce-2b45a.firebaseapp.com",
  projectId: "ecommerce-2b45a",
  storageBucket: "ecommerce-2b45a.appspot.com",
  messagingSenderId: "74730826940",
  appId: "1:74730826940:web:6b57143f7fce9f60d9f4b9",
  measurementId: "G-0GCT0WJ6PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firestore();
const User = db.collection("Users");
module.exports = User;
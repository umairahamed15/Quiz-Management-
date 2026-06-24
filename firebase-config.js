// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAPofzFJVht6JKUtyhohgcwIFJ4yoFaFo",
  authDomain: "quiz-management-f99c8.firebaseapp.com",
  projectId: "quiz-management-f99c8",
  storageBucket: "quiz-management-f99c8.firebasestorage.app",
  messagingSenderId: "350227269094",
  appId: "1:350227269094:web:9f13871c288a9c31c90227",
  measurementId: "G-TVL87KTSJD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiBhkUMaJYZZdvlOLHJnTbG0cIDPZDmIw",
  authDomain: "sunny-diorama-282709.firebaseapp.com",
  projectId: "sunny-diorama-282709",
  storageBucket: "sunny-diorama-282709.appspot.com",
  messagingSenderId: "702543771760",
  appId: "1:702543771760:web:5bb5bf712d5a9a34bf5cb5",
  measurementId: "G-4YKBG8RWGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
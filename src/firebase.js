import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwJUKfBQvnRjIq2rPeoHMCDZGbk4OtVPw",
  authDomain: "i-learn-9af5b.firebaseapp.com",
  projectId: "i-learn-9af5b",
  storageBucket: "i-learn-9af5b.firebasestorage.app",
  messagingSenderId: "771135529013",
  appId: "1:771135529013:web:833b0d041e361ae172117c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
}

export {auth}
/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwJUKfBQvnRjIq2rPeoHMCDZGbk4OtVPw",
  authDomain: "i-learn-9af5b.firebaseapp.com",
  projectId: "i-learn-9af5b",
  storageBucket: "i-learn-9af5b.firebasestorage.app",
  messagingSenderId: "771135529013",
  appId: "1:771135529013:web:833b0d041e361ae172117c",
  measurementId: "G-C89NVMPVEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/
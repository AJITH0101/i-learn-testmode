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



export {auth}

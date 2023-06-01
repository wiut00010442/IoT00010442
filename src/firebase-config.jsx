// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOmy-2dMnPWEyAAW5YcQoaScokEKA6ujE",
  authDomain: "iot-9547e.firebaseapp.com",
  databaseURL: "https://iot-9547e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iot-9547e",
  storageBucket: "iot-9547e.appspot.com",
  messagingSenderId: "471935980269",
  appId: "1:471935980269:web:7109ef6f2203f7b5b872e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
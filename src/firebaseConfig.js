// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-0MWA5zvIPYhpg707TMJtogMldSg25M4",
  authDomain: "linkdln-clone-a4c46.firebaseapp.com",
  projectId: "linkdln-clone-a4c46",
  storageBucket: "linkdln-clone-a4c46.appspot.com",
  messagingSenderId: "652546967810",
  appId: "1:652546967810:web:21e85df502fde400a61a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }
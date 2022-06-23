// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCysAyWEpvmlL_rTHjQNTwo5BgENnRd_gk",
  authDomain: "project-petstore-f9f71.firebaseapp.com",
  projectId: "project-petstore-f9f71",
  storageBucket: "project-petstore-f9f71.appspot.com",
  messagingSenderId: "880490150814",
  appId: "1:880490150814:web:2faf5cf710c2713d3b748f",
  measurementId: "G-V5MGTP2T39"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const productsRef = db.ref('products');

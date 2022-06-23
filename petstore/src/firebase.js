import { initializeApp } from 'firebase/firebase';

const app = initializeApp({
  apiKey: "AIzaSyCysAyWEpvmlL_rTHjQNTwo5BgENnRd_gk",
  authDomain: "project-petstore-f9f71.firebaseapp.com",
  projectId: "project-petstore-f9f71",
  storageBucket: "project-petstore-f9f71.appspot.com",
  messagingSenderId: "880490150814",
  appId: "1:880490150814:web:2faf5cf710c2713d3b748f",
  measurementId: "G-V5MGTP2T39"
});

export const db = app.database();

export const productsRef = db.ref('products');

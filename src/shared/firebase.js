import firebase from "firebase";
import "firebase/firebase-firestore";
import "firebase/firebase-storage";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABN5SdediB24GNKQ8Lh_M0bZpywc3FPgs",
  authDomain: "infinitysolstice-d250a.firebaseapp.com",
  databaseURL:
    "https://infinitysolstice-d250a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "infinitysolstice-d250a",
  storageBucket: "infinitysolstice-d250a.appspot.com",
  messagingSenderId: "517762461991",
  appId: "1:517762461991:web:addc6a71173a07d200f902",
  measurementId: "G-CYSJXKQC1D",
});

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

export default firebase;

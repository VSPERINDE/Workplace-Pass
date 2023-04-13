import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCGIFMFsRamwzqIj5TgrP4w_tOD5mnHjB8",
  authDomain: "office-pass-fd687.firebaseapp.com",
  projectId: "office-pass-fd687",
  storageBucket: "office-pass-fd687.appspot.com",
  messagingSenderId: "552236221648",
  appId: "1:552236221648:web:db2922fe521a74b7cf8ad5",
};

initializeApp(firebaseConfig);

export const database = getFirestore();

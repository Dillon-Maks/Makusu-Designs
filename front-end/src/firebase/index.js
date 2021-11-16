import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCotInKIJ7w21_iG_8KJ8an5rnb8W_c2r4",
  authDomain: "makusu-designs-dev.firebaseapp.com",
  projectId: "makusu-designs-dev",
  storageBucket: "makusu-designs-dev.appspot.com",
  messagingSenderId: "1045915902041",
  appId: "1:1045915902041:web:beaa326211f0ba98c2d148"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUs0k6MW_KrKm3R_6vM3haMTla8D8bdsY",
  authDomain: "appcripto-1557b.firebaseapp.com",
  projectId: "appcripto-1557b",
  storageBucket: "appcripto-1557b.appspot.com",
  messagingSenderId: "1059647801604",
  appId: "1:1059647801604:web:7083c88a1b8d7d2956a851"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
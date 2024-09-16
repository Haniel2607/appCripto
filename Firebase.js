import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLcRCOoV9aoRq4vM7QLX0zkpZtLQTW3cg",
  authDomain: "appcriptomoedas-49ed0.firebaseapp.com",
  projectId: "appcriptomoedas-49ed0",
  storageBucket: "appcriptomoedas-49ed0.appspot.com",
  messagingSenderId: "940287541823",
  appId: "1:940287541823:web:ac97c5a7e19f8afba06e8a"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
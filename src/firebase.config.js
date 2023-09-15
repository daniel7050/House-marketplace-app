import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ogFpG5jetxyca2NLPif-yxZDk69AdsY",
  authDomain: "house-marketplace-app-98447.firebaseapp.com",
  projectId: "house-marketplace-app-98447",
  storageBucket: "house-marketplace-app-98447.appspot.com",
  messagingSenderId: "893595159881",
  appId: "1:893595159881:web:6d6ffde402c8c220ef5e98"
};

initializeApp(firebaseConfig)
export const db = getFirestore()
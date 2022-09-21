// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUVYH7QM1P9t65afMfnx69BagX2JK3VMU",
    authDomain: "kvotheapp.firebaseapp.com",
    projectId: "kvotheapp",
    storageBucket: "kvotheapp.appspot.com",
    messagingSenderId: "1007539780087",
    appId: "1:1007539780087:web:2162caa8dc2bb4eed5d6f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
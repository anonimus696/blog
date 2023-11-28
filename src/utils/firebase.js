// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "mainblog-5e71f.firebaseapp.com",
    projectId: "mainblog-5e71f",
    storageBucket: "mainblog-5e71f.appspot.com",
    messagingSenderId: "790550435657",
    appId: "1:790550435657:web:3db4324b216b461fb72c98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
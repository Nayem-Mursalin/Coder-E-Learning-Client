// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApUxKOyeWv8Fy2Upt5GOfFcIYWg_KKHaQ",
    authDomain: "coder-e-learning.firebaseapp.com",
    projectId: "coder-e-learning",
    storageBucket: "coder-e-learning.appspot.com",
    messagingSenderId: "875262911989",
    appId: "1:875262911989:web:4af6efbcfb332fc8ca2cbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
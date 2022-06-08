// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB5pc7XOoo-AQgPJ_ndw2qG-rrstlcD3c",
    authDomain: "manufacturer-d2a93.firebaseapp.com",
    projectId: "manufacturer-d2a93",
    storageBucket: "manufacturer-d2a93.appspot.com",
    messagingSenderId: "659210076989",
    appId: "1:659210076989:web:6eeddb348df4cef532fb54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
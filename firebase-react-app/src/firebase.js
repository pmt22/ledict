// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQ82SWRKrRenzjVoDddQU9cejsbsw1-FY",
    authDomain: "ledict-test.firebaseapp.com",
    projectId: "ledict-test",
    storageBucket: "ledict-test.appspot.com",
    messagingSenderId: "895245250742",
    appId: "1:895245250742:web:6710aa041651ffd1fff617",
    measurementId: "G-Z9JVDR6KK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
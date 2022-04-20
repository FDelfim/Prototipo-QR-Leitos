import firebase from "firebase"
import "firebase/storage"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCUrnlc2GWd1CqIgelEU05ExxdVllBUhUU",
    authDomain: "bdleitosja.firebaseapp.com",
    projectId: "bdleitosja",
    storageBucket: "bdleitosja.appspot.com",
    messagingSenderId: "818105979304",
    appId: "1:818105979304:web:10daaec4f85dfca2454d9d",
    measurementId: "G-GN7H9K6VQV"
};

const app = initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database
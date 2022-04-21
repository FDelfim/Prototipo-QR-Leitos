import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCUrnlc2GWd1CqIgelEU05ExxdVllBUhUU",
    authDomain: "bdleitosja.firebaseapp.com",
    projectId: "bdleitosja",
    storageBucket: "bdleitosja.appspot.com",
    messagingSenderId: "818105979304",
    appId: "1:818105979304:web:10daaec4f85dfca2454d9d",
    measurementId: "G-GN7H9K6VQV"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const database = app.firestore()

export default database
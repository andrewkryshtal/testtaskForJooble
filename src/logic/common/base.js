import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const email = process.env.REACT_APP_FIREBASE_EMAIL;
const password = process.env.REACT_APP_FIREBASE_PASSWORD;

const app = firebase.initializeApp(firebaseConfig);
const base = firebase.firestore(app);

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    throw error;
})


export { base } 
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAPWFJvXdSfRkObr_IJ2159ttj1LbhNm0Q",
    authDomain: "fer-commerce.firebaseapp.com",
    databaseURL: "https://fer-commerce.firebaseio.com",
    projectId: "fer-commerce",
    storageBucket: "fer-commerce.appspot.com",
    messagingSenderId: "458616122292",
    appId: "1:458616122292:web:7bf645a06bbd9ae669e0e1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 
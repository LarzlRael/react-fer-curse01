import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDlovDui4T5Qp8UZAEwjT28Xrt34VMhYWY",
    authDomain: "react-app-curse.firebaseapp.com",
    projectId: "react-app-curse",
    storageBucket: "react-app-curse.appspot.com",
    messagingSenderId: "650783277949",
    appId: "1:650783277949:web:da7549f03b2f8558a68214"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}
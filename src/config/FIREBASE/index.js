import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBvxWoMP8prRg_ec8LdTMvjZlEaox7mu3c",
    authDomain: "noteapp-a7e3d.firebaseapp.com",
    projectId: "noteapp-a7e3d",
    storageBucket: "noteapp-a7e3d.appspot.com",
    messagingSenderId: "331919752063",
    appId: "1:331919752063:web:da1472d06e4bbe173b384a"
});

const FIREBASE = firebase;

export default FIREBASE;
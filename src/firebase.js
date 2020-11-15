// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2B5Yt5k3ebN344aRvWKJ9FmKaqfrCuWo",
    authDomain: "todo-app-be944.firebaseapp.com",
    databaseURL: "https://todo-app-be944.firebaseio.com",
    projectId: "todo-app-be944",
    storageBucket: "todo-app-be944.appspot.com",
    messagingSenderId: "757028546588",
    appId: "1:757028546588:web:49c9b6ddbb4d24af6417d9",
    measurementId: "G-TNMM32ZGB1"
});

const db = firebaseApp.firestore();


export default db;
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCogpFDzV-Bd1LuWl9XNYbQGSUL8bsArFc",
    authDomain: "chat-box-adazolhub.firebaseapp.com",
    projectId: "chat-box-adazolhub",
    storageBucket: "chat-box-adazolhub.appspot.com",
    messagingSenderId: "635634774800",
    appId: "1:635634774800:web:ad9c64baa487e168a46b95",
    measurementId: "G-P93G1EPWTG"
});

const db = firebaseApp.firestore();


export default db ;
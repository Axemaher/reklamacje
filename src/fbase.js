import Rebase from "re-base";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwZAtAfPOIMJLJ4qhI82uLxMErt20q4PY",
    authDomain: "reklamcje-d6fc9.firebaseapp.com",
    databaseURL: "https://reklamcje-d6fc9.firebaseio.com",
    projectId: "reklamcje-d6fc9",
    storageBucket: "reklamcje-d6fc9.appspot.com",
    messagingSenderId: "157705756440"
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
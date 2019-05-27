import Rebase from 're-base';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmba8Ng5BYywfRuH2BT-1-aEAfJ-SkP1M",
    authDomain: "catch-of-the-day-c778d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-c778d.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
import firebase from 'firebase'
require("@firebase/firestore")
var  firebaseConfig = { apiKey: "AIzaSyCsJY7LNXfXlP11RgrobYLRiF4BLhyQPRM",
 authDomain: "ankur-story-hub.firebaseapp.com",
 projectId: "ankur-story-hub",
  storageBucket: "ankur-story-hub.appspot.com",
   messagingSenderId: "1042327846894",
    appId: "1:1042327846894:web:49116f2f76d610368fd8ff" };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
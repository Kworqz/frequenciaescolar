 import  firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDN-Q4gU4Ziq9IbcBP9ffPwdwW6hYbhLYg",
  authDomain: "freqescolar.firebaseapp.com",
  projectId: "freqescolar",
  storageBucket: "freqescolar.appspot.com",
  messagingSenderId: "792941703711",
  appId: "1:792941703711:web:22d7a037d6d6a94eb4db2a"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  
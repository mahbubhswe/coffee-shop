import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBRNnbQ0qmtIZSU3g2ww1gGSSsqUIwqRnE",
  authDomain: "coffee-shop-23419.firebaseapp.com",
  projectId: "coffee-shop-23419",
  storageBucket: "coffee-shop-23419.appspot.com",
  messagingSenderId: "12516902353",
  appId: "1:12516902353:web:1a081bb97ef255618f8cf0",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };

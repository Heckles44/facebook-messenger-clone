import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxQX-4xXkpD5Dy4LSysGaIy45eOUlfmOI",
  authDomain: "facebook-messenger-clone-6e960.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-6e960.firebaseio.com",
  projectId: "facebook-messenger-clone-6e960",
  storageBucket: "facebook-messenger-clone-6e960.appspot.com",
  messagingSenderId: "176706628906",
  appId: "1:176706628906:web:aa4269013bc3542f298253",
  measurementId: "G-H0B9QQY7N2",
});

const db = firebaseApp.firestore();

export default db;

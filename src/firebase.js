import firebase from "firebase"

  //var firebaseConfig = {
  //  apiKey: "AIzaSyBxTC-W1fLq-tyDEnU1dsikh4MpBe0n8z8",
  //  authDomain: "bt3103-week-6-15608.firebaseapp.com",
  //  projectId: "bt3103-week-6-15608",
  //  storageBucket: "bt3103-week-6-15608.appspot.com",
  //  messagingSenderId: "465290790597",
  //  appId: "1:465290790597:web:2939ccdb98de24602492ac",
  //  measurementId: "G-DW97GDESSR"
  //};

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBcqgpYNgbTFEP-Rc2jBDpEhtbDegGrEBM",
  authDomain: "bt3103-week-6-e6b21.firebaseapp.com",
  projectId: "bt3103-week-6-e6b21",
  storageBucket: "bt3103-week-6-e6b21.appspot.com",
  messagingSenderId: "1020519715470",
  appId: "1:1020519715470:web:a9f14d203f5a5aaa94efdf",
  measurementId: "G-2YFMMDYWVV"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyArVBl2QK7L6HRcp9w-ZdVeuoM7zUb-bkE",
  authDomain: "wamessage-4fcbe.firebaseapp.com",
  projectId: "wamessage-4fcbe",
  storageBucket: "wamessage-4fcbe.appspot.com",
  messagingSenderId: "691975853521",
  appId: "1:691975853521:web:7340ff2af2f61d884d7cf0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
// using the google auth provider

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

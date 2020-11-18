import firebase from "firebase/app";
// import "./waldo.jpg"
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/storage";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyB9bL7ISHnLXh5xTMbcQTL_G_iMKjI7xAg",
    authDomain: "waldo-543d1.firebaseapp.com",
    databaseURL: "https://waldo-543d1.firebaseio.com",
    projectId: "waldo-543d1",
    storageBucket: "waldo-543d1.appspot.com",
    messagingSenderId: "445902802665",
    appId: "1:445902802665:web:73eb24674ca1164c8f2a78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore()
  const projectStorage = firebase.storage()
  const storageRef = projectStorage.ref()
  const imageRef = storageRef.child("waldo.jpg")
  // .getDownloadURL().then(function(url) {
  //   projectFirestore.collection("images").add({url})
  // })


  export {projectFirestore, projectStorage, imageRef}
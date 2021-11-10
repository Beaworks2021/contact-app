
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDzWS9G2g-3C41ho5KspQ5B_kAVFI_dXF8",
    authDomain: "users-app-2.firebaseapp.com",
    projectId: "users-app-2",
    storageBucket: "users-app-2.appspot.com",
    messagingSenderId: "608743784820",
    appId: "1:608743784820:web:fc37d0c459d4f1f79d2c21"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
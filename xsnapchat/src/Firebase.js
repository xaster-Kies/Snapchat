import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAZ2KHdjXDJ7YguyDssVgYh-YKmwJjdDsw",
    authDomain: "xsnapchat-d682a.firebaseapp.com",
    projectId: "xsnapchat-d682a",
    storageBucket: "xsnapchat-d682a.appspot.com",
    messagingSenderId: "708943079971",
    appId: "1:708943079971:web:0204422d7bfe75f510df96",
    measurementId: "G-S5T3Z7HD2H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =  firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };
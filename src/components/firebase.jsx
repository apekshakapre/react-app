import firebase from 'firebase';



  // Initialize Firebase
  const config = {
    apiKey:"AIzaSyBZwes_BfD8hNmsZnNCFE8L4XT8ObP4jJo",
    authDomain: "moviesdata-96f8b.firebaseapp.com",
    databaseURL: "https://moviesdata-96f8b.firebaseio.com",
    projectId: "moviesdata-96f8b",
    storageBucket: "",
    messagingSenderId: "494133914905"
  };
  firebase.initializeApp(config)
export default firebase;
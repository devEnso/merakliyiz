import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCo49i0cieCoshhEC0pjhlPhx3rKUxPL2I",
    authDomain: "merakliyiz-76e8f.firebaseapp.com",
    databaseURL: "https://merakliyiz-76e8f.firebaseio.com",
    projectId: "merakliyiz-76e8f",
    storageBucket: "merakliyiz-76e8f.appspot.com",
    messagingSenderId: "52356873201",
    appId: "1:52356873201:web:e49e751fb5b6cf24d8a250",
    measurementId: "G-X8MNLGC7HH"
  };

  firebase.initializeApp(config);

  export default firebase;
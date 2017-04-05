import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyAfSurrWoFQLiX10NAlP5PkNeJOIm5346E",
  authDomain: "anygame-f7326.firebaseapp.com",
  databaseURL: "https://anygame-f7326.firebaseio.com",
  projectId: "anygame-f7326",
  storageBucket: "anygame-f7326.appspot.com",
  messagingSenderId: "198011797363"
};


exports.initFirebase = () => {
  return firebase.initializeApp(config);
};

exports.connectDatabase = () => {
  return firebase.database();
};

exports.authClient = () => {
  return firebase.auth();
};

import firebase from 'firebase'

const  firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCzasyXkkMzc0M8gkt4pU9rmM_WhMw6CfA",
  authDomain: "chatv2-edca7.firebaseapp.com",
  projectId: "chatv2-edca7",
  storageBucket: "chatv2-edca7.appspot.com",
  messagingSenderId: "813729764883",
  appId: "1:813729764883:web:dc71497a00048e041a51e6",
  measurementId: "G-343CD7QJYL"
});

const db= firebaseApp.firestore()
const Fire = firebaseApp
export  {db, Fire}

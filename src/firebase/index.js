import firebase from "firebase/app";
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAb-cQjnA4Xo5MmmuhPAOO4AsWgyC6yNT8",
  authDomain: "zootown-frontend.firebaseapp.com",
  databaseURL: "https://zootown-frontend.firebaseio.com",
  projectId: "zootown-frontend",
  storageBucket: "zootown-frontend.appspot.com",
  messagingSenderId: "323908947920",
  appId: "1:323908947920:web:09d2fb64f4c769135a73d5",
  measurementId: "G-8XMJGS9E0Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}

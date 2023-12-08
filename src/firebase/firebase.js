// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2pyiBbkV-FgjoucAog_sR5bW5wvhwFX0",
  authDomain: "omg-lorcana-league.firebaseapp.com",
  projectId: "omg-lorcana-league",
  storageBucket: "omg-lorcana-league.appspot.com",
  messagingSenderId: "340787056730",
  appId: "1:340787056730:web:d511a209aa603d512b0863",
  measurementId: "G-JVZ01PPDQR"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();

export default db;
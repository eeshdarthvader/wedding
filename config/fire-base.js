import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBE9olbFutBMTwe240rN0p0nUoImdq1Z5Q",
  authDomain: "wedding-sanya.firebaseapp.com",
  databaseURL: "https://wedding-sanya-default-rtdb.firebaseio.com",
  projectId: "wedding-sanya",
  storageBucket: "wedding-sanya.appspot.com",
  messagingSenderId: "346616475192",
  appId: "1:346616475192:web:8237d1bd841b6aa29d40cd",
  measurementId: "G-9VJPC25T76",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
export default fire;

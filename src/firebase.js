import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB-whw-n4RvhPQE4EgCbrR8zV9g3_vcWPs",
  authDomain: "linkedin-clone-kankan.firebaseapp.com",
  projectId: "linkedin-clone-kankan",
  storageBucket: "linkedin-clone-kankan.appspot.com",
  messagingSenderId: "998442641594",
  appId: "1:998442641594:web:be90347c3629701d297a83"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
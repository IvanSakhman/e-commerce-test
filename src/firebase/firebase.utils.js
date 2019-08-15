import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiNZYOk4MoM7J4hAPKj1e82H8X82oXLWU",
  authDomain: "e-commerce-db-fe4c8.firebaseapp.com",
  databaseURL: "https://e-commerce-db-fe4c8.firebaseio.com",
  projectId: "e-commerce-db-fe4c8",
  storageBucket: "",
  messagingSenderId: "268487308434",
  appId: "1:268487308434:web:3615846db95e6595"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

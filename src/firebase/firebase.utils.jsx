import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5mfpG-q5ix1_S39gR3jkJk2qeVoB2cUQ",
  authDomain: "crwn-clothing-37d83.firebaseapp.com",
  databaseURL: "https://crwn-clothing-37d83.firebaseio.com",
  projectId: "crwn-clothing-37d83",
  storageBucket: "crwn-clothing-37d83.appspot.com",
  messagingSenderId: "590870421369",
  appId: "1:590870421369:web:054d9fcb62e79b49ef99a8",
  measurementId: "G-WYTV3WH6TG",
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // exists (not exist) have "s"
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

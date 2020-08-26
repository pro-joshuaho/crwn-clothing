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

  // const collection = fireStore.collection("users");
  // const snapshotCol = await collection.get();
  // console.log({
  //   collection: snapshotCol.docs.map((doc) => doc.id),
  // });

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

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = fireStore.collection(collectionKey);
  // const collectionSnapshot = await collectionRef.get();
  // console.log(collectionSnapshot.empty);
  const batch = fireStore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const collectionTransformed = collections.docs.map((collection) => {
    const { title, items } = collection.data();
    return {
      title: title,
      items: items,
      routeName: encodeURI(title),
      id: collection.id,
    };
  });
  return collectionTransformed.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

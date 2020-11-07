import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB1raF_4LD6I6bRQJWuFcvYEDF7K1Kq3eA",
  authDomain: "react-online-shopping.firebaseapp.com",
  databaseURL: "https://react-online-shopping.firebaseio.com",
  projectId: "react-online-shopping",
  storageBucket: "react-online-shopping.appspot.com",
  messagingSenderId: "814351674225",
  appId: "1:814351674225:web:ff31bffd027853e82d64d0",
  measurementId: "G-6Q6JVCEL7E",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await fireStore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("failed to create user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionSnapshotsToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = fireStore.collection(collectionKey);
  // console.log(collectionRef);

  //batch will group all the document and request at once so that either the whole data fails to upload or succeed .
  // prevent adding some data only if any internet connection drops
  const batch = fireStore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const googleSignIn = () => auth.signInWithPopup(googleProvider);

export default firebase;

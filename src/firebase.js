import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const provider = new firebase.auth.GoogleAuthProvider();
  


const firebaseConfig = {
    apiKey: "AIzaSyD8MPcM4votQ1mr8DYG0HT4Gh5VgRtx6uM",
    authDomain: "reactapp-248b5.firebaseapp.com",
    projectId: "reactapp-248b5",
    storageBucket: "reactapp-248b5.appspot.com",
    messagingSenderId: "327854768284",
    appId: "1:327854768284:web:0cc403d111640147db6d59"
  };
  firebase.initializeApp(firebaseConfig);
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };
export const auth = firebase.auth();
export const firestore = firebase.firestore();
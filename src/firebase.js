import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAllCookies, getCookie, removeCookie, setCookie } from './source'
import { useHistory } from "react-router-dom";
const firebaseConfig = {
    apiKey: "AIzaSyD8MPcM4votQ1mr8DYG0HT4Gh5VgRtx6uM",
    authDomain: "reactapp-248b5.firebaseapp.com",
    projectId: "reactapp-248b5",
    storageBucket: "reactapp-248b5.appspot.com",
    messagingSenderId: "327854768284",
    appId: "1:327854768284:web:0cc403d111640147db6d59"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  // let history = useHistory();
  setCookie('cookie', `${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`);
  auth.signInWithPopup(provider).then(()=>{
    window.location.reload(); 
  });
  
  // history.push("/");
  
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL,rooms } = user;
    console.log(user);
    console.log(additionalData)
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        rooms,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
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

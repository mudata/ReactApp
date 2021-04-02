import React, { useState, useContext } from "react";
import { setCookie } from '../source'
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getUserDocument } from "../firebase"
import {
  Link,
  Redirect,
} from '@dollarshaveclub/react-passage'
const SignIn = () => {

  const firestore = firebase.firestore();
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  console.log(email)
  console.log(password)
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((result) => {

      
      const userDocument = getUserDocument(result.user.uid)
      userDocument.then((result2) => {
        console.log(result2)
        if (result2.role) {
           //admin role
          setCookie('cookie2', `${result2.role}`);
        }
        else {
          setCookie('cookie2', `viewer`);
        }
      })







      setCookie('cookie', `${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`);
      setCookie('cookie3', `${result.user.uid}`);

      ToastsStore.success("You have successfully Sign In")
      setTimeout(() => {
        history.push("/");
        window.location.reload();
      }, 2500);

    })
      .catch(error => {
        ToastsStore.error("Error signing in with password and email")
        setTimeout(() => {
          setError("Error signing in with password and email!");
          history.push("/");
          window.location.reload();
        }, 2500);

        console.error("Error signing in with password and email", error);


      });

  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }

  };


  return (
    <div className="LoginForm">
      <ToastsContainer store={ToastsStore} />
      <h1 className="">Sign In</h1>
      <div className="">
        {error !== null && <div className="">{error}</div>}
        <form className="loginF">
          <label htmlFor="userEmail" className="block4">
            Email:
          </label>
          <input
            type="email"
            className="input"
            name="userEmail"
            value={email}
            placeholder="Your Email"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block5">
            Password:
          </label>
          <input
            type="password"
            className="input"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button className="signin-button" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
            Sign in
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
          className="button-google"
          onClick={() => {
            signInWithGoogle();
            history.push("/");
            // window.location.reload();
          }}
        >
          Sign in with Google
        </button>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="register" className="">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="passwordReset" className="">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;



import React, {useState} from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import {
    Link,
    Redirect,
  } from '@dollarshaveclub/react-passage'
const SignIn = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            console.log("return");
            // <Redirect push to="/" />
            localStorage.setItem("id","01010110");
            history.push("/");
        })
        .catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
        
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
          
      };
   

  return (
    <div className="LoginForm">
      <h1 className="">Sign In</h1>
      <div className="">
        {error !== null && <div className = "">{error}</div>}
        <form className="">
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className=""
            name="userEmail"
            value = {email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className=""
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button className="" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
          className=""
          onClick={() => {
            signInWithGoogle();
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

import React, { useState, useContext } from "react";
import { getCookie, removeCookie, setCookie } from '../source'
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
export default function AddRoom() {

    const firestore = firebase.firestore();
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [breakfast, setBreakfast] = useState("");
    const [capacity, setCapacity] = useState('');
    const [name, setName] = useState('');
    const [pets, setPets] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [slug, setSlug] = useState('');
    const [type, setType] = useState('');


    const [error, setError] = useState(null);
    const Create = (name, capacity) => {

        auth.signInWithEmailAndPassword(email, password).then((result) => {

        })
            .catch(error => {
                ToastsStore.error("Error signing in with password and email")
                setError("Error signing in with password and email!");
                console.error("Error signing in with password and email", error);


            });

    };

    const onChangeHandler = (event) => {
        
        const { name, value } = event.currentTarget;
        console.log(value)
        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
        else if (name === 'breakfast') {
            setBreakfast(value);
        }
        else if (name === 'capacity') {
            setCapacity(value);
        }
        else if (name === 'name') {
            setName(value);
        }
        else if (name === 'pets') {
            setPets(value);
        }
        else if (name === 'price') {
            setPrice(value);
        }
        else if (name === 'size') {
            setSize(value);
        }
        else if (name === 'slug') {
            setSlug(value);
        }
        else if (name === 'type') {
            setType(value);
        }

        console.log(name, value)
    };


    return (
        <div className="LoginForm">
            <ToastsContainer store={ToastsStore} />
            <h1 className="">Sign In</h1>
            <div className="">
                {error !== null && <div className="">{error}</div>}
                <form className="loginF">
                    <label htmlFor="userEmail" className="block4">
                        name:
          </label>
                    <input
                        type="email"
                        className="input"
                        name="name"
                        value={name}
                        placeholder=""
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        price:
          </label>
                    <input
                        type="email"
                        className="input"
                        name="price"
                        value={price}
                        placeholder=""
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        size:
          </label>
                    <input
                        type="email"
                        className="input"
                        name="size"
                        value={size}
                        placeholder=""
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        model:
          </label>
                    <input
                        type="email"
                        className="input"
                        name="slug"
                        value={slug}
                        placeholder=""
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        type:
          </label>
                    <input
                        type="email"
                        className="input"
                        name="type"
                        value={type}
                        placeholder=""
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />



                    
                    <label htmlFor="userEmail" className="block4">
                        pets:
          </label>

                    <input
                        type="email"
                        className="input"
                        name="pets"
                        value={pets}
                        placeholder=""
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        Capacity:
          </label>

                    <input
                        type="email"
                        className="input"
                        name="capacity"
                        value={capacity}
                        placeholder=""
                        
                        onChange={(event) => onChangeHandler(event)}
                    />

<label htmlFor="userEmail" className="block4">
                        Breakfast:
          </label>

                    <input
                        type="email"
                        className="input"
                        name="breakfast"
                        value={breakfast}
                        placeholder=""
                        
                        onChange={(event) => onChangeHandler(event)}
                    />


                    
                    <button className="signin-button" onClick={(event) => { Create(event, email, password) }}>
                        Create
          </button>
                </form>
                
            </div>
        </div>
    );
};


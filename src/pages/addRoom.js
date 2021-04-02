import React, { useState, useContext } from "react";
import { getCookie, removeCookie, setCookie } from '../source'
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Template2 from "../components/Template"
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default function AddRoom() {

    const firestore = firebase.firestore();
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [breakfast, setBreakfast] = useState(Boolean);

    const [capacity, setCapacity] = useState('');
    const [name, setName] = useState('');
    const [pets, setPets] = useState(Boolean);
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [slug, setSlug] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [featured, setFeatured] = useState(Boolean);

console.log(breakfast)
    const [error, setError] = useState(null);
    const Create = (event, name, breakfast, capacity, pets, price, size, slug, type,featured,description) => {
        event.preventDefault()
        console.log(name, breakfast, capacity, pets, price, size, slug, type,featured,description)
const obj=Template2(name, breakfast, capacity, pets, price, size, slug, type,featured,description)
console.log(obj);


var raw = JSON.stringify(obj);

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://reactapp-248b5-default-rtdb.firebaseio.com/rooms.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    };

    const onChangeHandler = (event) => {
        console.log(event.target.value)
        const { name, value } = event.currentTarget;
        console.log(value)
        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
        else if (name === 'breakfast') {
            console.log("breakfast")
            if (value == "true") {
                setBreakfast(false);
            } else if (value == "false") {
                setBreakfast(true);
            }

        }
        else if (name === 'capacity') {
            setCapacity(value);
        }
        else if (name === 'name') {
            setName(value);
        }
        else if (name === 'pets') {

            if (value == "true") {
                setPets(false);
            } else if (value == "false") {
                setPets(true);
            }
        }
        else if (name === 'price') {
            setPrice(value);
        }
        else if (name === 'featured') {
            if (value == "true") {
                setFeatured(false)
            } else if (value == "false") {
                setFeatured(true)
            }
        }
        else if (name === 'description') {
            setDescription(value);
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                        type="text"
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
                        type="text"
                        className="input"
                        name="type"
                        value={type}
                        placeholder=""
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />




                    <label htmlFor="userEmail" className="block4">
                        description:
          </label>

                    <input
                        type="text"
                        className="input"
                        name="description"
                        value={description}
                        placeholder=""
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        Capacity:
          </label>

                    <input
                        type="text"
                        className="input"
                        name="capacity"
                        value={capacity}
                        placeholder=""

                        onChange={(event) => onChangeHandler(event)}
                    />

                    <label htmlFor="userEmail" className="block4">
                        Breakfast:
          </label>


                    <input type="checkbox"
                        name="breakfast"
                        value={breakfast}
                        //    onChange={e => this.handleChange(e)}
                        onChange={(event) => onChangeHandler(event)}
                        defaultChecked={breakfast} />
                    {breakfast.toString()}



                    <label htmlFor="userEmail" className="block4">
                        featured:
          </label>


                    <input type="checkbox"
                        name="featured"
                        value={featured}
                        //    onChange={e => this.handleChange(e)}
                        onChange={(event) => onChangeHandler(event)}
                        defaultChecked={featured} />
                    {featured.toString()}




                    <label htmlFor="userEmail" className="block4">
                        pets:
          </label>


                    <input type="checkbox"
                        name="pets"
                        value={pets}
                        //    onChange={e => this.handleChange(e)}
                        onChange={(event) => onChangeHandler(event)}
                        defaultChecked={pets} />
                    {pets.toString()}




                    <button className="signin-button" onClick={(event) => { Create(event, name, breakfast, capacity, pets, price, size, slug, type,featured,description) }}>
                        Create
          </button>
                </form>

            </div>
        </div>
    );
};




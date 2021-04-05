import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Template2 from "../components/Template"
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { postRoom } from "../providers/fetchRooms"
export default function AddRoom() {

    const firestore = firebase.firestore();
    let history = useHistory();

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
    const Create = (event, name, breakfast, capacity, pets, price, size, slug, type, featured, description) => {
        event.preventDefault()
        const obj = Template2(name, breakfast, capacity, pets, price, size, slug, type, featured, description)
        postRoom(obj).then(result => {
            ToastsStore.success("You create Room")
            setTimeout(() => {
                history.push("/");
                window.location.reload();
            }, 2500);
        })
            .catch(error => {
                ToastsStore.error("Error creating room")
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            });
        

    };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;
        if (name === 'breakfast') {
            if (value == "true") setBreakfast(false);
            else if (value == "false") setBreakfast(true);
        }
        else if (name === 'capacity') setCapacity(value);

        else if (name === 'name') setName(value);
        else if (name === 'pets') {
            if (value == "true") setPets(false);
            else if (value == "false") setPets(true);
        }
        else if (name === 'price') setPrice(value);
        else if (name === 'featured') {
            if (value == "true") setFeatured(false);
            else if (value == "false") setFeatured(true);
        }
        else if (name === 'description') setDescription(value);
        else if (name === 'size') setSize(value);
        else if (name === 'slug') setSlug(value);
        else if (name === 'type') setType(value);


    };


    return (
        <div className="LoginForm">
            <ToastsContainer store={ToastsStore} />
            <h1 className="">Create Room</h1>
            <div className="">
                {error !== null && <div className="">{error}</div>}
                <form className="loginF">
                    <label htmlFor="userEmail" className="block4">
                        name:
          </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        price:
          </label>
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        size:
          </label>
                    <input
                        type="text"
                        name="size"
                        value={size}
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        model:
          </label>
                    <input
                        type="text"
                        name="slug"
                        value={slug}
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        type:
          </label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        description:
          </label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block4">
                        Capacity:
          </label>

                    <input
                        type="text"
                        name="capacity"
                        value={capacity}
                        onChange={(event) => onChangeHandler(event)}
                    />

                    <label htmlFor="userEmail" className="block4">
                        Breakfast:
          </label>
                    <input type="checkbox"
                        name="breakfast"
                        value={breakfast}
                        onChange={(event) => onChangeHandler(event)}
                        defaultChecked={breakfast} />
                    {breakfast.toString()}
                    <label htmlFor="userEmail" className="block4">
                        featured:
          </label>


                    <input type="checkbox"
                        name="featured"
                        value={featured}
                        onChange={(event) => onChangeHandler(event)}
                        defaultChecked={featured} />
                    {featured.toString()}
                    <label htmlFor="userEmail" className="block4">
                        pets:
          </label>
                    <input type="checkbox"
                        name="pets"
                        value={pets}
                        onChange={(event) => onChangeHandler(event)}
                        defaultChecked={pets} />
                    {pets.toString()}

                    <button className="signin-button" onClick={(event) => { Create(event, name, breakfast, capacity, pets, price, size, slug, type, featured, description) }}>
                        Create
          </button>
                </form>

            </div>
        </div>
    );
};




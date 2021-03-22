import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Link, Redirect, useHistory } from "react-router-dom";
import {auth, firestore} from "../firebase";
import { getAllCookies, getCookie, removeCookie, setCookie } from '../source'

const ProfilePage = () => {
  const user = useContext(UserContext);
  console.log(user);
// const {photoURL, displayName, email} = user;
//   console.log(user);
// const photoURL=user.photoURL||null;
// const displayName=user.displayName
// const email=user.email;
let history = useHistory();
  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      {/* <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div
          style={{
            background: `url(${user.user.photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
          className=""
        ></div>
        <div className = "">
        <h2 className = "">{user.user.displayName}||""</h2>
        <h3 className = "">{user.user.email}||""</h3>
        </div>
      </div>*/
      <button className = "" onClick = {() => {
        
          auth.signOut();
          removeCookie('cookie');
          
          history.push("/");
          }}>Sign out</button> }
    </div>
    
  ) 
};

export default ProfilePage;

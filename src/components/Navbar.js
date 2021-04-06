import React, { Component, useEffect,useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCookie, removeCookie } from "../source";
import { auth, firestore } from "../firebase";
import { ToastsContainer, ToastsStore } from 'react-toasts';

const Navbar = () => {
 let state = {
    isOpen: false,
    cookie: getCookie("cookie"),
    cookie2: getCookie("cookie2"),
  };
  const [isOpen, setIsOpen] = useState("");
  const [cookie, setCookie] = useState(getCookie("cookie"));
  const [cookie2, setCookie2] = useState(getCookie("cookie2"));
  const [cookie3, setCookie3] = useState(getCookie("cookie3"));
  console.log(cookie);
  console.log(cookie2)
  useEffect(() => {
    console.log("effect")
    setCookie(getCookie("cookie"));
    setCookie2(getCookie("cookie2"));
    setCookie3(getCookie("cookie3"));
  });
  const  handleToggle = () => {
    //setIsOpen()
    //this.setState({ isOpen: !this.state.isOpen });
    //console.log(this.state)
  };
 const LogOut= () => {
    // let history = useHistory();
    // this.setState({ cookie: undefined });
    // this.setState({ cookie2: undefined });
    // this.state.cookie=undefined;
    // this.state.cookie2=undefined;
    
    auth.signOut().then(() => {
      ToastsStore.success("You have successfully Logged Out");
      removeCookie('cookie');
      removeCookie('cookie2');
      removeCookie('cookie3');
      setCookie(getCookie("cookie"));
  setCookie2(getCookie("cookie2"));
      
    }).catch(() => {
      ToastsStore.error("cant log out")
    });

    
  }

    return (
      <nav className="navbar">
        <ToastsContainer store={ToastsStore} />
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" onClick={handleToggle()}>
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={handleToggle()}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={"nav-links show-nav"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {!cookie && (
              <li>
                <Link to="/login">SignIn</Link>
              </li>
            )}
            {!cookie && (
              <li>
                <Link to="/register">SingUp</Link>
              </li>
            )}
            {cookie && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {cookie2 === "admin" && (
              <li>
                <Link to="/addRoom">Create Room</Link>
              </li>
            )}
            {cookie && (
              <li>
                <Link to="/" onClick={
                  LogOut
                }>LogOut</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar;
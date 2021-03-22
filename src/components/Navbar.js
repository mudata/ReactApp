import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCookie, removeCookie } from "../source";
import {auth, firestore} from "../firebase";
export default class Navbar extends Component {
  
  state = {
    isOpen: false,
    cookie:getCookie("cookie")
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state)
  };
  LogOut(){
    auth.signOut();
    removeCookie('cookie');
    window.location.reload();  
    // console.log(this.state)
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" onClick={this.handleToggle}>
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            {!this.state.cookie && (
            <li>
              <Link to="/login">SignIn</Link>
            </li>
            )}
            {!this.state.cookie && (
            <li>
              <Link to="/register">SingUp</Link>
            </li>
            )}
            {!!this.state.cookie && (
      <li>
              <Link to="/profile">Profile</Link>
            </li>
)}
            {!!this.state.cookie && (
      <li>
        <Link to="/" onClick={this.LogOut}>LogOut</Link>
      </li>
    )}
          </ul>
        </div>
      </nav>
    );
  }
}

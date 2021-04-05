import React, { useContext } from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import PasswordReset from "./pages/passwordReset";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/register";
import { UserContext } from "./providers/UserProvider";
import PrivateRoute from "./components/PrivateRoute";
import {getCookie} from "./source"
import Footer from "./components/Footer";
import About from "./pages/About";
import AddRoom from "./pages/addRoom"
import { ToastsContainer, ToastsStore } from 'react-toasts';
import {ToastContainer,toast} from 'react-toastify'
function App() {
  const user = useContext(UserContext);
  const role=getCookie("cookie2")

  return (
    <>
     
      <Navbar />
      <ToastContainer /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:id2" component={SingleRoom} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} /> 
        <Route exact path="/passwordReset" component={PasswordReset} />
        <Route exact path="/about" component={About} />
        {role=="admin" && (
          <Route exact path="/addRoom" component={AddRoom} />
        )}{/* <Route exact path="/profile" component={ProfilePage} /> */}
        {/* <PrivateRoute component={ProfilePage} path="/profile" exact /> */}


        {user && (
          <Route exact path="/profile" component={ProfilePage} />
        )}

        <Route component={Error} />
      </Switch>
      {/* <ToastsContainer store={ToastsStore}/>  */}
      <Footer />
    </>
  );
}

export default App;




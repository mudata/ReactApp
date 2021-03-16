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

function App() {
  const user = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} /> 
        <Route exact path="/passwordReset" component={PasswordReset} />
        {/* <Route exact path="/profile" component={ProfilePage} /> */}
        {/* <PrivateRoute component={ProfilePage} path="/profile" exact /> */}


        {user && (
          <Route exact path="/profile" component={ProfilePage} />
        )}

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import All from "./UI/All/All";
import { useDispatch } from "react-redux";
// import { auth } from "./firebase";
import Logout from "./Pages/Logout";
import SendMessage from "./Pages/SendMessage/SendMessage";
// import firebase from "fireabse"
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let email = window.localStorage.getItem("email");
    let name = window.localStorage.getItem("name");
    let token = window.localStorage.getItem("token");
    if (email && name && token) {
      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          name: name,
          email: email,
          token: token,
        },
      });
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/send-message" component={SendMessage} />

        <Route path="/" component={All} />
      </Switch>
    </div>
  );
}

export default App;

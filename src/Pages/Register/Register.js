import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Register(props) {
  const dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user) {
      props.history.push("/");
    }
  }, [user, props.history]);
  const [email, setemail] = useState("sandeep@gmail.com");
  const [pass, setpass] = useState("sandeep");
  const [prob, setprob] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !pass) {
      setprob("Please Fill All the Fields");
      return;
    }
    const authData = {
      email: email,
      password: pass,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          process.env.REACT_APP_FIREBASE_API,
        authData
      )
      .then((res) => {
        // console.log(res.data.idToken);
        const user = res.data;
        // console.log(user);
        let nameuser = user.displayName
          ? user.displayName
          : user.email.split("@")[0];
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            name: nameuser,
            email: user.email,
            token: user.idToken,
          },
        });

        window.localStorage.setItem("email", user.email);
        window.localStorage.setItem("name", nameuser);
        window.localStorage.setItem("token", user.idToken);
        let senduser = {
          name: nameuser,
          email: user.email,
          token: user.idToken,
        };
        axios
          .post("http://localhost:8000/user", { user: senduser })
          .then((res) => {
            // console.log(res);
            props.history.push("/");
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((error) => setprob(error.response.data.error.message));
  };
  let p = "";
  if (prob) {
    p = prob;
  }
  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        <h4>Register </h4>
        <p className="text-danger">{prob}</p>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        Already Register ?{" "}
        <NavLink exact to="/login">
          Click to Login
        </NavLink>
      </p>
    </div>
  );
}

export default Register;

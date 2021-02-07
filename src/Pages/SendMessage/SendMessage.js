import React from "react";
import { useState } from "react";
import axios from "axios";

function SendMessage(props) {
  const [msg, setmsg] = useState("");
  const sendMsg = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/message", { msg: msg })
      .then(() => {
        // console.log("hdbfj");
        props.history.push("/");
      })
      .catch((err) => console.log(err));
    // console.log("dfljhsjk");
    // props.history.push("/");
  };
  return (
    <div className="container">
      <br />
      <h4>Enter the Message to Send</h4>
      <form onSubmit={sendMsg}>
        <input
          type="text"
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
        />
        <br />
        <br />

        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SendMessage;

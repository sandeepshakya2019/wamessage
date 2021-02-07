import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
function Logout(props) {
  //   let { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("token");

    props.history.push("/");
  }, [props.history, dispatch]);

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
}

export default Logout;

import { Button } from "@material-ui/core";
import React from "react";
import "./signOut.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function SignOut({ setMenuOpen }) {
  const data = useSelector((state) => {
    return state;
  });
  const history = useHistory();
  const signout = () => {
    localStorage.removeItem("user", data.Auth);
    window.location = "/";
  };

  return (
    <div className="signOut">
      <div className="signOut__Message">
        <p>Do you want to Sign Out ? </p>
      </div>

      <div className="signOut__Btn">
        <Button onClick={signout}>Yes</Button>
        <Button>No</Button>
      </div>
    </div>
  );
}

export default SignOut;

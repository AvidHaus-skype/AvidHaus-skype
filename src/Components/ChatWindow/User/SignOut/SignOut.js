import { Button } from "@material-ui/core";
import React from "react";
import "./signOut.css";
function SignOut({ setMenuOpen }) {
  return (
    <div className="signOut">
      <div className="signOut__Message">
        <p>Do you want to Sign Out ? </p>
      </div>

      <div className="signOut__Btn">
        <Button>Yes</Button>
        <Button setMenuOpen={false}>No</Button>
      </div>
    </div>
  );
}

export default SignOut;

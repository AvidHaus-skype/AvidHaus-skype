import { Button } from "@material-ui/core";
import React from "react";
import "./signOut.css";
import{useSelector} from 'react-redux'
import Login from "../../../Login/Login";

function SignOut() {
  const data=useSelector(state=>{return state})

  const signout=()=>{
    
    localStorage.removeItem("user",data.Auth)
   
  }

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

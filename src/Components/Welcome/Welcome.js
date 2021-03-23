import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Welcome.css";
function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__container">
        <div className="userName">
          <h1>
            Welcom <span>User Name</span>
          </h1>
        </div>
        <div className="User__picture">
          <Avatar />
        </div>
        <div className="user__profession">
          <p>React Developer</p>
        </div>

        <div className="startConvo__btn">
          <Button>Start a Conversion</Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

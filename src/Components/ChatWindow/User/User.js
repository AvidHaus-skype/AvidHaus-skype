import React from "react";
import { Avatar, Button } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./user.css";
function User() {
  return (
    <div className="user">
      <div className="user__info">
        <Avatar
          src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
          className="userImg"
        />
        <p className="userName">User Name</p>
        <div className="onlineStatus"></div>
      </div>
      <Button>
        <MoreHorizIcon />
      </Button>
    </div>
  );
}

export default User;

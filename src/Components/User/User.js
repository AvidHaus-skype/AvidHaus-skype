import React from "react";
import { Avatar, Button } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./user.css";
function User() {
  return (
    <div className="user">
      <div className="user__info">
        <Avatar src="" />
        <p className="userName">User Name</p>
      </div>
      <Button>
        <MoreHorizIcon />
      </Button>
    </div>
  );
}

export default User;

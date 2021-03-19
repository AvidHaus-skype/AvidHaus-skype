import React, { useState } from "react";
import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./user.css";
function User() {
  const [menu, setMenu] = useState(false);
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
      <Button
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <MoreHorizIcon />
      </Button>

      {menu && (
        <div className="signOut__menu">
          <Button>Sign Out</Button>
        </div>
      )}
    </div>
  );
}

export default User;

import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Modal from "react-modal";
import "./user.css";
function User() {
  const [isMenuOpen, setMenuOpen] = useState(false);
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

      <div className="signOut">
        <Button
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          <MoreHorizIcon />
        </Button>

        <Modal
          className="signOutModel"
          isOpen={isMenuOpen}
          onRequestClose={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          Sign Out
        </Modal>
      </div>
    </div>
  );
}

export default User;

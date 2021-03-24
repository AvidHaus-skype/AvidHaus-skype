import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";

import Modal from "react-modal";
import "./user.css";
import SignOut from "./SignOut/SignOut";
Modal.setAppElement("#root");
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
            setMenuOpen(true);
          }}
        >
          Sign Out
        </Button>

        <Modal
          className="signOutModel"
          isOpen={isMenuOpen}
          onRequestClose={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          <SignOut setMenuOpen={setMenuOpen} />
        </Modal>
      </div>
    </div>
  );
}

export default User;

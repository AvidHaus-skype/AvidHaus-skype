import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";

import Modal from "react-modal";
import "./user.css";

import { useSelector, useDispatch } from "react-redux";
import SignOut from "./SignOut/SignOut";

Modal.setAppElement("#root");

function User() {
  const data = useSelector((state) => {
    return state;
  });

  const [isMenuOpen, setMenuOpen] = useState(false);
  const image = data.Auth.data.user_picture;
  return (
    <div className="user">
      <div className="user__info">
        <Avatar
          src={`http://192.168.0.96:401/bwccrm/public/userpicture/${image}`}
          className="userImg"
        />
        <p className="userName">{data.Auth.data.user_name}</p>
        <div className="onlineStatus"></div>
      </div>

      <div>
        <Button
          className="signOut"
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
            setMenuOpen(false);
          }}
        >
          <SignOut isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </Modal>
      </div>
    </div>
  );
}

export default User;

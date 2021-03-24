import React, { useState,useEffect} from "react";
import { Avatar, Button } from "@material-ui/core";

import Modal from "react-modal";
import "./user.css";
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import SignOut from "./SignOut/SignOut";

Modal.setAppElement("#root");

function User() {
  const data= useSelector(state=> {return state})
  const dispatch=useDispatch()
  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const image =data.user.data.user_picture
  return (
    <div className="user">
      <div className="user__info">
        <Avatar
          src={`http://192.168.0.96:401/bwccrm/public/userpicture/${image}`}
          className="userImg"
        />
        <p className="userName">{data.user.data.user_name}</p>
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
          <SignOut />
        </Modal>
      </div>
    </div>
  );
}

export default User;

import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Userid } from "../../../../Redux/Action";
import "./chatUser.css";

function ChatUser(props) {
  const data = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const image = props.users.user_picture;

  const switchToConve = (e) => {
    e.preventDefault();

    dispatch(Userid(props.users));
  };
  return (
    <div className="chatUser" onClick={switchToConve}>
      <div className="chatUser__picture">
        <Avatar
          src={`http://192.168.0.96:401/bwccrm/public/userpicture/${image}`}
        />
      </div>
      <div className="chatUser__details">
        <h3>{props.users.user_name}</h3>
        <p>{props.users.last_msg.message_body}</p>
      </div>
    </div>
  );
}

export default ChatUser;

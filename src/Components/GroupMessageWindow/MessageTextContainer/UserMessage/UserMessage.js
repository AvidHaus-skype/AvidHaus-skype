import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./userMessage.css";
import { useSelector } from "react-redux";
function UserMessage({ chat }) {
  // const data = useSelector((state) => {
  //   return state;
  // });
  // const admin = data.Auth.data.user_id;
  // // console.log(props.sender)
  // const image = props.sender.from_userpicture;
  return (
    <div className={chat ? "senderMessage " : "userMessage"}>
      <div className="userMessage__picture">
        {chat ? <Avatar src="" /> : ""}
      </div>

      <div className="userMessageBox">
        <div
          className={!chat ? "senderMessage__details" : "userMessage__details"}
        >
          <div className={"userMessage__name"}>
            {chat ? <p>User Name</p> : ""}
          </div>

          <div className="userMessage__time">
            <p>Time</p>
          </div>
        </div>

        <div
          className={
            chat
              ? "senderMessage__text"
              : "senderMessage__text recieverMessage__text"
          }
        >
          Text
        </div>
      </div>
    </div>
  );
}

export default UserMessage;

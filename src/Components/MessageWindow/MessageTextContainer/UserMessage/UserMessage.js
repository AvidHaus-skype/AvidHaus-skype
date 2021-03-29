import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./userMessage.css";
import {useSelector} from 'react-redux'
function UserMessage(props) {
  const data=useSelector(state=>{return state})
  const admin=data.user.data.user_id
  // console.log(props.sender.message_from)
  return (
    <div 
    className={props.sender.message_from !==admin ? "senderMessage " : "userMessage"}
    >
      <div className="userMessage__picture">
        {props.sender.message_from !==admin ? <Avatar src="" /> : ""}
      </div>

      <div className="userMessageBox">
        <div
          className={props.sender.message_from !==admin ? "senderMessage__details" : "userMessage__details"}
        >
          <div className={"userMessage__name"}>
            <p>{props.sender.message_from !==admin ? props.sender.from_username :''}</p>
          </div>

          <div className="userMessage__time">
            <p>12:00 pm</p>
          </div>
        </div>

        <div
          className={
            props.sender.message_from !==admin 
            ? "senderMessage__text"
              : "senderMessage__text recieverMessage__text"
          }
        >
          The hexadecimal color code #00aff0 is a shade of cyan. In the RGB
          color model #00aff0 is comprised of 0% red, 68.63% green and 94.12%
          blue
        </div>
      </div>
    </div>
  );
}

export default UserMessage;

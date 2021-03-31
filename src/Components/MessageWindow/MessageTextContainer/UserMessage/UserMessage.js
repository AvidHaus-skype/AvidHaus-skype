import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./userMessage.css";
import { useSelector } from "react-redux";
function UserMessage(props) {
  const data = useSelector((state) => {
    return state;
  });
  const admin = data.Auth.data.user_id;
  // console.log(props.sender)
  const image = props.sender.from_userpicture;
  return (
    <div
      className={
        props.sender.message_from !== admin ? "senderMessage " : "userMessage"
      }
    >
      <div className="userMessage__picture">
        {props.sender.message_from !== admin ? (
          <Avatar
            src={`http://192.168.0.96:401/bwccrm/public/userpicture/${image}`}
          />
        ) : (
          ""
        )}
      </div>

      <div className="userMessageBox">
        <div
          className={
            props.sender.message_from !== admin
              ? "senderMessage__details"
              : "userMessage__details"
          }
        >
          <div className={"userMessage__name"}>
            <p>
              {props.sender.message_from !== admin
                ? props.sender.from_username
                : ""}
            </p>
          </div>

          <div className="userMessage__time">
            <p>{props.sender.fullTime}</p>
          </div>
        </div>

        <div
          className={
            props.sender.message_from !== admin
              ? "senderMessage__text"
              : "senderMessage__text recieverMessage__text"
          }
        >
          {props.sender.message_body}
        </div>
      </div>
    </div>
  );
}

export default UserMessage;

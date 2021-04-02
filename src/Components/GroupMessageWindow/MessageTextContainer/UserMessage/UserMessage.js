import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./userMessage.css";
import { useSelector } from "react-redux";
function UserMessage({ chatgroup }) {
  const data = useSelector((state) => {
    return state;
  });
  // const admin = data.Auth.data.user_id;
  // // console.log(chatgroup)
  const image = chatgroup.from_userpicture;
  // console.log(chatgroup)
  // console.log(chatgroup.from_userpicture)
  const admin=data.Auth.data.user_id
  return (
    <div
    className={
      chatgroup.from_userid !== admin ? "senderMessage " : "userMessage"
    }
  >
    <div className="userMessage__picture">
      {chatgroup.from_userid !== admin ? (
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
          chatgroup.from_userid !== admin
            ? "senderMessage__details"
            : "userMessage__details"
        }
      >
        <div className={"userMessage__name"}>
          <p>
            {chatgroup.from_userid !== admin
              ? chatgroup.from_username
              : ""}
          </p>
        </div>

        <div className="userMessage__time">
          <p>{chatgroup.fullTime}</p>
        </div>
      </div>

      <div
        className={
          chatgroup.from_userid !== admin
            ? "senderMessage__text"
            : "senderMessage__text recieverMessage__text"
        }
      >
        {chatgroup.groupmessage_body}
      </div>
    </div>
  </div>
  );
}

export default UserMessage;

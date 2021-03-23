import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./userMessage.css";

function UserMessage({ sender }) {
  return (
    <div className={sender ? "senderMessage " : "userMessage"}>
      <div className="userMessage__picture">
        {sender ? <Avatar src="" /> : ""}
      </div>

      <div className="userMessageBox">
        <div
          className={sender ? "senderMessage__details" : "userMessage__details"}
        >
          <div className="userMessage__name">
            <p>First Name,</p>
          </div>

          <div className="userMessage__time">
            <p>12:00 pm</p>
          </div>
        </div>

        <div
          className={
            sender
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

import { Avatar } from "@material-ui/core";
import React from "react";
import "./chatUser.css";
function ChatUser() {
  return (
    <div className="chatUser">
      <div className="chatUser__picture">
        <Avatar />
      </div>
      <div className="chatUser__details">
        <h3>User Name</h3>
        <p>Last Message</p>
      </div>
    </div>
  );
}

export default ChatUser;

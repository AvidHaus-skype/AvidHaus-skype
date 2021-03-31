import React from "react";
import "./messageWindowHeader.css";
import { useSelector } from "react-redux";

function MessageWindowHeader() {
  const data = useSelector((state) => {
    return state;
  });

  return (
    <div className="MessageWindowHeader">
      <div className="userName">
        <h2>User Name</h2>
      </div>
      <div className="userStatus">
        <div className="onlineStatus"></div>
        <p>Message</p>
      </div>
    </div>
  );
}

export default MessageWindowHeader;

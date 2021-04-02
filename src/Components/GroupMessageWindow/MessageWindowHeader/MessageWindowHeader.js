import React from "react";
import "./messageWindowHeader.css";
import { useSelector } from "react-redux";

function MessageWindowHeader() {
  const data = useSelector((state) => {
    return state;
  });
  // console.log(data.groupChat.group_name)
  return (
    <div className="MessageWindowHeader">
      <div className="userName">
        <h2>{data.groupChat.group_name}</h2>
      </div>
      <div className="userStatus">
        <div className="onlineStatus"></div>
        <p>Message</p>
      </div>
    </div>
  );
}

export default MessageWindowHeader;

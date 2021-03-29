import React from "react";
import "./messageWindowHeader.css";
import {useSelector} from 'react-redux'

function MessageWindowHeader() {
  const data = useSelector(state=>{return state})
  console.log(data.chat)
  return (
    <div className="MessageWindowHeader">
      <div className="userName">
        <h2>{data.chat.users.user_name}</h2>
      </div>
      <div className="userStatus">
        <div className="onlineStatus"></div>
        <p>{data.chat.users.user_loginstatus}</p>
      </div>
    </div>
  );
}

export default MessageWindowHeader;

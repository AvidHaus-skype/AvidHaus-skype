import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Userid } from "../../../../Redux/Action";
import "./chatUser.css";

function ChatGroup({ group }) {
  const image = group.group_image;

  return (
    <div
      className="chatUser"
      onClick={() => {
        console.log(group);
      }}
    >
      <div className="chatUser__picture">
        <Avatar
          src={`http://192.168.0.96:401/bwccrm/public/storage/chat_attachments/${image}`}
        />
      </div>
      <div className="chatUser__details">
        <h3>{group.group_name}</h3>
      </div>
    </div>
  );
}

export default ChatGroup;

import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./chatUser.css";
import { groupChat } from "../../../../Redux/Action";
import { useHistory } from "react-router-dom";
function ChatGroup({ groups }) {
  const history = useHistory();
  const image = groups.group_image;
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state;
  });
  return (
    <div
      className="chatUser"
      onClick={() => {
        dispatch(groupChat(groups));
        history.push("/group");
      }}
    >
      <div className="chatUser__picture">
        <Avatar
          src={`http://192.168.0.96:401/bwccrm/public/storage/chat_attachments/${image}`}
        />
      </div>
      <div className="chatUser__details">
        <h3>{groups.group_name}</h3>
      </div>
    </div>
  );
}

export default ChatGroup;

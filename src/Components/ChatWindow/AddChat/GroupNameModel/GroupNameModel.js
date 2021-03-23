import { Avatar, IconButton } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React from "react";
import "./groupNameModel.css";

function GroupNameModel({ group }) {
  return (
    <div className="groupNameModel">
      <div className="groupNameModel__header">
        <IconButton
          onClick={() => {
            group(false);
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>

        <h1>New Group Chat</h1>
      </div>

      <div className="groupNameModel__imageContainer">
        <div className="groupNameModel__image">
          <input type="file" className="imageField" />
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default GroupNameModel;

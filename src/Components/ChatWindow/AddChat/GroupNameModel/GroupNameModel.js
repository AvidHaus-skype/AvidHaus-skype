import { IconButton, Input } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React, { useState } from "react";
import "./groupNameModel.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function GroupNameModel({ setGroupModelName, setGroup }) {
  const [groupName, setGroupName] = useState("");
  return (
    <div className="groupNameModel">
      <div className="groupNameModel__header">
        <IconButton
          onClick={() => {
            setGroupModelName(false);
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>

        <h1>New Group Chat</h1>
      </div>

      <div className="groupNameModel__imageContainer">
        <input type="file" />
      </div>

      <div className="groupNameModel__nameContainer">
        <Input
          placeholder="Group Name"
          className="groupNameInputField"
          value={groupName}
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />
      </div>

      <div className="groupNameModel__nextIconContainer">
        <IconButton
          disabled={!groupName}
          className={groupName ? "nextBtn" : ""}
          onClick={() => {
            setGroup(true);
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default GroupNameModel;

import { Avatar, IconButton, Input } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React, { useState } from "react";
import "./groupNameModel.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function GroupNameModel({
  setPassGroupName,
  setGroupModelName,
  setGroup,
  setPassGroupPicture,
}) {
  const [groupPicture, setGroupPicture] = useState("");
  const [groupName, setGroupName] = useState("");
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setGroupPicture(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

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

      <label className="groupNameModel__imageContainer">
        <input type="file" onChange={handleImageChange} />
        <Avatar src={groupPicture} className="groupProfile" />
      </label>

      <div className="groupNameModel__nameContainer">
        <Input
          placeholder="Group Name"
          className="groupNameInputField"
          value={groupName}
          onChange={(e) => {
            setGroupName(e.target.value);
            setPassGroupName(e.target.value);
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

import { Avatar, Checkbox } from "@material-ui/core";
import React from "react";
import "./Usergroup.css";

function UserGroupList() {
  return (
    <div className="userGroupList">
      <div className="userDetails">
        <div className="userPicture">
          <Avatar />
        </div>
        <div className="userName">
          <h1>UserName</h1>
        </div>
      </div>

      <div className="userCheckBox">
        <Checkbox color={"primary"} />
      </div>
    </div>
  );
}

export default UserGroupList;

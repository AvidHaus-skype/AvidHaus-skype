import { Avatar, Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import "./Usergroup.css";

function UserGroupList() {
  const [collectUser, setcollectUser] = useState(false);
  return (
    <div
      className="userGroupList"
      onClick={() => {
        setcollectUser(!collectUser);
      }}
    >
      <div className="userDetails">
        <div className="userPicture">
          <Avatar />
        </div>
        <div className="userName">
          <h1>UserName</h1>
        </div>
      </div>

      <div className="userCheckBox">
        <Checkbox color={"primary"} checked={collectUser} />
      </div>
    </div>
  );
}

export default UserGroupList;

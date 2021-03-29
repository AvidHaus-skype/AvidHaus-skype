import { Avatar, Checkbox } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Usergroup.css";

function UserGroupList(group, inputValue, passGroupName, passGroupPicture) {
  const [collectUser, setcollectUser] = useState(false);
  const [groupId, setGroupId] = useState("");
  const [createGroup, setCreateGroup] = useState([]);
  const image = group.group.user_picture;
  const datas = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    axios
      .post("http://192.168.0.96:401/bwccrm/createGroup", {
        loginuser_id: datas.user.data.user_id,
        user_id: datas.user.data.user_id,
        group_name: passGroupName,
        group_image: passGroupPicture,
        members: groupId,
      })
      .then((res) => {
        setCreateGroup(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div
      className="userGroupList"
      onClick={() => {
        setcollectUser(!collectUser);
        setGroupId(group.group.user_id);
      }}
    >
      <div className="userDetails">
        <div className="userPicture">
          <Avatar
            src={`http://192.168.0.96:401/bwccrm/public/userpicture/${image}`}
          />
        </div>

        <div className="userName">
          <h1>{group.group.user_name}</h1>
        </div>
      </div>

      <div className="userCheckBox">
        <Checkbox color={"primary"} checked={collectUser} />
      </div>
    </div>
  );
}

export default UserGroupList;

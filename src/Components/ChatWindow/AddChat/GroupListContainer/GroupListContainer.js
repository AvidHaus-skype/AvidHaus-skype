import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button, Input, Checkbox, Avatar } from "@material-ui/core";
import "./groupListContainer.css";
import axios from "axios";
import { useSelector } from "react-redux";
function GroupMemebers({ members, userId, setUserId }) {
  const [selectMember, setSelectMember] = useState(false);

  //   if (selectMember) {
  //     console.log("member found");
  //   }
  const image = members.user_picture;
  return (
    <div
      className="groupMembers"
      onClick={() => {
        setSelectMember(!selectMember);
        setUserId([...userId, members.user_id]);
      }}
    >
      <div className="groupMemberInfo">
        <div className="memberImg">
          <Avatar
            src={`http://192.168.0.96:401/bwccrm/public/userpicture/${image}`}
          />
        </div>
        <div className="memberName">
          <h3>{members.user_name}</h3>
        </div>
      </div>
      <div className="groupMemberCheck">
        <Checkbox color="primary" checked={selectMember} />
      </div>
    </div>
  );
}

function GroupListContainer({
  setGroupModelName,
  setgroupModelListContaier,
  passGroupName,
  passGroupPicture,
}) {
  const [groupMember, setGroupMember] = useState("");
  const [memberList, setMemberList] = useState([]);
  const [userId, setUserId] = useState([]);

  const data = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    axios
      .post("http://192.168.0.96:401/bwccrm/getContactsTotal", {
        campaign_id: 1,
        user_id: data.user.data.user_id,
      })
      .then((res) => {
        setMemberList(res.data.contacts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandleGroup = () => {
    const imgData = new FormData();
    imgData.append("group_image", passGroupPicture);
    axios
      .post("http://192.168.0.96:401/bwccrm/createGroup", {
        loginuser_id: data.user.data.user_id,
        user_id: data.user.data.user_id,
        group_name: passGroupName,
        imgData,
        members: userId,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log({
      loginuser_id: data.user.data.user_id,
      user_id: data.user.data.user_id,
      group_name: passGroupName,
      group_image: data,
      members: userId,
    });
  };
  return (
    <div className="groupListContainer">
      <div className="groupListContainer__header">
        <Button
          onClick={() => {
            setgroupModelListContaier(false);
          }}
        >
          <ArrowBackIcon />
        </Button>
        <h1>Create new group</h1>
        <Button
          onClick={() => {
            setGroupModelName(false);
            setgroupModelListContaier(false);
            HandleGroup();
          }}
        >
          Done
        </Button>
      </div>
      <div className="groupListContainer__search">
        <Input
          placeholder="Search People"
          onChange={(e) => {
            setGroupMember(e.target.value);
          }}
          className="searchField"
        />
      </div>
      <div className="groupListContainer__memberList">
        {memberList.map((members, id) => (
          <GroupMemebers
            members={members}
            userId={userId}
            setUserId={setUserId}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}

export default GroupListContainer;

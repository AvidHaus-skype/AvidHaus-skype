import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Button, IconButton, Input } from "@material-ui/core";
import "./groupModel.css";
import UserGroupList from "./UserGroupList/UserGroupList";
import axios from "axios";
import { useSelector } from "react-redux";

function GroupModel({
  setGroup,
  setGroupModelName,
  passGroupName,
  passGroupPicture,
}) {
  const [groupList, setGroupList] = useState([]);
  const [inputValue, setInputValue] = useState();

  const datas = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    axios
      .post("http://192.168.0.96:401/bwccrm/getContactsTotal", {
        campaign_id: 1,
        user_id: datas.user.data.user_id,
      })
      .then((res) => {
        setGroupList(res.data.contacts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="group__model">
      <div className="groupModel__header">
        <IconButton
          className="cancelGroupBtn"
          onClick={() => {
            setGroup(false);
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        <h1>Create New Group</h1>

        <Button
          onClick={() => {
            setGroup(false);
            setGroupModelName(false);
          }}
        >
          Done
        </Button>
      </div>

      <div className="groupModel__search">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Search People"
          className="groupModelSearch__inputField"
        />
        {!inputValue ? (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setInputValue("");
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </div>

      <div className="usersGroupList">
        {groupList.map((group, id) => (
          <UserGroupList
            group={group}
            key={id}
            passGroupName={passGroupName}
            passGroupPicture={passGroupPicture}
          />
        ))}
      </div>
    </div>
  );
}

export default GroupModel;

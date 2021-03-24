import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Button, IconButton, Input } from "@material-ui/core";
import "./groupModel.css";
import UserGroupList from "./UserGroupList/UserGroupList";
import axios from "axios";
import { useSelector } from "react-redux";
function GroupModel({ setGroup, setGroupModelName }) {
  const [groupList, setGroupList] = useState([]);
  const data = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    axios
      .post("http://192.168.0.96:401/bwccrm/getContactsTotal", {
        campaign_id: data.user.data.campaign_id,
        user_id: data.user.data.user_id,
      })
      .then((res) => {
        console.log(res);
        setGroupList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(groupList);
  const [inputValue, setInputValue] = useState("");
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
          <UserGroupList group={group} key={id} />
        ))}
      </div>
    </div>
  );
}

export default GroupModel;

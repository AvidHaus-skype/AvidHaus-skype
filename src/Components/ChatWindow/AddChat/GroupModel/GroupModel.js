import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Button, IconButton, Input } from "@material-ui/core";
import "./groupModel.css";
import UserGroupList from "./UserGroupList/UserGroupList";
function GroupModel({ setGroup, setGroupModelName }) {
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
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
        <UserGroupList />
      </div>
    </div>
  );
}

export default GroupModel;

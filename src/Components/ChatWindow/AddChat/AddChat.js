import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import Modal from "react-modal";
import "./addChat.css";
import GroupListContainer from "./GroupListContainer/GroupListContainer";
import GroupName from "./GroupName/GroupName";

function AddChat() {
  const [group, setGroup] = useState(false);
  const [groupModelName, setGroupModelName] = useState(false);
  const [groupModelListContaier, setgroupModelListContaier] = useState(false);
  const [passGroupName, setPassGroupName] = useState("");
  const [passGroupPicture, setPassGroupPicture] = useState("");

  return (
    <>
      <div className="add__chat">
        <Button
          className="addChat__btn"
          onClick={() => {
            setGroupModelName(true);
          }}
        >
          <Add /> <span>Chat</span>
        </Button>
      </div>

      <Modal
        isOpen={groupModelName}
        onRequestClose={() => {
          setGroupModelName(false);
        }}
        className="groupModel"
      >
        <GroupName
          setGroupModelName={setGroupModelName}
          setgroupModelListContaier={setgroupModelListContaier}
          setPassGroupName={setPassGroupName}
          setPassGroupPicture={setPassGroupPicture}
        />
      </Modal>

      <Modal
        isOpen={groupModelListContaier}
        onRequestClose={() => {
          setgroupModelListContaier(false);
        }}
        className="groupModel"
      >
        <GroupListContainer
          setgroupModelListContaier={setgroupModelListContaier}
          setGroupModelName={setGroupModelName}
          passGroupName={passGroupName}
          passGroupPicture={passGroupPicture}
        />
      </Modal>
    </>
  );
}

export default AddChat;

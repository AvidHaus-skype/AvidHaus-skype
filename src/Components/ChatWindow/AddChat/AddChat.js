import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import Modal from "react-modal";
import "./addChat.css";
import GroupModel from "./GroupModel/GroupModel";
import GroupNameModel from "./GroupNameModel/GroupNameModel";

function AddChat() {
  const [group, setGroup] = useState(false);
  const [groupModelName, setGroupModelName] = useState(false);
  const [passGroupName, setPassGroupName] = useState("");
  const [passGroupPicture, setPassGroupPicture] = useState();

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
        <GroupNameModel
          setGroupModelName={setGroupModelName}
          setGroup={setGroup}
          setPassGroupName={setPassGroupName}
          setPassGroupPicture={setPassGroupPicture}
        />
      </Modal>
      {
        <Modal
          isOpen={group}
          onRequestClose={() => {
            setGroup(false);
          }}
          className="groupModel"
        >
          <GroupModel
            setGroup={setGroup}
            setGroupModelName={setGroupModelName}
            passGroupName={passGroupName}
            passGroupPicture={passGroupPicture}
          />
        </Modal>
      }
    </>
  );
}

export default AddChat;

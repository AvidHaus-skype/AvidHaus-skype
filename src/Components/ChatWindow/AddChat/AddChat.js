import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import Modal from "react-modal";
import "./addChat.css";
import GroupModel from "./GroupModel/GroupModel";
import GroupNameModel from "./GroupNameModel/GroupNameModel";

function AddChat() {
  const [group, setGroup] = useState(true);
  return (
    <>
      <div className="add__chat">
        <Button
          className="addChat__btn"
          onClick={() => {
            setGroup(true);
          }}
        >
          <Add /> <span>Chat</span>
        </Button>
      </div>

      {/* <Modal
        isOpen={group}
        onRequestClose={() => {
          setGroup(false);
        }}
        className="groupModel"
      >
        <GroupModel group={setGroup} />
      </Modal> */}
      <Modal
        isOpen={group}
        onRequestClose={() => {
          setGroup(false);
        }}
        className="groupModel"
      >
        <GroupNameModel group={setGroup} />
      </Modal>
    </>
  );
}

export default AddChat;

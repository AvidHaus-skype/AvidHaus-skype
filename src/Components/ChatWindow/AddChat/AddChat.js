import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import "./addChat.css";

function AddChat() {
  return (
    <div className="add__chat">
      <Button className="addChat__btn">
        <Add /> <span>Chat</span>
      </Button>
    </div>
  );
}

export default AddChat;

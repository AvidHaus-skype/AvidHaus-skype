import React from "react";
import MessageTextContainer from "./MessageTextContainer/MessageTextContainer";
import MessageWindowHeader from "./MessageWindowHeader/MessageWindowHeader";
import MessageInput from "./MessageInput/MessageInput";
import "./MessageWindow.css";

function GroupMessageWindow() {
  return (
    <div className="message__window">
      <MessageWindowHeader />
      <MessageTextContainer />
      <MessageInput />
    </div>
  );
}

export default GroupMessageWindow;

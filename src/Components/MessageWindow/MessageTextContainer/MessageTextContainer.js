import React, { useState } from "react";
import "./MessageTextContainer.css";
import UserMessage from "./UserMessage/UserMessage";

function MessageTextContainer() {
  return (
    <div className="messageTextContainer">
      <UserMessage sender={false} />
      <UserMessage sender={true} />
      <UserMessage sender={true} />
      <UserMessage sender={false} />
      <UserMessage sender={true} />
      <UserMessage sender={false} />
      <UserMessage sender={false} />
      <UserMessage sender={false} />
      <UserMessage sender={true} />
      <UserMessage sender={true} />
      <UserMessage sender={false} />
      <UserMessage sender={true} />
      <UserMessage sender={false} />
      <UserMessage sender={false} />
    </div>
  );
}

export default MessageTextContainer;

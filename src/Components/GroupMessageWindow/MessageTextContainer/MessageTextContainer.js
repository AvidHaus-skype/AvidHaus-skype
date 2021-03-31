import React, { useState, useEffect } from "react";
import "./MessageTextContainer.css";
import UserMessage from "./UserMessage/UserMessage";
import axios from "axios";
import { useSelector } from "react-redux";

function MessageTextContainer() {
  return (
    <div className="messageTextContainer">
      <UserMessage chat={true} />
      <UserMessage chat={false} />
      <UserMessage chat={true} />
      <UserMessage chat={true} />
      <UserMessage chat={false} />
      <UserMessage chat={true} />
    </div>
  );
}

export default MessageTextContainer;

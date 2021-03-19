import React from "react";
import User from "./User/User";
import "./chatWindow.css";
import SearchBar from "./SearchBar/SearchBar";
import AddChat from "./AddChat/AddChat";

function ChatWindow() {
  return (
    <div className="chat__window">
      <User />
      <SearchBar />
      <AddChat />
    </div>
  );
}

export default ChatWindow;

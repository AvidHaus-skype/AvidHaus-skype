import React from "react";
import User from "./User/User";
import "./chatWindow.css";
import SearchBar from "./SearchBar/SearchBar";

function ChatWindow() {
  return (
    <div className="chat__window">
      <User />
      <SearchBar />
    </div>
  );
}

export default ChatWindow;

import React from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
import MessageWindow from "../MessageWindow/MessageWindow";
import "./MainWindow.css";
function MainWindow() {
  return (
    <div className="main__window">
      <ChatWindow />
      <MessageWindow />
    </div>
  );
}

export default MainWindow;

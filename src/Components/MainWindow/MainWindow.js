import React, { useState } from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
import MessageWindow from "../MessageWindow/MessageWindow";
import Welcome from "../Welcome/Welcome";
import "./MainWindow.css";
function MainWindow() {
  const [chat, setChat] = useState(false);
  return (
    <div className="main__window">
      <ChatWindow />
      {chat ? <MessageWindow /> : <Welcome />}
    </div>
  );
}

export default MainWindow;

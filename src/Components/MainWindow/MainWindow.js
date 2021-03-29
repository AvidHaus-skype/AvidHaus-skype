import React, { useState } from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
import MessageWindow from "../MessageWindow/MessageWindow";
import { useSelector } from "react-redux";
import Welcome from "../Welcome/Welcome";
import "./MainWindow.css";
function MainWindow() {
  const data = useSelector((state) => {
    return state;
  });
  // const [chat, setChat] = useState(false);

  const [chat, setChat] = useState(true);

  return (
    <div className="main__window">
      <ChatWindow />
      {data.chat? <MessageWindow /> : <Welcome />}
    </div>
  );
}

export default MainWindow;

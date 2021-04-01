import React, { useState } from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
import MessageWindow from "../MessageWindow/MessageWindow";
import { useSelector } from "react-redux";
import Welcome from "../Welcome/Welcome";
import "./MainWindow.css";
import GroupMessageWindow from "../GroupMessageWindow/GroupMessageWindow";
function MainWindow() {
  const data = useSelector((state) => {
    return state;
  });
  // const [chat, setChat] = useState(false);
  const [groupChat, setgroupChat] = useState(true);

  const SideWindow = () => {
    if (!data.chat) {
      return <MessageWindow />;
    } else if (groupChat) {
      return <GroupMessageWindow />;
    } else {
      return <Welcome />;
    }
  };
  return (
    <div className="main__window">
      <ChatWindow />
      <SideWindow />
    </div>
  );
}

export default MainWindow;

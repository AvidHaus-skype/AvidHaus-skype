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
  const [groupChat, setGroupChat] = useState(false);

  const SideWindow = () => {
    if (data.chat) {
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
<<<<<<< HEAD
      {data.chat ? <MessageWindow /> : <Welcome />}

      {/* {() => {
        let window;
        if (data.chat) {
          window = <MessageWindow />;
        } else if (groupChat) {
          window = <GroupMessageWindow />;
        } else {
          window = <Welcome />;
        }
        return window;
      }} */}
=======
      <SideWindow />
>>>>>>> refs/remotes/origin/main
    </div>
  );
}

export default MainWindow;

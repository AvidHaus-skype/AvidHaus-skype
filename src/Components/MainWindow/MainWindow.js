import React, { useState } from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
import MessageWindow from "../MessageWindow/MessageWindow";
import { useSelector } from "react-redux";
import Welcome from "../Welcome/Welcome";
import "./MainWindow.css";
import GroupMessageWindow from "../GroupMessageWindow/GroupMessageWindow";
import { Route, Switch } from "react-router-dom";
function MainWindow() {
  const data = useSelector((state) => {
    return state;
  });

  return (
    <div className="main__window">
      <ChatWindow />
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/user" component={MessageWindow} exact />
        <Route path="/group" component={GroupMessageWindow} exact />
      </Switch>
    </div>
  );
}

export default MainWindow;

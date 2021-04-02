import React, { useEffect, useState } from "react";
import ChatUser from "./ChatUser/ChatUser";
import "./chatUserContainer.css";
import axios from "axios";
import { useSelector } from "react-redux";
import ChatGroup from "./ChatGroup/ChatGroup";
import { Link } from "@material-ui/core";
function ChatUserContainer() {
  const data = useSelector((state) => {
    return state;
  });
  const [ContactData, setContactData] = useState([]);
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    return axios
      .post("http://192.168.0.96:401/bwccrm/getContactsUser", {
        loginuser_id: data.Auth.data.user_id,
        user_id: data.Auth.data.user_id,
      })
      .then((res) => {
        setContactData(res.data.contacts);
        console.log("available contacts", res.data.contacts);
      });
  }, []);

  useEffect(() => {
    return axios
      .post("http://192.168.0.96:401/bwccrm/getUserGroups", {
        loginuser_id: data.Auth.data.user_id,
        user_id: data.Auth.data.user_id,
      })
      .then((res) => {
        setGroupList(res.data);
        console.log("available groups", res.data);
      })
      .catch((err) => {
        console.log("group error", err);
      });
  }, []);

  return (
    <div className="chatUserContainer">
      {!ContactData.last_msg
        ? ContactData.map((item, id) => <ChatUser users={item} key={id} />)
        : "NO CHATS ARE AVAILABLE"}
      {groupList.map((list, id) => {
        return <ChatGroup groups={list} key={id} />;
      })}
    </div>
  );
}

export default ChatUserContainer;

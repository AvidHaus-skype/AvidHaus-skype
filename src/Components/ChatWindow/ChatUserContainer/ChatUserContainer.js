import React, { useEffect, useState } from "react";
import ChatUser from "./ChatUser/ChatUser";
import "./chatUserContainer.css";
import axios from "axios";
import { useSelector } from "react-redux";
import ChatGroup from "./ChatGroup/ChatGroup";
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
        console.log(res.data.contacts);
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log("group error", err);
      });
  }, []);

  return (
    <div className="chatUserContainer">
      <div className="group">
        {groupList.map((list, id) => {
          return <ChatGroup group={list} key={id} />;
        })}
      </div>
      <div className="user">
        {!ContactData.last_msg
          ? ContactData.map((item, id) => <ChatUser users={item} key={id} />)
          : "NO CHATS ARE AVAILABLE"}
      </div>
    </div>
  );
}

export default ChatUserContainer;

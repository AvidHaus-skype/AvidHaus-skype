import React, { useEffect, useState } from "react";
import ChatUser from "./ChatUser/ChatUser";
import "./chatUserContainer.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
function ChatUserContainer() {
  const data = useSelector((state) => {
    return state;
  });
  // single user list
  useEffect(() => {
    return axios
      .post("http://192.168.0.96:401/bwccrm/getContactsUser", {
        loginuser_id: data.user.data.user_id,
        user_id: data.user.data.user_id,
      })
      .then((res) => {
        setContactData(res.data.contacts);
        setAllList([...allList, ContactData]);
      });
  }, []);

  const [ContactData, setContactData] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [allList, setAllList] = useState([]);
  console.log("groupList", allList);
  useEffect(() => {
    return axios
      .post("http://192.168.0.96:401/bwccrm/getUserGroups", {
        loginuser_id: data.user.data.user_id,
        user_id: data.user.data.user_id,
      })
      .then((res) => {
        // console.log("group res", res);
        setGroupList(res.data);
        setAllList([...allList, groupList]);
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
    </div>
  );
}

export default ChatUserContainer;

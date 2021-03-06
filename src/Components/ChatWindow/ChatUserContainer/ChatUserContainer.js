import React, { useEffect, useState } from "react";
import ChatUser from "./ChatUser/ChatUser";
import "./chatUserContainer.css";
import axios from "axios";
import { useSelector } from "react-redux";
import ChatGroup from "./ChatGroup/ChatGroup";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchedUser from "./SearchedUser/SearchedUser";

function ChatUserContainer() {
  const data = useSelector((state) => {
    return state;
  });
  const [ContactData, setContactData] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [people, setPeople] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    return axios
      .post("http://192.168.0.96:401/bwccrm/getContactsUser", {
        loginuser_id: data.Auth.data.user_id,
        user_id: data.Auth.data.user_id,
      })
      .then((res) => {
        setContactData(res.data.contacts);
      });
  }, []);
  // console.log(ContactData) 
  useEffect(() => {
    return axios
      .post("http://192.168.0.96:401/bwccrm/getUserGroups", {
        loginuser_id: data.Auth.data.user_id,
        user_id: data.Auth.data.user_id,
      })
      .then((res) => {
        setGroupList(res.data);
      })
      .catch((err) => {
        console.log("group error", err);
      });
  }, []);

  const handleTab = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <div className="container">
      {!data.searchData ? (
        <div className="chatUserContainer">
          <Paper position="static" style={{ margin: "5px" }}>
            <Tabs
              indicatorColor="primary"
              value={tabValue}
              onChange={handleTab}
            >
              <Tab
                label="People"
                onClick={() => {
                  setPeople(true);
                }}
              />
              <Tab
                label="Groups"
                onClick={() => {
                  setPeople(false);
                }}
              />
            </Tabs>
          </Paper>

          {people ? (
            <div className="chatUserList">
              {!ContactData.last_msg
                ? ContactData.map((item, id) => (
                    <ChatUser users={item} key={id} />
                  ))
                : "NO CHATS ARE AVAILABLE"}
            </div>
          ) : (
            <div className="groupList">
              {groupList.map((list, id) => {
                return <ChatGroup groups={list} key={id} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="searchedUser">
          {data.userSearch.map((user, id) => {
            return <SearchedUser users={user} key={id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ChatUserContainer;

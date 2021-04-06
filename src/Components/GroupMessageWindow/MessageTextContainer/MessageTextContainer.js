import React, { useState, useEffect } from "react";
import "./MessageTextContainer.css";
import UserMessage from "./UserMessage/UserMessage";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function MessageTextContainer() {
  const data = useSelector((state) => {
    return state;
  });
  const [groupchat, setGroupchat] = useState([]);

  useEffect(() => {
    axios
      .post("http://192.168.0.96:401/bwccrm/fetchMessageGroup", {
        group_id: data.groupChat.group_id,
        user_id: data.Auth.data.user_id,
      })
      .then((res) => {
        setGroupchat(res.data.messages);
      });
  }, [data.groupChat.group_id]);

  return (
    <div className="messageTextContainer">
      {groupchat.map((item, id) => {
        return <UserMessage chatgroup={item} key={id} />;
      })}
    </div>
  );
}

export default MessageTextContainer;

import React, { useState, useEffect } from "react";
import "./MessageTextContainer.css";
import { useDispatch, useSelector } from "react-redux";
import UserMessage from "./UserMessage/UserMessage";
import axios from "axios";

import Pusher from "pusher-js";
import { messages } from "../../../Redux/Action";
import { Avatar } from "@material-ui/core";
<script src="https://js.pusher.com/7.0/pusher.min.js" />;

function MessageTextContainer() {
  const data = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const [chattingdata, setchattingdata] = useState([]);
  // const [message, setMessage] = useState("");

  //  useEffect(() => {
    
  //   Pusher.logToConsole = true;
  //   var pusher = new Pusher('f30ce11a6ce537110adc',{
  //     cluster: 'ap2'
  //   });
  //   var chatRoom = pusher.subscribe('bwccrm-chat');
  //   chatRoom.bind('pusher:subscription_succeeded', retrieveHistory)  
    
  //   function retrieveHistory() {
  //     axios.post('http://192.168.0.96:401/bwccrm/fetchMessage').success(function(response) {
  //       JSON.stringify(response)
  //     });
  //   }
  // }, []);
  const image = data.chat.user_picture;

  useEffect(() => {
    axios
      .post("http://192.168.0.96:401/bwccrm/fetchMessage", {
        from_id: data.Auth.data.user_id,
        to_id: data.chat.user_id,
        user_id: data.Auth.data.user_id,
      })
      .then((res) => {
        setchattingdata(res.data.messages);
        dispatch(messages(res.data.messages));
      });
  }, [data.chat.user_id]);

  return (
    <div className="messageTextContainer">
      {!chattingdata.length ? (
        <div className="noChat">
          <Avatar
            style={{ width: "120px", height: "120px" }}
            src={`http://192.168.0.96:401/bwccrm/public/userpicture/${image}`}
          />
          <h2>{data.chat.user_name}</h2>
        </div>
      ) : (
        chattingdata.map((item, id) => {
          return <UserMessage sender={item} key={id} />;
        })
      )}
    </div>
  );
}

export default MessageTextContainer;

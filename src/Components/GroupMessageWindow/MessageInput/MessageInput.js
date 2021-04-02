import React, { useRef, useState, useEffect } from "react";
import "./MessageInput.css";
import SendIcon from "@material-ui/icons/Send";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useSelector } from "react-redux";


function MessageInput() {
  const [message, setMessage] = useState("");
  const [attach, setAttach] = useState();
  const data=useSelector(state=>{return state})
    
// console.log(data.groupChat.group_id)
  const SendMessage = () => {
    return axios
      .post("http://192.168.0.96:401/bwccrm/sendMessage", {
        user_id: data.Auth.data.user_id,
        loginuser_id: data.Auth.data.user_id,
        message_body: message,
        group_id: data.groupChat.group_id
      })
      .then((res) => {
        console.log(res);
      });
  };

  const getAttchment = () => {};

  return (
    <div className="messageInput">
      <div className="inputField__container">
        <textarea
          value={message}
          className="inputField"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Type a message"
        />
      </div>
      {message ? (
        <Button className="sendBtn" onClick={SendMessage}>
          <SendIcon />
        </Button>
      ) : (
        <label
          style={{
            background: "#eeeeee",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "Center",
          }}
        >
          <AttachmentIcon />

          <input
            type="file"
            multiple
            onChange={(e) => {
              setAttach(e.target.files);
            }}
          />
        </label>
      )}
    </div>
  );
}

export default MessageInput;

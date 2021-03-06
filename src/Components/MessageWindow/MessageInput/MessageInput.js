import React, { useRef, useState, useEffect } from "react";
import "./MessageInput.css";
import SendIcon from "@material-ui/icons/Send";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useSelector } from "react-redux";
import Pusher from "pusher-js";
<script src="https://js.pusher.com/7.0/pusher.min.js"></script>

function MessageInput() {
  const [message, setMessage] = useState("");
  const [attach, setAttach] = useState();
  const data = useSelector((state) => {
    return state;
  });

  //   var pusher = new Pusher('f30ce11a6ce537110adc', {
  //     cluster: 'ap2'
  //   });

  //   var channel = pusher.subscribe('bwccrm-chat');
  //     channel.bind('Messaging', function(data) {
        
  //    });
  // }, [message]);
 
  const SendMessage = () => {
    
    return axios
      .all([
        axios.post("http://192.168.0.96:401/bwccrm/sendMessage", {
          user_id: data.Auth.data.user_id,
          loginuser_id: data.Auth.data.user_id,
          message_to: data.chat.user_id,
          message_body: message,
        }),
        axios.post("http://192.168.0.96:401/bwccrm/getContactsUser", {
          loginuser_id: data.Auth.data.user_id,
          user_id: data.Auth.data.user_id,
        }),
      ])
      .then((firstResponse, secondResponse) => {
        console.log(secondResponse);
      })
      .catch((err) => {
        console.log(err);
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

import React, { useRef, useState } from "react";
import "./MessageInput.css";
import SendIcon from "@material-ui/icons/Send";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { Button } from "@material-ui/core";
function MessageInput() {
  const [message, setMessage] = useState("");
  const inputFile = useRef(null);

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
        />
      </div>
      {message ? (
        <Button className="sendBtn">
          <SendIcon />
        </Button>
      ) : (
        <Button className="sendBtn">
          <AttachmentIcon onClick={getAttchment} />
        </Button>
      )}
    </div>
  );
}

export default MessageInput;

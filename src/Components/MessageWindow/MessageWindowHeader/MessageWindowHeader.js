import React from "react";

function MessageWindowHeader() {
  return (
    <div className="MessageWindowHeader">
      <div className="userName">
        <h2>User Name</h2>
      </div>
      <div className="userStatus">
        <div className="onlineStatus"></div>
        <p>Active Online</p>
      </div>
    </div>
  );
}

export default MessageWindowHeader;

import { Avatar } from "@material-ui/core";
import React, { useState } from "react";

function SearchedUser({ user }) {
  const img = user.user_picture;
  return (
    <div className="chatUser">
      <div className="chatUser__picture">
        <Avatar
          src={`http://192.168.0.96:401/bwccrm/public/userpicture/${img}`}
        />
      </div>
      <div className="chatUser__details">
        <h3>{user.user_name}</h3>
        <p></p>
      </div>
    </div>
  );
}

export default SearchedUser;

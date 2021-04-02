import { Avatar } from "@material-ui/core";
import React, { useState } from "react";

function SearchedUser({ searchedUser }) {
  console.log(searchedUser);
  return (
    <div className="chatUser">
      <div className="chatUser__picture">
        <Avatar src="" />
      </div>
      <div className="chatUser__details">
        <h3>{searchedUser.user_name}</h3>
        <p>{searchedUser.user_loginstatus}</p>
      </div>
    </div>
  );
}

export default SearchedUser;

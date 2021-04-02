import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Welcome.css";
import { useSelector } from "react-redux";

function Welcome() {
  const data = useSelector((state) => {
    return state;
  });
  const image = data.Auth.data.user_picture;
  return (
    <div className="welcome">
      {/* {alert(data.Auth.message)} */}
      <div className="welcome__container">
        <div className="userName">
          <h1>
            Welcome <span>{data.Auth.data.user_name}</span>
          </h1>
        </div>
        <div className="User__picture">
          <Avatar
            src={`http://192.168.0.96:401/bwccrm/public/userpicture/${image}`}
          />
        </div>
        <div className="user__profession">
          <p>{data.Auth.data.role_name}</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

import { Button, Input, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./login.css";
import logo from "../../Assets/Bizz World Logo.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const handleLogin = () => {
    if (email === "") {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
    if (password === "") {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" />

        <div className="login__field">
          <TextField
            label="Email"
            onChange={(e) => {
              setEmail(e.value);
            }}
            error={checkEmail}
          />

          <TextField
            label="Password"
            onChange={(e) => {
              setPassword(e.value);
            }}
            error={checkPassword}
          />
        </div>

        <div className="loginBtn">
          <Button
            onClick={handleLogin}
            style={{ background: "#6ec6ff", color: "#fff" }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;

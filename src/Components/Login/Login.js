import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./login.css";
import logo from "../../Assets/Bizz World Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { LoginNow } from "../../Redux/Action";

function Login() {
  const data = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const handleLogin = () => {
    if (Email === "") {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
    if (Password === "") {
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
            name={Email}
            label="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            error={checkEmail}
          />
          {/* //waleed here */}

          <TextField
            name={Password}
            label="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            error={checkPassword}
          />
        </div>

        <div className="loginBtn">
          <Button
            onClick={() => dispatch(LoginNow({ Email, Password }))}
            style={{
              background: "#feb318",
              color: "#fff",
              width: "100%",
              textDecoration: "none",
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;

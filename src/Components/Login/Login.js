import { Button, Input, TextField } from "@material-ui/core";
import React, { useState} from "react";
import "./login.css";
import logo from "../../Assets/Bizz World Logo.png";
import {useSelector,useDispatch} from 'react-redux'
import { LoginNow } from "../../Redux/Action";
import axios from 'axios'



function Login() {
  const data= useSelector(state=> {return state})
  const dispatch=useDispatch()

    // const LoginNow=async()=>{
    //   const api=await axios.post('http://192.168.0.96:401/bwccrm/login',{
    //         email:Email,
    //         password:Password
    //     })
    //     // const data= await api.json()
    //     console.log(api.data)
    // }
  

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

    
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__Logo">
          <img src={logo} alt="" />
        </div>

        <div className="login__field">
          <TextField
            name={Email}
            label="Email"
            value={Email}
            onChange={e=> setEmail(e.target.value)}
          />

          <TextField
            name={Password}
            label="Password"
            value={Password}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
        {/* {data.user? data.user?.data?.message:''} */}
        <div className="loginBtn">
          <Button
            onClick={()=>dispatch(LoginNow({Email,Password}))}
            style={{ background: "#0080bd", color: "#fff" }}
          >
            Login
          </Button>
          
        </div>
      </div>
    </div>
  );
}

export default Login;

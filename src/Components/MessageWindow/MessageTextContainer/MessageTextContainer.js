import React, { useState,useEffect } from "react";
import "./MessageTextContainer.css";
import UserMessage from "./UserMessage/UserMessage";
import axios from 'axios'
import {useSelector} from 'react-redux'

function MessageTextContainer() {
  const data=useSelector(state=>{return state})
  const [chattingdata,setchattingdata]=useState([])
  
  useEffect(()=>{
      axios.post('http://192.168.0.96:401/bwccrm/fetchMessage',{
        from_id:data.user.data.user_id,
        to_id:data.chat.user_id,
        user_id:data.user.data.user_id
      }).then(res=>{
        setchattingdata(res.data.messages)
      })
  },[])
    //  console.log(chattingdata)
  return (
    <div className="messageTextContainer">
      {chattingdata.map((item,id)=>{
        return <UserMessage sender={item} key={id} />
      })}
    </div>
    
  );
}

export default MessageTextContainer;

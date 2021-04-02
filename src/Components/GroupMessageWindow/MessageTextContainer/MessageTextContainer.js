import React, { useState, useEffect } from "react";
import "./MessageTextContainer.css";
import UserMessage from "./UserMessage/UserMessage";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";

function MessageTextContainer() {
  const data=useSelector(state=>{return state})
  const dispatch=useDispatch()
  const [groupchat,setGroupchat]=useState([])
  
  // console.log(data.Auth.data.user_id)
  
  useEffect(()=>{
    axios.post('http://192.168.0.96:401/bwccrm/fetchMessageGroup',{
      group_id:data.groupChat.group_id,
      user_id:data.Auth.data.user_id
    }).then(res=>{
      setGroupchat(res.data.messages)
    })
  },[])
  console.log(groupchat)
  return (
    <div className="messageTextContainer">
      {groupchat.map((item , id)=>{
        return <UserMessage chat={item} key={id} />
      })}
    </div>
  );
}
{/*  */}
export default MessageTextContainer;

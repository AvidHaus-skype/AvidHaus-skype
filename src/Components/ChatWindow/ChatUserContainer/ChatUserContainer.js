import React,{useEffect,useState} from "react";
import ChatUser from "./ChatUser/ChatUser";
import "./chatUserContainer.css";
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
function ChatUserContainer() {
  useEffect(()=>{
    return(
      axios.post('http://192.168.0.96:401/bwccrm/getContactsUser',{
        loginuser_id : data.user.data.user_id,
        user_id : data.user.data.user_id
      }).then(res =>{
        setContactData(res.data.contacts)
      })
    )
  },[])
  const data= useSelector(state=> {return state})
  const dispatch=useDispatch()
  const [ContactData, setContactData] = useState([]);
  
  return (
    <div className="chatUserContainer">
      {!ContactData.last_msg ? ContactData.map((item,id)=>(
        <ChatUser users={item} key={id}/>
      )):'NO CHATS AVAILABLE'}
    </div>
  );
}

export default ChatUserContainer;

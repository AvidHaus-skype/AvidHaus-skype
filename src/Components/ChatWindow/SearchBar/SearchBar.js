import React, { useState } from "react";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./searchBar.css";
import axios from "axios";
import {useSelector,useDispatch} from 'react-redux'
import {UserSearch} from '../../../Redux/Action'

function SearchBar() {
  const data=useSelector(state=>{return state})
  // console.log(data.Auth.data.user_name)
  const [users, setUsers] = useState("");
  // console.log(data.Auth.data.user_name)
  const dispatch =useDispatch()
  
  return (
    <div className="searchBar">
      <Input
        value={users}
        onChange={(e) => {
          setUsers(e.target.value);

          axios.post('http://192.168.0.96:401/bwccrm/searchUser',{
              loginuser_name : data.Auth.data.user_name,
              input : users,
              user_id : data.Auth.data.user_id
            }).then(res =>{
              // console.log(res.data.records)
              dispatch(
                UserSearch(res.data.records)
              )
            }).catch(err=>{
              console.log(err)
            })
        }}
      />
      {users ? (
        <ClearIcon
          onClick={() => {
            setUsers('');
          }}
        />
      ) : (
        <SearchIcon />
      )}
    </div>
  );
}

export default SearchBar;

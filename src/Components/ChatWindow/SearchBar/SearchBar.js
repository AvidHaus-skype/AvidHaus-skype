import React, { useState } from "react";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./searchBar.css";
import axios from "axios";
import { useSelector } from "react-redux";

function SearchBar() {
  const data = useSelector((state) => {
    return state;
  });
  const [users, setUsers] = useState([]);

  return (
    <div className="searchBar">
      <Input
        style={{ width: "100%" }}
        placeholder="Search People"
        value={users}
        onChange={(e) => {
          setUsers(e.target.value);

          axios
            .post("http://192.168.0.96:401/bwccrm/searchUser", {
              loginuser_name: data.Auth.data.user_name,
              input: users,
              user_id: data.Auth.data.user_id,
            })
            .then((res) => {
              console.log(res.data.records);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      />
      {users ? (
        <ClearIcon
          onClick={() => {
            setUsers("");
          }}
        />
      ) : (
        <SearchIcon />
      )}
    </div>
  );
}

export default SearchBar;

import React, { useEffect, useState } from "react";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./searchBar.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { UserSearch } from "../../../Redux/Action";

function SearchBar() {
  const data = useSelector((state) => {
    return state;
  });
  const [users, setUsers] = useState("");
  const dispatch = useDispatch();
  const [searchedUser, setSearchedUser] = useState();

  useEffect(() => {
    axios
      .post("http://192.168.0.96:401/bwccrm/searchUser", {
        loginuser_name: data.Auth.data.user_name,
        input: users,
        user_id: data.Auth.data.user_id,
      })
      .then((res) => {
        setSearchedUser(res.data.records);
        dispatch(UserSearch(searchedUser));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);
  return (
    <div className="searchBar">
      <Input
        style={{ width: "100%" }}
        placeholder="Search People"
        value={users}
        onChange={(e) => {
          setUsers(e.target.value);
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

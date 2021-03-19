import React, { useState } from "react";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons";
import ClearIcon from "@material-ui/icons/Clear";
import "./searchBar.css";
function SearchBar() {
  const [user, setUser] = useState("");
  return (
    <div className="searchBar">
      <Input
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      {user ? <SearchIcon /> : <ClearIcon />}
    </div>
  );
}

export default SearchBar;

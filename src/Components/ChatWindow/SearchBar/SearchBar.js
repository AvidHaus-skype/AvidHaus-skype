import React, { useState } from "react";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./searchBar.css";
function SearchBar() {
  const [user, setUser] = useState("");
  return (
    <div className="searchBar">
      <Input
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      {user ? (
        <ClearIcon
          onClick={() => {
            setUser("");
          }}
        />
      ) : (
        <SearchIcon />
      )}
    </div>
  );
}

export default SearchBar;

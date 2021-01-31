import React from "react";
import "./Search.css";

function Search(props, handleSearchInput) {
  return (
    <input
      className="search"
      value={props.search}
      name="search"
      onChange={handleSearchInput}
      type="search"
      placeholder="Search Directory"
    />
  );
}

export default Search;

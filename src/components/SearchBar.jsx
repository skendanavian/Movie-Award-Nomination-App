import { useState } from "react";
import "./SearchBar.scss";

function SearchBar({ handleSearchBar }) {
  return (
    <input
      className="large"
      placeholder="Enter Movie Title"
      onChange={(event) => handleSearchBar(event.target.value)}
    />
  );
}

export default SearchBar;

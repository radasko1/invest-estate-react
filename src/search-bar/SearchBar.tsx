import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function handleChange(event: any) {
    setSearchText(event.target.value);
  }

  function handleKeyDown(event: any) {
    if (
      event.key === "Enter" ||
      event.code === "Enter" ||
      event.keyCode === 13
    ) {
      console.log(event);
    }
  }

  return (
    <div className="search-bar">
      <i className="fas fa-search"></i>
      <input
        className="search-bar-input"
        type="text"
        name="search"
        placeholder="Search..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
}

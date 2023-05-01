import React, { useState } from "react";
import './SearchBar.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
    event.preventDefault();
    props.onChange(event.target.value);
  }

  return (
    <form>
      <label>
        Search
        <input className="inputBox" type="text" value={searchTerm} onChange={handleChange} />
      </label>
    </form>
  );
}

export default SearchBar;
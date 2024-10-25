import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Search.css";

const Search = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  const [currentSearchInput, setCurrentSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //   const { id } = useParams();
  //   console.log(id);

  const handleSearchChange = (e) => {
    setCurrentSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="navbar-search" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={currentSearchInput}
        onChange={handleSearchChange}
        placeholder="Search products..."
      />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default Search;

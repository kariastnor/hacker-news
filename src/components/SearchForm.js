import React, { useContext } from "react";
import { SiteContext } from "../context";

function SearchForm() {
  const { searchTerm, handleSearchTerm, handleSearch } =
    useContext(SiteContext);

  return (
    <form onSubmit={(event) => handleSearch(event)}>
      <label htmlFor="search">Search for articles:</label>
      <div className="search-input">
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(event) => handleSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;

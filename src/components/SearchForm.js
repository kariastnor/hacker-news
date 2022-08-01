import React, { useContext } from "react";
import { SiteContext } from "../context";

function SearchForm() {
  const { searchTerm, handleSearchTerm, handleSearch } =
    useContext(SiteContext);

  return (
    <form className="search-form" onSubmit={(event) => handleSearch(event)}>
      <label htmlFor="search">Search for articles: </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(event) => handleSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;

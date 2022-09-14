import React, { useContext, useState } from "react";
import { SiteContext } from "../context";

function SearchForm() {
  const { searchTerm, handleSearchTerm, handleSearch } =
    useContext(SiteContext);

  const [active, setActive] = useState(false);

  return (
    <form
      onSubmit={(event) => handleSearch(event)}
      className={active || searchTerm ? "search active" : "search inactive"}
    >
      <label htmlFor="search">Article or author name</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(event) => handleSearchTerm(event.target.value)}
        onClick={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;

import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  //   console.log("SearchForm - Rendered");
  return (
    <article className="search">
      <input
        type="text"
        className="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <h5 className="errormsg">{error.msg} </h5>}
    </article>
  );
};

export default SearchForm;

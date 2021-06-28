import React from "react";

function Search(props) {
  return (
    <form className="search" onSubmit={(e) => props.onSubmit(e)}>
      <label></label>
      <input
        type="text"
        name="search"
        placeholder="search by title or author"
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    </form>
  );
}

export default Search;

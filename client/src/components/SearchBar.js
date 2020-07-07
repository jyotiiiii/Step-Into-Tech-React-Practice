import React from 'react';

function SearchBar() {
  return (
    <input
      placeholder="Search for a character or actor"
      aria-label="Search for a character or actor"
      type="text"
      onKeyUp={(event) => this.props.onTextChange(event.target.value)}
    />
  );
}

export default SearchBar;

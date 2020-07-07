import React from 'react';

function SearchBar(props) {
  const { onTextChange } = props;
  return (
    <input
      placeholder="Search for a character or actor"
      aria-label="Search for a character or actor"
      type="text"
      onKeyUp={(event) => onTextChange(event.target.value)}
    />
  );
}

export default SearchBar;

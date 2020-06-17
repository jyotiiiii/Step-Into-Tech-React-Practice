import React from 'react';

class SearchBar extends React.Component {
  state = {
    filter: '',
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      filter: event.target.value,
    });

    this.props.filterNames(this.state.filter);
  };

  render() {
    return (
      <input
        placeholder="Search for a character or actor"
        aria-label="Search for a character or actor"
        onChange={this.handleInputChange}
      />
    );
  }
}

export default SearchBar;

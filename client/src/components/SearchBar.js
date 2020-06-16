import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target.value;

    this.props.filterNames(target);

    this.setState({
      filter: target,
    });
  }

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

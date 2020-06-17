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

    const charList = this.props.filterNames(target);
    console.log({ charList });
    this.setState({
      characters: charList,
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

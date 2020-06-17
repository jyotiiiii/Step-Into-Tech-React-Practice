import React, { Fragment } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Favourites from './components/Favourites';
import Card from './components/Card';

axios.defaults.baseURL = `http://localhost:4000/dev`;

class App extends React.Component {
  state = {
    characters: [],
    filteredChar: '',
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get('/characters');
      this.setState({ characters: data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const filterNames = this.state.characters.filter((character) =>
      character.characterName
        .toLowerCase()
        .includes(this.state.filteredChar.toLowerCase())
    );

    const { characters } = this.state;
    return (
      <Fragment>
        <Header>
          <SearchBar
            onTextChange={(text) => this.setState({ filteredChar: text })}
          />
        </Header>
        <div className="App">
          <Favourites />
          <div className="spacer">
            <h2>Characters</h2>
            <div className="character-controls">
              <button>Sort by character name</button>
              <button>Sort by actor name</button>
            </div>
          </div>

          <div className="grid">
            {filterNames.length > 0 ? (
              filterNames.map((item) => <Card {...item} key={item.id} />)
            ) : (
              <div>No results found</div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

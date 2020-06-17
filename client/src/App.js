import React, { Fragment } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Favourites from './components/Favourites';
import Card from './components/Card';

axios.defaults.baseURL = `http://localhost:4000/dev`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filteredChar: '',
      favourites: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/characters');
      this.setState({ characters: data });
    } catch (err) {
      console.error(err);
    }
  }

  addFavourite(newFav) {
    const favourites = this.state.favourites;
    favourites.push(newFav);
    this.setState({ favourites });
    console.log({ favourites });
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
          <Favourites favList={this.state.favourites} />
          <div className="spacer">
            <h2>Characters</h2>
            <div className="character-controls">
              <button className="sort-button">Sort by character name</button>
              <button className="sort-button">Sort by actor name</button>
            </div>
          </div>

          <div className="grid">
            {filterNames.length > 0 ? (
              filterNames.map((item) => (
                <Card
                  onHeartClick={(favId) => this.addFavourite(favId)}
                  {...item}
                  key={item.id}
                />
              ))
            ) : (
              <small>
                No results found
                <span role="img" aria-label="sad face">
                  😢
                </span>
              </small>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Favourites from './components/Favourites';
import Card from './components/Card';
import Modal from './components/Modal';

axios.defaults.baseURL = `http://localhost:4000/dev`;

//change to function component with hooks for state
function App() {

  const [characters, setCharacters] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [filterString, setFilterString] = useState('');
  const [sortedBy, setSortedBy] = useState('characterName');
  const [show, setShow] = useState(false);


  useEffect(() => {
    try {
      const { data } = await axios.get('/characters');
      this.setState({ characters: data });
    } catch (err) {
      console.error(err);
    }


    // this will save favourites in state (or unfavourite)
    addFavourite = (newFav) => {
      let updateFavs = favourites;
      const match = characters.find((character) => character.id === newFav);
      if (updateFavs.includes(match)) {
        const index = updateFavs.indexOf(match);
        if (index !== -1) updateFavs.splice(index, 1);
      } else {
        updateFavs.push(match);
      }
      setFavourites(updateFavs);
    }

    addBio = (text, searchId) => {
      let charBio = characters;
      const match = charBio.find(
        (character) => character.id === parseInt(searchId)
      );
      const index = charBio.indexOf(match);
      charBio[index].bio = text;
      setCharacters(charBio);
      setShow(false);
    };

    showModal = () => {
      setShow(true);
    };

    hideModal = () => {
      setShow(false);
    };


    // TODO: filter out duplicates

    const filterNames = characters.filter((character) =>
      character.characterName
        .toLowerCase()
        .includes(filterString.toLowerCase())
    );
    console.log({ filterNames });
    filterNames.sort((a, b) =>
      a[sortedBy].localeCompare(b[sortedBy], 'en', {
        ignorePunctuation: true,
        sensitivity: 'base',
      })
    );

    return (
      <Fragment>
        <Header>
          <SearchBar
            onTextChange={(text) => setFilterString(text)}
          />
        </Header>
        <div className="App">
          <Modal
            show={show}
            addBio={() => addBio()}
            handleClose={() => hideModal()}
            characters={characters}
          />

          <Favourites
            onHeartClick={(favId) => addFavourite(favId)}
            favList={favourites}
          />

          <div className="spacer">
            <h2>Characters</h2>
            <div className="character-controls">
              <button
                onClick={() => setSortedBy('characterName')}
                className="sort-button"
              >
                Sort by character name
              </button>
              <button
                onClick={() => setSortedBy('actorName')}
                className="sort-button"
              >
                Sort by actor name
              </button>
              <button
                className="sort-button bio"
                type="button"
                onClick={() => showModal()}
              >
                Add Biography
              </button>
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

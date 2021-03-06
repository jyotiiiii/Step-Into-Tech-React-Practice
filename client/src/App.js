import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Favourites from "./components/Favourites";
import Card from "./components/Card";
import Modal from "./components/Modal";
import sampledata from "./data.json";

axios.defaults.baseURL = `http://localhost:4000/dev`;

//change to function component with hooks for state
function App() {
    const [characters, setCharacters] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [filterString, setFilterString] = useState("");
    const [sortedBy, setSortedBy] = useState("characterName");
    const [show, setShow] = useState(false);

    // replaces componentDidMount
    // TODO: not working need to make sure favourites are getting re-rendered
    useEffect(() => {
        const getCharacters = async () => {
            try {
                const { data } = await axios.get(`/characters`);
                setCharacters(data);
                console.log("try", characters);
            } catch (err) {
                setCharacters(sampledata.characters);
                console.error(err);
                console.log("catch", characters);
            }
        };
        getCharacters();
    }, [characters]);

    const handleFavourite = (newFav) => {
        console.log({ newFav });
        let updateFavs = favourites;
        const match = characters.find((character) => character.id === newFav);
        if (updateFavs.includes(match)) {
            const index = updateFavs.indexOf(match);
            if (index !== -1) updateFavs.splice(index, 1);
        } else {
            updateFavs.push(match);
        }
        // setFavourites(updateFavs) will not trigger a re-render, destructuring with spread operator
        // let the function know its a new array;
        setFavourites([...updateFavs]);
        console.log({ favourites });
    };

    const handleBio = (text, searchId) => {
        console.log({ text }, { searchId }, characters);
        // const { characters } = this.state;

        let charBio = characters;
        const match = charBio.find(
            (character) => character.id === parseInt(searchId)
        );
        const index = charBio.indexOf(match);
        charBio[index].bio = text;
        setCharacters(charBio);
        setShow(false);
    };

    const showModal = () => {
        setShow(true);
    };

    const hideModal = () => {
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
        a[sortedBy].localeCompare(b[sortedBy], "en", {
            ignorePunctuation: true,
            sensitivity: "base"
        })
    );

    return (
        <>
            <Header>
                <SearchBar onTextChange={(text) => setFilterString(text)} />
            </Header>
            <div className="App">
                <Modal
                    show={show}
                    addBio={handleBio}
                    handleClose={hideModal}
                    characters={characters}
                />

                <Favourites onClick={handleFavourite} favList={favourites} />

                <div className="spacer">
                    <h2>Characters</h2>
                    <div className="character-controls">
                        <button
                            onClick={() => setSortedBy("characterName")}
                            className="sort-button"
                        >
                            Sort by character name
                        </button>
                        <button
                            onClick={() => setSortedBy("actorName")}
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
                                isFavourite={
                                    favourites.findIndex(
                                        (fav) => fav.id === item.id
                                    ) !== -1
                                }
                                onClick={handleFavourite}
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
        </>
    );
}

export default App;

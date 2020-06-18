import React from 'react';
import Card from './Card';
class Favourites extends React.Component {
  render() {
    const myFavs = this.props.favList;
    //create new array of character objects where id is present in the myFavs array

    console.log({ myFavs });
    const { id, characterName, actorName, imageUrl } = this.props;

    return (
      <div className="spacer">
        <h2>My Favourites</h2>
        <div className="grid">
          {myFavs.length > 0 ? (
            myFavs.map((item) => <Card {...item} key={item.id} />)
          ) : (
            <small>
              No favourites here yet
              <span role="img" aria-label="sad face">
                😢
              </span>
            </small>
          )}
        </div>
      </div>
    );
  }
}

export default Favourites;

{
  /* <div className="grid">
            {myFavs.length > 0 ? (
              myFavs.map((item) => <Card {...item} key={item.id} />)
            ) : (
              <small>
                No favourites here yet
                <span role="img" aria-label="sad face">
                  😢
                </span>
              </small>
            )}
          </div> */
}

import React from 'react';
import Card from './Card';

function Favourites(props) {
  const { favList, onHeartClick } = props;

  return (
    <div className="spacer">
      <h2>My Favourites</h2>
      <div className="grid">
        {favList.length > 0 ? (
          favList.map((item) => (
            <Card
              onHeartClick={onHeartClick}
              {...item}
              key={item.id}
            />
          ))
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


export default Favourites;

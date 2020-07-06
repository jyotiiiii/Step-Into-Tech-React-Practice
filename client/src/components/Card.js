import React from 'react';

class Card extends React.Component {
  render() {
    const {
      id,
      characterName,
      actorName,
      bio,
      imageUrl,
      onHeartClick,
    } = this.props;
    return (
      <div className="card">
        <div className="container">
          <img className="fade-in image" src={imageUrl} alt={characterName} />
          <div className="overlay">
            <button
              data-title="Click to add to favourites"
              onClick={() => onHeartClick(id)}
              href="#"
              className="icon"
              title={`Click to add/remove ${characterName} to favourites`}
            >
              <i className="far fa-heart fa-lg"></i>
            </button>
          </div>
        </div>
        <div className="details">
          <button
            className="favourite-button positioned-button"
            data-title="Click to add to favourites"
            onClick={() => onHeartClick(id)}
            title={`Click to add/remove ${characterName} to favourites`}
          >
            <i className="far fa-heart fa-lg"></i>
          </button>
          <h3 className="character">{characterName}</h3>

          <small>Played by: {actorName}</small>
          {bio ? <small>Biography: {bio}</small> : null}
        </div>
      </div>
    );
  }
}

export default Card;

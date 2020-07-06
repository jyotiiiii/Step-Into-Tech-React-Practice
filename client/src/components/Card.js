import React from 'react';

class Card extends React.Component {
  render() {
    const { id, characterName, actorName, imageUrl } = this.props;
    return (
      <div className="card">
        <div className="container">
          <img className="fade-in image" src={imageUrl} alt={characterName} />
          <div className="overlay">
            <button
              data-title="Click to add to favourites"
              onClick={(event) => this.props.onHeartClick(id)}
              href="#"
              className="icon"
              title="User Profile"
            >
              <i className="far fa-heart fa-lg"></i>
            </button>
          </div>
        </div>
        <div className="details">
          <button
            className="favourite-button positioned-button"
            data-title="Click to add to favourites"
            onClick={(event) => this.props.onHeartClick(id)}
          >
            <i className="far fa-heart fa-lg"></i>
          </button>
          <h3 className="character">{characterName}</h3>

          <small>Played by: {actorName}</small>
        </div>
      </div>
    );
  }
}

export default Card;

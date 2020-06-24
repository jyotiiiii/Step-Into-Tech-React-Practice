import React from 'react';

class Card extends React.Component {
  render() {
    const { id, characterName, actorName, imageUrl } = this.props;
    return (
      <div className="card">
        <div className="container">
          <img className="fade-in image" src={imageUrl} alt={characterName} />
          <div class="overlay">
            <a href="#" class="icon" title="User Profile">
              <i class="far fa-heart fa-lg"></i>
            </a>
          </div>
        </div>
        <h3 className="character">{characterName}</h3>
        <button
          className="favourite-button"
          data-title="Click to add to favourites"
          onClick={(event) => this.props.onHeartClick(id)}
        >
          <i className="far fa-heart fa-lg"></i>
        </button>
        <small>Played by: {actorName}</small>
      </div>
    );
  }
}

export default Card;

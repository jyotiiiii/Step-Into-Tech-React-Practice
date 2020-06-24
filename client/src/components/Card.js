import React from 'react';

class Card extends React.Component {
  render() {
    const { id, characterName, actorName, imageUrl } = this.props;
    return (
      <div className="card ">
        <img className="fade-in" src={imageUrl} alt={characterName} />
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

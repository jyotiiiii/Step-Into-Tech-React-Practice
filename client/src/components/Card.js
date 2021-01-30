import React from "react";

function Card(props) {
    const {
        id,
        characterName,
        actorName,
        bio,
        imageUrl,
        onClick,
        isFavourite
    } = props;

    return (
        <div className="card">
            <div className="container">
                <img
                    className="fade-in image"
                    src={imageUrl}
                    alt={characterName}
                />
                <div className="overlay">
                    <button
                        data-title="Click to add to favourites"
                        onClick={() => onClick(id)}
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
                    className={`favourite-button positioned-button ${
                        isFavourite ? "active" : ""
                    }`}
                    data-title="Click to add to favourites"
                    onClick={() => onClick(id)}
                    title={`Click to add/remove ${characterName} to favourites`}
                >
                    <i className="far fa-heart fa-lg"></i>
                </button>
                <h3 className="character">{characterName}</h3>

                <small>
                    <strong>Played by:</strong> {actorName}
                </small>
                {bio ? (
                    <small>
                        <strong>Biography:</strong> {bio.substring(0, 80)}...
                    </small>
                ) : null}
            </div>
        </div>
    );
}

export default Card;

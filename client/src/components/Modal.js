import React from 'react';

const Modal = ({
  characters,
  handleClose,
  show,
  addBio,
  bioDescription,
  bioCharacter,
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  // addBioFuct = (event) => {
  //   event.preventDefault();
  //   addBio;
  //   bioDescription, bioCharacter;
  // };

  bioDescriptionNew = (event) => {
    this.setState({
      bioDescription: event.target.value,
    });
  };

  bioCharacterSet = (event) => {
    this.setState({
      bioCharacter: event.target.value,
    });
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Add Biography to character</h2>

        <label className="drop-down" for="bio">
          Choose a character:
        </label>
        <select className="drop-down" name="bio" id="bio">
          {characters.map((item) => (
            <option value={item.characterName} key={item.id}>
              {item.characterName}
            </option>
          ))}
        </select>
        <input
          className="text-area display-block"
          type="text"
          onChange={this.bioDescriptionNew}
        />

        <button className="sort-button" type="submit" onClick={addBio}>
          Save
        </button>
        <button className="sort-button" onClick={handleClose}>
          Cancel
        </button>
      </section>
    </div>
  );
};

export default Modal;

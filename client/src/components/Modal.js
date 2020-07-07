import React, { useState } from 'react';

function Modal(props) {
  const { addBio, characters, show, handleClose } = props;
  const [bioDescription, setBioDescription] = useState('');
  const [bioCharacter, setBioCharacter] = useState('');

  const addBioFunct = () => {
    addBio(bioDescription, bioCharacter);
  };

  const bioDescriptionNew = (event) => {
    setBioDescription(event.target.value);
  };

  const bioCharacterSet = (event) => {
    setBioCharacter(event.target.value);
  };

  // const selectNames = characters.sort((a, b) =>
  //   a['characterName'].localeCompare(b['characterName'], 'en', {
  //     ignorePunctuation: true,
  //     sensitivity: 'base',
  //   })
  // );

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Add Biography to character</h2>

        <label className="drop-down" htmlFor="bio">
          Choose a character:
        </label>
        <select
          className="drop-down"
          name="bio"
          id="bio"
          onChange={bioCharacterSet}
        >
          {characters.map((item) => (
            <option value={item.id} key={item.id}>
              {item.characterName}
            </option>
          ))}
        </select>
        <textarea
          className="text-area display-block"
          type="text"
          onChange={bioDescriptionNew}
        ></textarea>

        <button className="sort-button" type="submit" onClick={addBioFunct}>
          Save
        </button>
        <button className="sort-button" onClick={handleClose}>
          Cancel
        </button>
      </section>
    </div>
  );
}

export default Modal;

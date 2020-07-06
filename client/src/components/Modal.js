import React from 'react';

const Modal = ({ characters, handleClose, show, testInput }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Add Biography to character</h2>
        <label for="bio">Choose a character:</label>
        <select name="bio" id="bio">
          {characters.map((item) => (
            <option value={item.characterName} key={item.id}>
              {item.characterName}
            </option>
          ))}
        </select>
        <textarea
          className="text-area display-block"
          type="text"
          ref={(textarea) => {
            testInput = textarea;
          }}
        ></textarea>

        <button className="sort-button">save</button>
        <button className="sort-button" onClick={handleClose}>
          cancel
        </button>
      </section>
    </div>
  );
};

export default Modal;

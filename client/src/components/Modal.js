import React from 'react';

class Modal extends React.Component {
  state = {
    bioDescription: '',
    bioCharacter: '',
  };

  addBio = () => {
    this.props.addBio(this.state.bioDescription, this.state.bioCharacter);
  };

  bioDescriptionNew = (event) => {
    this.setState({
      bioDescription: event.target.value,
    });
  };

  bioCharacterSet = (event) => {
    console.log(event.target.value);
    this.setState({
      bioCharacter: event.target.value,
    });
  };

  render() {
    const selectNames = this.props.characters.sort((a, b) =>
      a['characterName'].localeCompare(b['characterName'], 'en', {
        ignorePunctuation: true,
        sensitivity: 'base',
      })
    );

    const showHideClassName = this.props.show
      ? 'modal display-block'
      : 'modal display-none';
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
            onChange={this.bioCharacterSet}
          >
            {selectNames.map((item) => (
              <option value={item.id} key={item.id}>
                {item.characterName}
              </option>
            ))}
          </select>
          <textarea
            className="text-area display-block"
            type="text"
            onChange={this.bioDescriptionNew}
          ></textarea>

          <button className="sort-button" type="submit" onClick={this.addBio}>
            Save
          </button>
          <button className="sort-button" onClick={this.props.handleClose}>
            Cancel
          </button>
        </section>
      </div>
    );
  }
}

export default Modal;


import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {

  const [name, setName] = React.useState("name");
  const [description, setDescription] = React.useState("description");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  return (
   
      
      <PopupWithForm name="profile-edit" title="Edit Profile" isOpen={props.isOpen} onClose={props.onClose}>
        <input className="popup__input popup__input_text_name" id="input_text_name" value={name} onChange={handleNameChange} type="text" name="profile-edit" placeholder="name" minLength="2" maxLength="40" required />
        <span className="popup__input-error" id="input_text_name-error"></span>
        <input className="popup__input popup__input_text_title" id="input_text_title" value={description} onChange={handleDescriptionChange} type="text" name="profile-edit" placeholder="Occupation" minLength="2" maxLength="200" required />
        <span className="popup__input-error" id="input_text_title-error"></span>
      </PopupWithForm>
    

  )
}

export default EditProfilePopup;

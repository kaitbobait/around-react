
import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function AddPlacePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <PopupWithForm name="places-edit" title="New Place" isOpen={props.isOpen} onClose={props.onClose}>
      <input className="popup__input popup__input_text_image-title" id="popup__input_text_image-title" type="text" name="places-edit" placeholder="Title" minLength="2" maxLength="30" required />
      <span className="popup__input-error" id="popup__input_text_image-title-error"></span>
      <input className="popup__input popup__input_text_image" id="popup__input_text_image" type="url" name="places-edit" placeholder="Image link" minLength="" maxLength="" required />
      <span className="popup__input-error" id="popup__input_text_image-error"></span>
    </PopupWithForm>
  )

}

export default AddPlacePopup;
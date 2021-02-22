
import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';


function App() {

  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    // document.querySelector(".popup_type_profile-edit").classList.add("popup_open")
    setisEditProfilePopupOpen(true);
  }

  

  const [isAddPlacePopupOpen, setisisAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    // document.querySelector(".popup_type_places-edit").classList.add("popup_open");
    setisisAddPlacePopupOpen(true);
  }

  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    // document.querySelector(".popup_type_avatar-edit").classList.add("popup_open");
    setisEditAvatarPopupOpen(true);
  }

  const [isSelected, setIsSelected] = React.useState(false);

  function handleCardClick() {
    //add later
  }
  
  // const [isPopupOpen, setisPopupOpen] = React.useState(true);
  function closeAllPopups(evt) {
    // if(evt.target.classList.contains('popup_open')) {
    //   evt.closest('popup_open').close();
    // }
    if (evt.key === "Escape") {
      evt.closest('popup_open').close();
    };
    // setisPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisisAddPlacePopupOpen(false);
  }




  return (
    <div class="page">
      <div className="page__content">
        < Header />
        < Main 
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
        < Footer />
        <PopupWithForm
          onClose={closeAllPopups}
        />

        {/* Profile Edit Popup */}
        <PopupWithForm name="profile-edit" title="Edit Profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_text_name" id="input_text_name" type="text" name="profile-edit" placeholder="name" value="name" minLength="2" maxLength="40" required />
          <span className="popup__input-error" id="input_text_name-error"></span>
          <input className="popup__input popup__input_text_title" id="input_text_title" type="text" name="profile-edit" placeholder="Occupation" value="about" minLength="2" maxLength="200" required />
          <span className="popup__input-error" id="input_text_title-error"></span>
        </PopupWithForm>

        {/* Add Places Popup */}
        <PopupWithForm name="places-edit" title="New Place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_text_image-title" id="popup__input_text_image-title" type="text" name="places-edit" placeholder="Title" minLength = "2" maxLength = "30" required />
          <span className="popup__input-error" id="popup__input_text_image-title-error"></span>
          <input className="popup__input popup__input_text_image" id="popup__input_text_image" type="url" name="places-edit" placeholder="Image link" minLength = "" maxLength = "" required />
          <span className="popup__input-error" id="popup__input_text_image-error"></span>
        </PopupWithForm>
        
        {/* Edit Avatar Popup */}
        <PopupWithForm name="avatar-edit" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_avatar" id="popup__input_avatar" type="url" name="avatar-edit" placeholder="Image link" minLength = "" maxLength = "" required />
          <span className="popup__input-error" id="popup__input_avatar-error"></span>
        </PopupWithForm>

        {/* Delete Popup  - doesn't work yet - need cards*/}
        <PopupWithForm name="delete-places" title="Are you sure?" onClose={closeAllPopups}>
        </PopupWithForm>



        {/* Image Popup - doesn't work yet
        <PopupWithForm name="image-popup">
          <div className="popup_container_image-text">
            <img className = "popup__image" />
            <h3 className ="popup__image-title"></h3>
          </div>
        </PopupWithForm> */}

        
       
        
        {/* <div className="popup popup_edit-profile">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_profile" aria-label="Close" type="button"></button>
            <h2 className="popup__intro">Edit profile</h2>
            <form className="form popup__form popup__form-profile" action="#" noValidate >
              <input className="popup__input popup__input_text_name" id="input_text_name" type="text" name="name" placeholder="name" value="name" minLength="2" maxLength="40" required />
              <span className="popup__input-error" id="input_text_name-error"></span>
              <input className="popup__input popup__input_text_title" id="input_text_title" type="text" name="about" placeholder="Occupation" value="about" minLength="2" maxLength="200" required />
              <span className="popup__input-error" id="input_text_title-error"></span>
              <button className="popup__save-button" type="submit">Save</button>
            </form>
          </div>
        </div> */}
        {/* <div className="popup popup_edit-places">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_places" aria-label="Close" type="button"></button>
            <h2 className="popup__intro">New Place</h2>
            <form className="form popup__form popup__form-places" action="#" noValidate>
              <input className="popup__input popup__input_text_image-title" id="popup__input_text_image-title" type="text" name="name" placeholder="Title" minLength = "2" maxLength = "30" required />
              <span className="popup__input-error" id="popup__input_text_image-title-error"></span>
              <input className="popup__input popup__input_text_image" id="popup__input_text_image" type="url" name="link" placeholder="Image link" minLength = "" maxLength = "" required />
              <span className="popup__input-error" id="popup__input_text_image-error"></span>
              <button className="popup__save-button" type="submit">Save</button>
            </form>
          </div>
        </div> */}

          {/* <div className = "popup popup_open_image popup_image-large">
            <div className = "popup__container_image">
              <button className="popup__close-button popup__close-button_images" aria-label="Close" type="button"></button>
              <div className="popup_container_image-text">
                <img className = "popup__image" />
                <h3 className ="popup__image-title"></h3>
              </div>
            </div>
          </div> */}

        {/* <div className = "popup popup__edit-avatar">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_avatar" aria-label="Close" type="button"></button>
            <h2 className="popup__intro">Change profile picture</h2>
            <form className="form popup__form popup__form-avatar" action="#" noValidate>
              <input className="popup__input popup__input_avatar" id="popup__input_avatar" type="url" name="link" placeholder="Image link" minLength = "" maxLength = "" required />
              <span className="popup__input-error" id="popup__input_avatar-error"></span>
              <button className="popup__save-button" type="submit">Save</button>
            </form>
          </div>
        </div> */}

        {/* <div className = "popup popup__delete">
          <div className = "popup__container">
            <button className = "popup__close-button popup__close-button_delete"></button>
            <h2 className = "popup__delete_header">Are you sure?</h2>
            <button className = "popup__save-button popup__save-button_delete">Yes</button>
          </div>
        </div> */}
      
        <template id = "place-template">
          <li className="places__item">
            <img className="places__img" />
            <button className = "places__delete-button"></button>
            <div className="places__title-section">
              <h2 className="places__name"></h2>
              <div className = "places__heart">
                <button className="places__heart-button" aria-label="like" type="button"></button>
                <div className = "places__heart-count"></div>
              </div>
            </div>
          </li>
        </template>
        {/* <!-- <script type = "module" src="scripts/index.js"></script> --> */}
      </div>
    </div>
  );
}

export default App;

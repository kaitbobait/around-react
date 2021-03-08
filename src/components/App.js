
import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Api from '../utils/api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import api from '../utils/api.js';


function App() {

  // when mounted, userInfo will be updated with value
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    Api.getUserInfo().then((data) => { setCurrentUser(data) }).catch(err => { console.log(err) })
  }, []);

  function handleUpdateUser(newInfo) {
    api.editProfile(newInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(newInfo) {
    api.editAvatar(newInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }



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


  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleCardClick(cardInfo) {
    //should add which image address in img tag to popup
    setSelectedCard(cardInfo);
    closeAllPopups();
  }

  // const [isPopupOpen, setisPopupOpen] = React.useState(true);
  function closeAllPopups(evt) {

    // setisPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisisAddPlacePopupOpen(false);
    setSelectedCard(false);

    api.getUserInfo()
    .then((res) => {
     setCurrentUser(res);
    })
   
   
  }

  



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          < Header />
          < Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          < Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 

          <PopupWithForm
            onClose={closeAllPopups}
          />

          {/* Add Places Popup */}
          <PopupWithForm name="places-edit" title="New Place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <input className="popup__input popup__input_text_image-title" id="popup__input_text_image-title" type="text" name="places-edit" placeholder="Title" minLength="2" maxLength="30" required />
            <span className="popup__input-error" id="popup__input_text_image-title-error"></span>
            <input className="popup__input popup__input_text_image" id="popup__input_text_image" type="url" name="places-edit" placeholder="Image link" minLength="" maxLength="" required />
            <span className="popup__input-error" id="popup__input_text_image-error"></span>
          </PopupWithForm>
          
          {/* Delete Popup  - doesn't work yet - need cards*/}
          <PopupWithForm name="delete-places" title="Are you sure?" onClose={closeAllPopups}>
          </PopupWithForm>

          <ImagePopup cardInfo={selectedCard} card={selectedCard.link} isOpen={selectedCard} onClose={closeAllPopups} />


        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

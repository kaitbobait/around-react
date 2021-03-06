
import React from 'react';
import { Route, Switch, Redirect, useHistory, withRouter} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute.js';
import Login from './Login.js';
import Register from './Register.js';

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
import AddPlacePopup from './AddPlacePopup.js';
import api from '../utils/api.js';




function App() {

  // when mounted, userInfo will be updated with value
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    Api.getUserInfo().then((data) => { setCurrentUser(data) }).catch(err => { console.log(err) })
  }, []);


  /* Card info */

  const [cards, setCards] = React.useState([]);

  // request initial cards api, then change cards state to new value
  React.useEffect(() => {

    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        // Create a new array based on the existing one and put a new card into it
        const newCards = cards.map((item) => item._id === card._id ? newCard : item);

        // Update the state
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // cannot read property _id of undefined, deletes card on refresh
  function handleCardDelete(card) {

    // Check to see if you own the card
    // const isOwn = card.owner._id === currentUser._id;

    api.deleteCard(card._id)
      .then((deletedCard) => {
        // const newCards = cards.map((item) => item.owner._id === currentUser._id ? deletedCard : item);
        const oldCards = [...cards];
        const filteredCards = oldCards.filter(
          (oldCard) => oldCard._id !== card._id
        );

        // Update the card state
        setCards(filteredCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddPlace(card){
    api.addCard(card)
      .then((card) => {
        setCards([card, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  /* User info */
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
  }

  // const [isPopupOpen, setisPopupOpen] = React.useState(true);
  function closeAllPopups(evt) {

    // setisPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisisAddPlacePopupOpen(false);
    setSelectedCard(false);

  }
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);




  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <ProtectedRoute path='/main' isLoggedIn={isLoggedIn} component={Main, EditProfilePopup, EditAvatarPopup, ImagePopup, PopupWithForm}>
        <div className="page">
          <div className="page__content">
            < Header />
            < Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike} //why did the parameter not pass through when like this: onCardLike={()=> {handleCardLike()}}
              onCardDelete={handleCardDelete}

            />
              
            < Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />
            <PopupWithForm
              onClose={closeAllPopups}
            />
            

            {/* Delete Popup  - doesn't work yet - need cards*/}
            <PopupWithForm name="delete-places" title="Are you sure?" onClose={closeAllPopups}>
            </PopupWithForm>

            <ImagePopup cardInfo={selectedCard} card={selectedCard.link} isOpen={selectedCard} onClose={closeAllPopups} />


          </div>
        </div>
        </ProtectedRoute>
        
      
        <Route exact path = '/'>
          {isLoggedIn ? <Redirect to = "/main" /> : <Redirect to = "/login" />}
        </Route>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path = "/register">
          <Register />
        </Route>
        
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;

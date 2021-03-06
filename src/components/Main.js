
import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function Main(props) {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

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
  }

  // cannot read property _id of undefined, deletes card on refresh
  function handleCardDelete(card) {

    // Check to see if you own the card
    const isOwn = card.owner._id === currentUser._id;

    api.deleteCard(card._id)
      .then((deletedCard) => {
        const newCards = cards.map((item) => item.owner._id === currentUser._id ? deletedCard : item);

        // Update the card state
        setCards(newCards);
      })
  }

  React.useEffect(() => {

    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);



  return (
    <main className="main">
      <section className="profile">
        <div className="profile__img" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
        <button className="profile__img-edit" aria-label="edit-picture" type="button" onClick={props.onEditAvatar}></button>
        <div className="profile__description">
          <div className="profile__description-top">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit" aria-label="edit" type="button" onClick={props.onEditProfile}>
            </button>
          </div>
          <p className="profile__title">{currentUser.about}</p>
        </div>
        <button className="profile__add" aria-label="add" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={() => {
                props.onCardClick(card);
              }}
              onCardLike={() => {
                handleCardLike(card);
              }}
              onCardDelete={() => {
                handleCardDelete(card);
              }}
            />
          ))}

        </ul>
      </section>
    </main>
  )
}

export default Main;
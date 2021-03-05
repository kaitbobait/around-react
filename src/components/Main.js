
import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';


function Main(props) {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  
      React.useEffect(() => {
        
          api.getInitialCards()
            .then((res) => {
              setCards(res);
          })
            .catch(err => {
              console.log(err);
            });
        
        }, []);
      
         

  return(
    <main className="main">
          <section className="profile">
            <div className="profile__img"style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
            <button className ="profile__img-edit" aria-label="edit-picture" type="button" onClick={props.onEditAvatar}></button>
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
                  <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                ))}
           
            </ul>
          </section>
        </main>
  )
}

export default Main;
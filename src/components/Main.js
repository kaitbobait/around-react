
import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';


function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
    }, [])

  
      React.useEffect(() => {
        
          api.getInitialCards()
            .then((res) => {
              console.log(res);
              setCards([...cards, ...res]);
            
          })
        
        }, []);
      
         

  return(
    <main className="main">
          <section className="profile">
            <div className="profile__img"style={{ backgroundImage: `url(${userAvatar})` }}></div>
            <button className ="profile__img-edit" aria-label="edit-picture" type="button" onClick={props.onEditAvatar}></button>
            <div className="profile__description">
                <div className="profile__description-top">
                  <h1 className="profile__name">{userName}</h1> 
                  <button className="profile__edit" aria-label="edit" type="button" onClick={props.onEditProfile}>
                  </button>  
                </div>
              <p className="profile__title">{userDescription}</p>
            </div>
            <button className="profile__add" aria-label="add" type="button" onClick={props.onAddPlace}></button>
          </section>
          
          <section className="places">
            <ul className="places__list">
            {/* <Card onCardClick={props.onCardClick} /> */}
                {cards.map((card, i) => (
                  
                  <>
                    
                    <li className="places__item" key={i}>
                    <img className="places__img" style={{ backgroundImage: `url(${card.link})` }} onClick={() => {props.onCardClick(props.card)}} />
                    <button className = "places__delete-button"></button>
                    <div className="places__title-section">
                      <h2 className="places__name">{card.name}</h2>
                      <div className = "places__heart">
                        <button className="places__heart-button" aria-label="like" type="button"></button>
                        <div className = "places__heart-count">{card.likes.length}</div>
                      </div>
                    </div>
                    </li>
                  </>
                ))}
           

            </ul>
          </section>
        </main>
  )
}

export default Main;

import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);


  // Checking if you are the owner of the current card
  const isOwn =  props.card.owner._id === currentUser._id;
  // Creating a variable which you'll then set in 'className' for the delete button
  const cardDeleteButtonClassName = (`${isOwn ? 'places__delete-button_visible' : 'places__delete-button_hidden'}`);

  // Chck if the card was liked by the current user
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  // Create a variable which you then set in 'className' for the like button
  const cardLikeButtonClassName = `...`;

  return (
    <li className="places__item">
                    <img className="places__img" src={props.card.link} onClick={() => {props.onCardClick(props.card)}} alt={props.card.name} />
                    <button className = "places__delete-button"></button>
                    <div className="places__title-section">
                      <h2 className="places__name">{props.card.name}</h2>
                      <div className = "places__heart">
                        <button className="places__heart-button" aria-label="like" type="button"></button>
                        <div className = "places__heart-count">{props.card.likes.length}</div>
                      </div>
                    </div>
    </li>
  )

}

export default Card;
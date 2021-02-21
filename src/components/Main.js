
import React from 'react';
import api from '../utils/api.js';


function Main(props) {

  const [userName, setUserName] = React.useState();
  
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })

  })

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
          {/* <!-- popup section after created below --> */}
          <section className="places">
            <ul className="places__list">
              
            </ul>
          </section>
        </main>
  )
}

export default Main;
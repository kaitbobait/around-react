
function Main(props) {

  // function handleEditAvatarClick() {
  //   document.querySelector(".popup_type_avatar-edit").classList.add("popup_open");
  // }

  // function handleEditProfileClick() {
  //   // document.querySelector(".popup_edit-profile").classList.add("popup_open");
  //   document.querySelector(".popup_type_profile-edit").classList.add("popup_open")
    
  // }

  // function handleAddPlaceClick() {
  //   document.querySelector(".popup_type_places-edit").classList.add("popup_open");
  // }

  // function handleCardClick() {
  //   //add later
  // }


  return(
    <main className="main">
          <section className="profile">
            <div className="profile__img"></div>
            <button className ="profile__img-edit" aria-label="edit-picture" type="button" onClick={props.onEditAvatar}></button>
            <div className="profile__description">
                <div className="profile__description-top">
                  <h1 className="profile__name">Jacques Cousteau</h1> 
                  <button className="profile__edit" aria-label="edit" type="button" onClick={props.onEditProfile}>
                  </button>  
                </div>
              <p className="profile__title">Explorer</p>
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
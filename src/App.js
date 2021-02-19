import logo from './logo.svg';

function App() {
  return (
    <div className="page__content">
      <header className="header">
        {/* <img className="logo" src="<%=require("./images/logo-svg.svg")%>" alt="Around logo"> */}
        <img className="logo" src="./images/logo-svg.svg" alt="Around logo" />
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__img"></div>
          <button className ="profile__img-edit" aria-label="edit-picture" type="button"></button>
          <div className="profile__description">
              <div className="profile__description-top">
                <h1 className="profile__name">Jacques Cousteau</h1>
                <button className="profile__edit" aria-label="edit" type="button">
                </button>  
              </div>
            <p className="profile__title">Explorer</p>
          </div>
          <button className="profile__add" aria-label="add" type="button"></button>
        </section>
        {/* <!-- popup section after created below --> */}
        <section className="places">
          <ul className="places__list">
            
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy;2020 Around The U.S.</p>
      </footer>
      <div className="popup popup_edit-profile">
        <div className="popup__container">
          <button className="popup__close-button popup__close-button_profile" aria-label="Close" type="button"></button>
          <h2 className="popup__intro">Edit profile</h2>
          <form className="form popup__form popup__form-profile" action="#" novalidate >
            <input className="popup__input popup__input_text_name" id="input_text_name" type="text" name="name" placeholder="name" value="name" minlength="2" maxlength="40" required />
            <span className="popup__input-error" id="input_text_name-error"></span>
            <input className="popup__input popup__input_text_title" id="input_text_title" type="text" name="about" placeholder="Occupation" value="about" minlength="2" maxlength="200" required />
            <span className="popup__input-error" id="input_text_title-error"></span>
            <button className="popup__save-button" type="submit">Save</button>
          </form>
        </div>
      </div>
      <div className="popup popup_edit-places">
        <div className="popup__container">
          <button className="popup__close-button popup__close-button_places" aria-label="Close" type="button"></button>
          <h2 className="popup__intro">New Place</h2>
          <form className="form popup__form popup__form-places" action="#" novalidate>
            <input className="popup__input popup__input_text_image-title" id="popup__input_text_image-title" type="text" name="name" placeholder="Title" minlength = "2" maxlength = "30" required />
            <span className="popup__input-error" id="popup__input_text_image-title-error"></span>
            <input className="popup__input popup__input_text_image" id="popup__input_text_image" type="url" name="link" placeholder="Image link" minlength = "" maxlength = "" required />
            <span className="popup__input-error" id="popup__input_text_image-error"></span>
            <button className="popup__save-button" type="submit">Save</button>
          </form>
        </div>
      </div>

        <div className = "popup popup_open_image popup_image-large">
          <div className = "popup__container_image">
            <button className="popup__close-button popup__close-button_images" aria-label="Close" type="button"></button>
            <div className="popup_container_image-text">
              <img className = "popup__image" />
              <h3 className ="popup__image-titl"e></h3>
            </div>
          </div>
        </div>

      <div className = "popup popup__edit-avatar">
        <div className="popup__container">
          <button className="popup__close-button popup__close-button_avatar" aria-label="Close" type="button"></button>
          <h2 className="popup__intro">Change profile picture</h2>
          <form className="form popup__form popup__form-avatar" action="#" novalidate>
            <input className="popup__input popup__input_avatar" id="popup__input_avatar" type="url" name="link" placeholder="Image link" minlength = "" maxlength = "" required />
            <span className="popup__input-error" id="popup__input_avatar-error"></span>
            <button className="popup__save-button" type="submit">Save</button>
          </form>
        </div>
      </div>

      <div className = "popup popup__delete">
        <div className = "popup__container">
          <button className = "popup__close-button popup__close-button_delete"></button>
          <h2 className = "popup__delete_header">Are you sure?</h2>
          <button className = "popup__save-button popup__save-button_delete">Yes</button>
        </div>
      </div>
     
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
  );
}

export default App;

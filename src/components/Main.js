
function Main() {
  return(
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
  )
}

export default Main;
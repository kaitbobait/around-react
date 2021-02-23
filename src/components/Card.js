
function Card(props) {

  

  return (
    <li className="places__item" key={props.key}>
                    <img className="places__img" src={props.card.link} onClick={() => {props.onCardClick(props.card)}} />
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
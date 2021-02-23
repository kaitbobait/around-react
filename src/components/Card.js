
function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return props.onCardClick();

}

export default Card;
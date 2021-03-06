//the component for user registration with the necessary state variables


//the component for user authorization with the necessary state variables

import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header.js';
import PopupWithForm from './PopupWithForm.js';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(evt) {
    // Prevent the browser from navigating to the form address
    evt.preventDefault();
  }

  render(){
    return(
      <>
      <Header>
        <a className="header__link_text" href="/login">Sign in</a>
      </Header>
      <div className = "page page__content signIn-page">
        <div className="signIn-page__container">
          <h2 className = "signIn-page__title" style={{"color": "white"}}>Sign up</h2>
          <form className="signIn-page__form">
            <input className ="popup__input signIn-page__input" placeholder="Email" type="text"></input>
            <input className ="popup__input signIn-page__input" placeholder="Password" type="text"></input>
            <button className="signIn-page__submit">Sign up</button>
            <p className="signIn-page__link">
              <a className="signIn-page__link_text" href="/login">
                Already a member? Log in here!
              </a>
            </p>
          </form>
          </div>
      </div>
      </>

    )
  }
}

/*
 function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleUsernameChange(evt) {
    setUserName(evt.target.value);
  }

  function handlePasswordChange(evt){
    setPassword(evt.target.value);
  }
 }

 */

 export default withRouter(Register);
 
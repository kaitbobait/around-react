
//the component for user authorization with the necessary state variables

import React from 'react';
import {withRouter} from 'react-router-dom';
import PopupWithForm from './PopupWithForm.js';

class Login extends React.Component {
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
      <div className = "page page__content signIn-page">
        <div className="signIn-page_container">
          <h2 className = "signIn-page_title" style={{"color": "white"}}>Login</h2>
          <form className="signIn-page_form">
            <input className ="popup__input signIn-page_input" placeholder="Email" type="text"></input>
            <input className ="popup__input signIn-page_input" placeholder="Password" type="text"></input>
            <button className="signIn-page_submit">Log in</button>
          </form>
          </div>
      </div>


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

 export default withRouter(Login);
 
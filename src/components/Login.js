
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
      <div>
        <h2></h2>
        <form>
          <input></input>
          <input></input>
          <button></button>
        </form>
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
 
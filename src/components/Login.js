
//the component for user authorization with the necessary state variables

import React from 'react';
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
      <PopupWithForm name="profile-edit" title="Edit Profile" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_text_name" id="input_text_name" value={name} onChange={handleNameChange} type="text" name="profile-edit" placeholder="name" minLength="2" maxLength="40" required />
      <span className="popup__input-error" id="input_text_name-error"></span>
      <input className="popup__input popup__input_text_title" id="input_text_title" value={about} onChange={handleAboutChange} type="text" name="profile-edit" placeholder="Occupation" minLength="2" maxLength="200" required />
      <span className="popup__input-error" id="input_text_title-error"></span>
    </PopupWithForm>
    )
  }
}

/*
 function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  //cannot use currentUser
   React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, []);

  function handleChange(evt) {
    const {name, value} = evt.target;

  }
 }

 */
 
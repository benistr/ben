import React, { Component } from 'react';
import './contact.scss';
import '../../styles/_vars.sass';
import Stain2 from './Stain2.png';
import Stain3 from './Stain3.png';
import * as emailjs from 'emailjs-com';
import Plane from './paper-plane.png';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        redirectToContact: false
      };
      this.onNameChange = this.onNameChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onMessageChange = this.onMessageChange.bind(this);
    }

    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
  handleSubmit(event) {
    emailjs.sendForm(
      "gmail",
      "contact_form",
      ".contact-form",
      "user_5OMUCSvwmqYc79K2f5H8x"
    )
    .then()
    .catch();
    this.setState({
      name: '',
      email: '',
      message: '',
      redirectToContact: true
    });
  }
  
  render() {
    const redirectToContact = this.state.redirectToContact;
    if (redirectToContact === true) {
      return <div>
      <p className="message-sent">Thank You!<br></br>Your Message has been sent to Benjamin</p>
      <img className="plane-contact" src={Plane}></img>
      </div>
    } else {
      <p className="message-sent">Sorry, something went wrong!</p>
    }
   return(
     <div className="container">
     <form className="contact-form" onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Please type your full name" className="form-control" value={this.state.name} name="name" onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" placeholder="Please type your email adress" className="form-control" aria-describedby="emailHelp" value={this.state.email} name="email" onChange={this.onEmailChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" placeholder="Please type your message here if you have a job for me, a million dollar to give me, or if you just want to say hi" rows="5" value={this.state.message} name="message" onChange={this.onMessageChange.bind(this)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <img className="stain2" src={Stain2}></img>
      <img className="stain3" src={Stain3}></img>
      </div>
   );
  }
  
  }
  
  export default Contact;
import React, { Component } from 'react';
import './contact.scss';
import '../../styles/_vars.sass';
import Stain2 from './Stain2.png';
import Stain3 from './Stain3.png';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
  render() {
   return(
     <div className="container">
     <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Please type your full name" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" placeholder="Please type your email adress" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" placeholder="Please type your message here if you have a job for me, a million dollar to give me, or if you just want to say hi&#9786;" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <img className="stain2" src={Stain2}></img>
      <img className="stain3" src={Stain3}></img>
      </div>
   );
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
  }
  }
  
  export default Contact;
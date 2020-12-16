import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Auth extends Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
    <div>
      <h1 className='title'>Travel Planner</h1>
      <h3 className='subtitle'>Adventure Awaits</h3>
        <button className='btn progress-btn login' onClick={this.loginClickEvent}>
          Log In
        </button>
      </div>
    );
  }
}

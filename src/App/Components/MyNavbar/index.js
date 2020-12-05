import React from 'react';
import firebase from 'firebase/app';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarText,
} from 'reactstrap';

export default class MyNavbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Travel Planner</NavbarBrand>
            <Nav className='mr-auto' navbar>
            </Nav>
            <NavbarText>Log Out</NavbarText>
        </Navbar>
      </div>
    );
  }
}

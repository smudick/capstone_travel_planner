import React from 'react';
import firebase from 'firebase/app';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

export default class MyNavbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {user ? (
          <Navbar className='nav' light expand='md'>
            <NavbarBrand href='/'>Travel Planner</NavbarBrand>
            <Nav className='mr-auto' navbar></Nav>
            <NavItem className='logout'>
              {user && (
                <button
                  className='nav-link btn btn-logout m-2'
                  onClick={this.logMeOut}
                >
                  Logout <i className='fa fa-sign-out-alt'></i>
                </button>
              )}
            </NavItem>
          </Navbar>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

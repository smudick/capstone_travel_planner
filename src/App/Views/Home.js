import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Components/Auth';
import getUid from '../../Helpers/data/authData';

export default class Home extends React.Component {
  state = {
    user: '',
  };

  componentDidMount() {
    const userID = getUid();
    this.setState({
      user: userID,
    });
  }

  render() {
    const { user } = this.state;
    return (
      <>
        {(user) ? (
          <div>
            <h1>Home</h1>
            <div className='d-flex justify-content-center'>
              <Link to='/activities'>
                <button className='btn btn-success progress-btn'>
                  Add Activities
                </button>
              </Link>
              <Link to='/saved-itineraries'>
                <button className='btn btn-secondary save-btn'>
                  Saved Itineraries
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <Auth />
        )}
      </>
    );
  }
}

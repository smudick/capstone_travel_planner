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
            <div className='d-flex justify-content-center'>
              <Link to='/activities'>
                <button className='btn btn-success progress-btn home-btn'>
                  <h3>Plan a New Trip</h3>
                  <div><i class="fas fa-plus"></i></div>
                </button>
              </Link>
              <Link to='/saved-itineraries'>
                <button className='btn btn-secondary save-btn home-btn'>
                  <h3>View Saved Itineraries</h3>
                  <div><i class="fas fa-book"></i></div>
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

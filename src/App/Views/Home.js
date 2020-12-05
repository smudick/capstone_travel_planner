import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Components/Auth';
import getUid from '../../Helpers/data/authData';
import HomeModal from '../Components/AppModals/HomeModal';
import CitySelectorForm from '../Components/Forms/CitySelectorForm';

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
              <HomeModal title={'Plan a new trip'} buttonLabel={'Plan A New Trip'} className={'progress-btn'}>
                <CitySelectorForm />
              </HomeModal>
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

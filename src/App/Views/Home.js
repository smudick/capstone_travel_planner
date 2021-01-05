import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
      userId: userID,
    });
  }

  render() {
    const { userId } = this.state;
    return (
      <>
        {userId ? (
          <div>
            <div className='d-flex justify-content-center'>
              <HomeModal
                title={'Plan a new trip'}
                buttonLabel={'Plan A New Trip'}
                className={'progress-btn'}
              >
                <CitySelectorForm />
              </HomeModal>
              <Button className='btn save-btn home-btn'>
                <Link
                className='save-btn'
                  to={{
                    pathname: '/saved-itineraries',
                    state: {
                      userId,
                    },
                  }}
                >
                  <h3>View Saved Itineraries</h3>
                  <div>
                    <i className='fas fa-book'></i>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className='auth'>
            <Auth />
          </div>
        )}
      </>
    );
  }
}

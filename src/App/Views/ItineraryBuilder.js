import React from 'react';
import { Link } from 'react-router-dom';

export default class ItineraryBuilder extends React.Component {
  render() {
    return (
      <div>
        <h1>Builder</h1>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-success'>
            <Link to='/activities'>Add More Activities</Link>
          </button>
          <button className='btn btn-secondary'>
            <Link to='/saved-itineraries'>Save Your Itinerary</Link>
          </button>
          </div>
      </div>
    );
  }
}

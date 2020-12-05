import React from 'react';
import { Link } from 'react-router-dom';

export default class SingleItinerary extends React.Component {
  render() {
    return (
      <div>
        <h1>Single Itin</h1>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-success'>
            <Link to='/build-itinerary'>Edit Itinerary</Link>
          </button>
          <button className='btn btn-secondary'>
            <Link to='/saved-itineraries'>Back</Link>
          </button>
          </div>
      </div>
    );
  }
}

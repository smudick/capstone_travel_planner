import React from 'react';
import { Link } from 'react-router-dom';

export default class SavedItineraries extends React.Component {
  render() {
    return (
      <div>
        <h1>Saved Itins</h1>
        <button className='btn btn-success'>
            <Link to='/single-itinerary'>View This Itinerary</Link>
          </button>
      </div>
    );
  }
}

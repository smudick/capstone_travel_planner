import React from 'react';
import { Link } from 'react-router-dom';

export default class Activities extends React.Component {
  render() {
    return (
      <div>
        <h1>Activities</h1>
        <button className='btn btn-success'>
            <Link to='/build-itinerary'>Build Itinerary</Link>
          </button>
      </div>
    );
  }
}

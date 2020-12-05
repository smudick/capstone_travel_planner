import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-success'>
            <Link to='/activities'>Add Activities</Link>
          </button>
          <button className='btn btn-secondary'>
            <Link to='/saved-itineraries'>Saved Itineraries</Link>
          </button>
        </div>
      </div>
    );
  }
}

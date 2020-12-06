import React from 'react';
import { Link } from 'react-router-dom';

export default class Activities extends React.Component {
  render() {
    const { city, date } = this.props.location.state;
    const displayDate = date.toDateString();
    return (
      <div>
        <h1>Search for things to do in {city} on {displayDate}</h1>
        <button className='btn btn-success'>
            <Link to='/build-itinerary'>Build Itinerary</Link>
          </button>
      </div>
    );
  }
}

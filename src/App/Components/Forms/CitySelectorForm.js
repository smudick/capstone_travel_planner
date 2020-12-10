import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DateSelector from '../DatePicker';
import getUid from '../../../Helpers/data/authData';

export default class CitySelectorForm extends Component {
  state = {
    city: 'Nashville',
    date: '',
    userId: '',
  };

  componentDidMount = () => {
    const initialDate = new Date();
    const userId = getUid();
    this.setState({
      userId,
    });
    this.setState({
      date: initialDate,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getDate = (selection) => {
    this.setState({
      date: selection,
    });
  }

  render() {
    return (
      <div>
        <form className='d-flex flex-column align-items-center'>
          <p>Select a City</p>
          <select
            name='city'
            className='form-control form-control-md mb-2'
            value={this.city}
            onChange={this.handleChange}
            required
          >
            <option value={'Nashville'}>Nashville</option>
            <option value={'New York City'}>New York City</option>
            <option value={'London'}>London</option>
            <option value={'Paris'}>Paris</option>
            <option value={'Los Angeles'}>Los Angeles</option>
            <option value={'Amsterdam'}>Amsterdam</option>
            <option value={'Chicago'}>Chicago</option>
          </select>
          <p>Select a Date</p>
          <DateSelector getDate={this.getDate}/>
          <Link to={{
            pathname: '/activities',
            state: {
              city: this.state.city,
              date: this.state.date,
              userId: this.state.userId,
            },
          }}>
            <button className='btn progress-btn mt-3'>Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import DateSelector from '../DatePicker';

export default class CitySelectorForm extends Component {
  state = {
    city: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
          >
            <option value={'Nashville'}>Nashville</option>
            <option value={'New-York-City'}>New York City</option>
            <option value={'London'}>London</option>
            <option value={'Paris'}>Paris</option>
            <option value={'Los-Angeles'}>Los Angeles</option>
            <option value={'Amsterdam'}>Amsterdam</option>
            <option value={'Chicago'}>Chicago</option>
          </select>
          <p>Select a Date</p>
          <DateSelector/>
          <button className='btn progress-btn mt-3'>Submit</button>
        </form>
      </div>
    );
  }
}

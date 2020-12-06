import React, { Component } from 'react';
import DateSelector from '../DatePicker';

export default class CitySelectorForm extends Component {
  state = {
    city: 'Nashville',
    date: '',
  };

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

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form className='d-flex flex-column align-items-center' onSubmit={this.handleSubmit}>
          <p>Select a City</p>
          <select
            name='city'
            className='form-control form-control-md mb-2'
            value={this.city}
            onChange={this.handleChange}
            required
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
          <DateSelector getDate={this.getDate}/>
          <button className='btn progress-btn mt-3'>Submit</button>
        </form>
      </div>
    );
  }
}

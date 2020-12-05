import React, { Component } from 'react';

export default class CitySelectorForm extends Component {
  state = {
    city: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <select
          name='city'
          className='form-control form-control-md'
          value={this.city}
          onChange={this.handleChange}>
            <option value={'Nashville'}>Nashville</option>
            <option value={'New-York-City'}>New York City</option>
            <option value={'London'}>London</option>
            <option value={'Paris'}>Paris</option>
            <option value={'Los-Angeles'}>Los Angeles</option>
            <option value={'Amsterdam'}>Amsterdam</option>
            <option value={'Chicago'}>Chicago</option>
        </select>
      </div>
    );
  }
}

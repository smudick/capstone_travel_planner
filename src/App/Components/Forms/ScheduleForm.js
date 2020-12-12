import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import getUid from '../../../Helpers/data/authData';
import itineraryData from '../../../Helpers/data/itineraryData';
import joinTableData from '../../../Helpers/data/joinTableData';

export default class ScheduleForm extends Component {
  state =({
    name: this.props.activity?.name || '',
    length: '',
    city: this.props.city,
    date: this.props.date,
    startTime: '',
    userId: this.props.userId,
    itineraryId: '',
    activity: this.props.activity,
  })

  componentDidMount() {
    const userId = getUid();
    let currentItin;
    itineraryData.getItineraries(userId).then((response) => {
      currentItin = response.filter((res) => res.date === this.state.date);
      console.warn(currentItin[0].firebaseKey);
      this.setState({
        userId,
        itineraryId: currentItin[0].firebaseKey,
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    joinTableData.createScheduledActivity(this.state);
  }

  render() {
    const activitySelector = () => this.props.activities.map((act) => (
        <option>{act.name}</option>
    ));
    const timeRender = () => {
      const times = [];
      for (let i = 1; i <= 24; i += 1) {
        times.push(
          <option>{i}:00</option>,
        );
      }
      return times;
    };
    return (
      <div>
        <Form className='d-flex flex-column align-items-center' onSubmit={this.handleSubmit}>
          <p>Select an Activity</p>
          <Input
            type='select'
            name='activity'
            value={this.state.actiivity}
            onChange={this.handleChange}
            className='form-control form-control-md mb-2'
            required
          >
            <option></option>
            {activitySelector()}
          </Input>
          <p>What would you like to start?</p>
          <Input
            type='select'
            name='startTime'
            value={this.state.startTime}
            onChange={this.handleChange}
            className='form-control form-control-md mb-2'
            required
          >
            <option></option>
            {timeRender()}
          </Input>
          <p>How long will this activity be?</p>
          <Input
            type='select'
            name='length'
            value={this.state.length}
            onChange={this.handleChange}
            className='form-control form-control-md mb-2'
            required
          >
            <option></option>
            <option>1 Hour</option>
            <option>2 Hours</option>
            <option>3 Hours</option>
            <option>4 Hours</option>
            <option>5 Hours</option>
          </Input>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

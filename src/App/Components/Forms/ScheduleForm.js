import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import joinTableData from '../../../Helpers/data/joinTableData';

export default class ScheduleForm extends Component {
  state =({
    length: '',
    startTime: '',
    userId: this.props.userId,
    itineraryId: this.props.itineraryId,
    name: '',
  })

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
          <option>{i}</option>,
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
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            className='form-control form-control-md mb-2'
            required
          >
            <option></option>
            {activitySelector()}
          </Input>
          <p>What time would you like to start?</p>
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
          <p>How many hours will you be there?</p>
          <Input
            type='select'
            name='length'
            value={this.state.length}
            onChange={this.handleChange}
            className='form-control form-control-md mb-2'
            required
          >
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

export default class ScheduleForm extends Component {
  render() {
    const activitySelector = () => this.props.activities.map((act) => (
        <option>{act.name}</option>
    ));
    return (
      <div>
        <Form className='d-flex flex-column align-items-center'>
          <p>Select an Activity</p>
          <Input
            type='select'
            name='city'
            className='form-control form-control-md mb-2'
            required
          >
            {activitySelector()}
          </Input>
          <p>How long will this activity be?</p>
          <Input
            type='select'
            name='city'
            className='form-control form-control-md mb-2'
            required
          >
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

import React, { Component } from 'react';
import {
  Card, CardText, CardTitle, Button,
} from 'reactstrap';
import ActivityModal from '../AppModals/ActivityModal';
import ScheduleForm from '../Forms/ScheduleForm';

export default class ScheduleCard extends Component {
  render() {
    const { activity, remove } = this.props;
    const endTime = Number(activity.startTime) + Number(activity.length);
    return (
      <Card
        style={{ height: `${activity.length}00px` }}
        body
        outline
        color='secondary'
      >
        <CardText>
          {activity.startTime}:00 - {endTime}:00
        </CardText>
        <CardTitle tag='h5'>{activity.name}</CardTitle>
        <Button
          className='btn btn-danger'
          id={activity.firebaseKey}
          onClick={(e) => remove(e)}
        >
          Remove
        </Button>
        <ActivityModal
          title={'Edit Activity'}
          buttonLabel={'Edit Activity'}
          buttonColor={'success'}
        >
          <ScheduleForm
            activity={activity}
            activities={this.props.activities}
            update={this.props.update}
          ></ScheduleForm>
        </ActivityModal>
      </Card>
    );
  }
}

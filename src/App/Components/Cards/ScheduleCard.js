import React, { Component } from 'react';
import {
  Card, CardText, CardTitle, Button,
} from 'reactstrap';
import ActivityModal from '../AppModals/ActivityModal';
import ScheduleForm from '../Forms/ScheduleForm';

export default class ScheduleCard extends Component {
  render() {
    const {
      activity, remove, activities, update,
    } = this.props;
    const timeNum = activity.startTime.split(':');
    const endTime = Number(timeNum[0]) + Number(activity.length);
    const displayAddress = () => activity.address.map((line) => (
      `${line}
      
      `
    ));
    return (
      <Card
        className='schedule-card'
        style={{ height: `${activity.length}50px` }}
        body
        outline
        color='secondary'
      >
        <div className='schedule-card-first-line'>
        <CardText className='schedule-card-times'>
          {activity.startTime} - {endTime}:00
        </CardText>
        <CardTitle className='schedule-card-title'tag='h5'>{activity.name}</CardTitle>
        <Button
          className='btn btn-danger schedule-card-delete'
          id={activity.firebaseKey}
          onClick={(e) => remove(e)}
        >
          X
        </Button>
        </div>
        <div className='d-flex flex-column align-items-center'>
        {(Array.isArray(activity.address)) ? (
            <CardText>
                {displayAddress()}
            </CardText>
        ) : (
            <CardText>{activity.address}</CardText>
        )}
        <ActivityModal
          title={'Edit Activity'}
          buttonLabel={'Edit Activity'}
          buttonColor={'success'}
        >
          <ScheduleForm
            activity={activity}
            activities={activities}
            update={update}
          ></ScheduleForm>
        </ActivityModal>
        </div>
      </Card>
    );
  }
}

import React, { Component } from 'react';
import {
  Card, CardText,
  CardTitle, Button,
} from 'reactstrap';

export default class ScheduleCard extends Component {
  render() {
    const { activity } = this.props;
    const endTime = Number(activity.startTime) + Number(activity.length);
    return (
      <Card style={{ height: `${activity.length}00px` }} body outline color="secondary">
        <CardText>{activity.startTime}:00 - {endTime}:00</CardText>
        <CardTitle tag="h5">{activity.name}</CardTitle>
      </Card>
    );
  }
}
